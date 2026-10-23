import { fromBase64url, fromUtf8, sha256, utf8 } from './encoding.js'

/*
 * Who an editor is. Any OpenID Connect provider works through `oidc()`;
 * `entra()` and `google()` fill in the details for the common ones. The flow
 * is the authorization code flow with PKCE and a nonce, and the ID token's
 * signature is checked against the provider's published keys.
 */

export interface Editor {
  /** Stable id from the identity provider */
  id: string
  name: string
  email?: string
}

export type Claims = Record<string, unknown>

export interface SignInStart {
  redirectUri: string
  state: string
  nonce: string
  codeVerifier: string
}

export interface IdentityProvider {
  /** Where to send the editor to sign in */
  authorizationUrl(start: SignInStart): Promise<string>
  /** Trade the code the provider sent back for the editor. Throws when sign-in failed or isn't allowed */
  finish(code: string, start: SignInStart): Promise<Editor>
}

export interface OidcOptions {
  /** The issuer, e.g. `https://accounts.google.com`. Its discovery document is read from `/.well-known/openid-configuration` */
  issuer: string
  clientId: string
  /** Needed for confidential clients (Entra web apps, Google). Leave out for public clients */
  clientSecret?: string
  /** Defaults to `openid profile email` */
  scopes?: string[]
  /** Extra parameters for the authorization request, e.g. `{ prompt: "select_account" }` */
  authorizationParams?: Record<string, string>
  /** Who may sign in, decided from the ID token's claims. Everyone the provider lets through, if left out */
  allow?: (claims: Claims) => boolean | Promise<boolean>
  /** Turn claims into an editor. By default: `sub`, `name` and `email` */
  toEditor?: (claims: Claims) => Editor
}

interface Discovery {
  issuer: string
  authorization_endpoint: string
  token_endpoint: string
  jwks_uri: string
}

/** Any OpenID Connect provider */
export function oidc(options: OidcOptions): IdentityProvider {
  let discovery: Promise<Discovery> | undefined
  const discover = () => {
    discovery ??= getJson<Discovery>(
      `${options.issuer.replace(/\/$/, '')}/.well-known/openid-configuration`,
    ).catch((error) => {
      discovery = undefined
      throw error
    })
    return discovery
  }
  const keys = new JwksCache()

  return {
    async authorizationUrl({ redirectUri, state, nonce, codeVerifier }) {
      const { authorization_endpoint } = await discover()
      const url = new URL(authorization_endpoint)
      for (const [key, value] of Object.entries({
        ...options.authorizationParams,
        client_id: options.clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: (options.scopes ?? ['openid', 'profile', 'email']).join(' '),
        state,
        nonce,
        code_challenge: await sha256(codeVerifier),
        code_challenge_method: 'S256',
      })) {
        url.searchParams.set(key, value)
      }
      return url.href
    },

    async finish(code, { redirectUri, nonce, codeVerifier }) {
      const config = await discover()
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: options.clientId,
        code_verifier: codeVerifier,
      })
      if (options.clientSecret) body.set('client_secret', options.clientSecret)
      const response = await fetch(config.token_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body,
      })
      if (!response.ok)
        throw new Error(`The identity provider refused the sign-in (${response.status})`)
      const { id_token: idToken } = (await response.json()) as { id_token?: string }
      if (!idToken) throw new Error('The identity provider sent no ID token')

      const claims = await verifyJwt(idToken, (kid) => keys.get(config.jwks_uri, kid))
      if (claims.iss !== config.issuer) throw new Error('The ID token is from another issuer')
      const audience = Array.isArray(claims.aud) ? claims.aud : [claims.aud]
      if (!audience.includes(options.clientId)) throw new Error('The ID token is for another app')
      if (claims.nonce !== nonce) throw new Error('The ID token is for another sign-in')
      if (options.allow && !(await options.allow(claims)))
        throw new Error('This account may not edit this site')

      const editor = (options.toEditor ?? defaultEditor)(claims)
      if (!editor.id) throw new Error('The ID token does not say who signed in')
      return editor
    },
  }
}

export interface EntraOptions extends Omit<OidcOptions, 'issuer'> {
  /** The directory (tenant) id. Only accounts from this tenant can sign in */
  tenantId: string
}

/**
 * Microsoft Entra ID (Azure AD), single tenant. Decide who may sign in in
 * Entra itself: set "Assignment required" on the app and assign people or
 * groups. `allow` can narrow it further.
 */
