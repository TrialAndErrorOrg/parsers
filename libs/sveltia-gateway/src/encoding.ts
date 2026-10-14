/*
 * Small helpers on top of Web Crypto, so the gateway runs anywhere that has
 * `crypto.subtle`: Cloudflare Workers, Node 20+, Deno and Bun.
 */

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const utf8 = (text: string) => encoder.encode(text)
export const fromUtf8 = (bytes: Uint8Array) => decoder.decode(bytes)

export function base64url(bytes: Uint8Array | ArrayBuffer) {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)
  let binary = ''
  for (const byte of view) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function fromBase64url(text: string) {
  const base64 = text
    .replace(/-/g, '+')
    .replace(/_/g, '/')
    .padEnd(Math.ceil(text.length / 4) * 4, '=')
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
}

export const randomString = (bytes = 32) => base64url(crypto.getRandomValues(new Uint8Array(bytes)))

export async function sha256(text: string) {
  return base64url(await crypto.subtle.digest('SHA-256', utf8(text)))
}

/** Compare two strings without leaking where they differ */
export function equalStrings(a: string, b: string) {
  if (a.length !== b.length) return false
  let difference = 0
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return difference === 0
}
