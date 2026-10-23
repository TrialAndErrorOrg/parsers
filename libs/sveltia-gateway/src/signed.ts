import { base64url, equalStrings, fromBase64url, fromUtf8, utf8 } from './encoding.js'

/*
 * Values the gateway hands out and takes back unchanged: the editor's session
 * and the sign-in attempt kept in a cookie. They are signed with the session
 * secret and carry their own expiry, so the gateway needs no database.
 */

const keys = new Map<string, Promise<CryptoKey>>()

function hmacKey(secret: string) {
  let key = keys.get(secret)
  if (!key) {
    key = crypto.subtle.importKey('raw', utf8(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
      'sign',
    ])
    keys.set(secret, key)
  }
  return key
}

async function signature(secret: string, data: string) {
  return base64url(await crypto.subtle.sign('HMAC', await hmacKey(secret), utf8(data)))
}

/** Sign `value`, valid for `ttl` seconds */
export async function seal(secret: string, value: object, ttl: number) {
  const data = base64url(
    utf8(JSON.stringify({ ...value, exp: Math.floor(Date.now() / 1000) + ttl })),
  )
  return `${data}.${await signature(secret, data)}`
}

/** The value back, or undefined when it was changed, is malformed or has expired */
export async function unseal<T>(
  secret: string,
  token: string | null | undefined,
): Promise<T | undefined> {
  const [data, given, extra] = token?.split('.') ?? []
  if (!data || !given || extra !== undefined) return undefined
  if (!equalStrings(given, await signature(secret, data))) return undefined
  try {
    const value = JSON.parse(fromUtf8(fromBase64url(data)))
    return typeof value.exp === 'number' && value.exp > Date.now() / 1000 ? (value as T) : undefined
  } catch {
    return undefined
  }
}