export function entra({ tenantId, allow, ...options }: EntraOptions): IdentityProvider {
  return oidc({
    authorizationParams: { prompt: 'select_account' },
    ...options,
    issuer: `https://login.microsoftonline.com/${tenantId}/v2.0`,
    allow: async (claims) => claims.tid === tenantId && (allow ? await allow(claims) : true),
    toEditor:
      options.toEditor ??
      ((claims) => ({
        id: String(claims.oid ?? claims.sub),
        name: String(claims.name ?? claims.preferred_username ?? ''),
        email: str(claims.email) ?? str(claims.preferred_username),
      })),
  })
}

export interface GoogleOptions extends Omit<OidcOptions, 'issuer'> {
  /** Only accounts of this Google Workspace domain can sign in */
  domain?: string
}

/** Google, optionally limited to one Workspace domain */
export function google({ domain, allow, ...options }: GoogleOptions): IdentityProvider {
  return oidc({
    authorizationParams: { prompt: 'select_account', ...(domain && { hd: domain }) },
    ...options,
    issuer: 'https://accounts.google.com',
    allow: async (claims) =>
      claims.email_verified === true &&
      (!domain || claims.hd === domain) &&
      (allow ? await allow(claims) : true),
  })
}

/**
 * Signs everyone in as the given editor without asking anyone. For trying the
 * gateway locally only: never use it where others can reach it.
 */
export function testIdentity(
  editor: Editor = { id: 'test', name: 'Test Editor', email: 'editor@example.org' },
): IdentityProvider {
  return {
    authorizationUrl: async ({ redirectUri, state }) => {
      const url = new URL(redirectUri)
      url.searchParams.set('code', 'test')
      url.searchParams.set('state', state)
      return url.href
    },
    finish: async () => editor,
  }
}

const str = (value: unknown) => (typeof value === 'string' && value ? value : undefined)

const defaultEditor = (claims: Claims): Editor => ({
  id: String(claims.sub ?? ''),
  name: String(claims.name ?? claims.preferred_username ?? claims.email ?? ''),
  email: str(claims.email),
})

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`${response.status} for ${url}`)
  return (await response.json()) as T
}

type Jwk = JsonWebKey & { kid?: string; alg?: string }

/** The provider's signing keys, fetched again when a token names a key we haven't seen (keys rotate) */
class JwksCache {
  private keys: Jwk[] = []
  private fetchedAt = 0

  async get(uri: string, kid: string | undefined) {
    const find = () => this.keys.find((key) => !kid || key.kid === kid)
    if (!find() && Date.now() - this.fetchedAt > 60_000) {
      this.keys = (await getJson<{ keys: Jwk[] }>(uri)).keys
      this.fetchedAt = Date.now()
    }
    const key = find()
    if (!key) throw new Error('The ID token is signed with an unknown key')
    return key
  }
}

const ALGORITHMS: Record<
  string,
  { import: RsaHashedImportParams | EcKeyImportParams; verify: AlgorithmIdentifier | EcdsaParams }
> = {
  RS256: {
    import: { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    verify: { name: 'RSASSA-PKCS1-v1_5' },
  },
  ES256: {
    import: { name: 'ECDSA', namedCurve: 'P-256' },
    verify: { name: 'ECDSA', hash: 'SHA-256' },
  },
}

/** A JWT's claims, after checking its signature and expiry */
export async function verifyJwt(
  token: string,
  keyFor: (kid: string | undefined) => Promise<Jwk>,
): Promise<Claims> {
  const [header, payload, signature] = token.split('.')
  if (!header || !payload || !signature) throw new Error('Malformed ID token')
  const { alg, kid } = JSON.parse(fromUtf8(fromBase64url(header))) as { alg: string; kid?: string }
  const algorithm = ALGORITHMS[alg]
  if (!algorithm) throw new Error(`Unsupported ID token algorithm ${alg}`)

  const jwk = await keyFor(kid)
  const key = await crypto.subtle.importKey(
    'jwk',
    { ...jwk, alg, ext: true },
    algorithm.import,
    false,
    ['verify'],
  )
  const valid = await crypto.subtle.verify(
    algorithm.verify,
    key,
    fromBase64url(signature),
    utf8(`${header}.${payload}`),
  )
  if (!valid) throw new Error("The ID token's signature is wrong")

  const claims = JSON.parse(fromUtf8(fromBase64url(payload))) as Claims
  const now = Date.now() / 1000
  if (typeof claims.exp !== 'number' || claims.exp < now - 60)
    throw new Error('The ID token has expired')
  if (typeof claims.nbf === 'number' && claims.nbf > now + 60)
    throw new Error('The ID token is not valid yet')
  return claims
}
