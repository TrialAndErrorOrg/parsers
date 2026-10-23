import { base64url, utf8 } from './encoding.js'

/*
 * Tokens for GitHub. Editors have no GitHub account, so the gateway talks to
 * GitHub as a GitHub App installed on the content repository, asking for
 * short-lived installation tokens limited to that one repository. A fixed
 * token works too, for testing.
 */

export type GitHubCredentials =
  | {
      /** The GitHub App's id */
      appId: string | number
      /** The app's private key, as downloaded (PKCS#1, "BEGIN RSA PRIVATE KEY") or PKCS#8 */
      privateKey: string
    }
  | {
      /** A token that can read and write the repository, e.g. a fine-grained personal access token. Mainly for testing */
      token: string
    }

export interface TokenSource {
  token(): Promise<string>
}

export function githubTokens(
  credentials: GitHubCredentials,
  repo: string,
  apiRoot: string,
): TokenSource {
  if ('token' in credentials) return { token: async () => credentials.token }

  let cached: { token: string; expires: number } | undefined
  let pending: Promise<string> | undefined

  const renew = async () => {
    const jwt = await appJwt(String(credentials.appId), credentials.privateKey)
    const headers = {
      Authorization: `Bearer ${jwt}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'sveltia-gateway',
    }
    const installation = await githubJson<{ id: number }>(`${apiRoot}/repos/${repo}/installation`, {
      headers,
    })
    const access = await githubJson<{ token: string; expires_at: string }>(
      `${apiRoot}/app/installations/${installation.id}/access_tokens`,
      {
        method: 'POST',
        headers,
        // Only this repository, and only what the CMS needs
        body: JSON.stringify({
          repositories: [repo.split('/')[1]],
          permissions: { contents: 'write', pull_requests: 'write' },
        }),
      },
    )
    cached = { token: access.token, expires: Date.parse(access.expires_at) }
    return access.token
  }

  return {
    async token() {
      // Installation tokens last an hour. Renew five minutes early, once even when many requests ask at the same time
      if (cached && cached.expires > Date.now() + 5 * 60_000) return cached.token
      pending ??= renew().finally(() => {
        pending = undefined
      })
      return pending
    },
  }
}

async function githubJson<T>(url: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, init)
  if (!response.ok)
    throw new Error(
      `GitHub ${response.status} for ${new URL(url).pathname}: ${await response.text()}`,
    )
  return (await response.json()) as T
}

const signingKeys = new Map<string, Promise<CryptoKey>>()

/** The JWT a GitHub App signs to ask for installation tokens, valid for nine minutes */
export async function appJwt(appId: string, privateKey: string) {
  let key = signingKeys.get(privateKey)
  if (!key) {
    key = crypto.subtle.importKey(
      'pkcs8',
      pemToPkcs8(privateKey),
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign'],
    )
    signingKeys.set(privateKey, key)
  }
  const now = Math.floor(Date.now() / 1000)
  const encode = (value: object) => base64url(utf8(JSON.stringify(value)))
  const data = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({ iat: now - 60, exp: now + 9 * 60, iss: appId })}`
  return `${data}.${base64url(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', await key, utf8(data)))}`
}

/**
 * GitHub hands out PKCS#1 keys, and Web Crypto only reads PKCS#8, so wrap the
 * former in the latter. Accepts either, with real or escaped (`\n`) newlines.
 */
export function pemToPkcs8(pem: string): Uint8Array<ArrayBuffer> {
  const text = pem.replace(/\\n/g, '\n')
  const pkcs1 = /BEGIN RSA PRIVATE KEY/.test(text)
  const body = text.replace(/-----(BEGIN|END)[^-]+-----/g, '').replace(/\s+/g, '')
  const der = Uint8Array.from(atob(body), (c) => c.charCodeAt(0))
  if (!pkcs1) return der

  // PrivateKeyInfo ::= SEQUENCE { version 0, AlgorithmIdentifier rsaEncryption, OCTET STRING pkcs1 }
  const rsaEncryption = [
    0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00,
  ]
  const inner = [0x02, 0x01, 0x00, ...rsaEncryption, 0x04, ...derLength(der.length), ...der]
  return Uint8Array.from([0x30, ...derLength(inner.length), ...inner])
}

function derLength(length: number) {
  if (length < 0x80) return [length]
  const bytes: number[] = []
  for (let n = length; n > 0; n >>= 8) bytes.unshift(n & 0xff)
  return [0x80 | bytes.length, ...bytes]
}
