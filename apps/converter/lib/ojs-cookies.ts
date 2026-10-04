import { stringifySetCookie, type SerializeOptions } from 'cookie'

export const getSID = (cookie: string | string[]): string =>
  (Array.isArray(cookie) ? cookie[0] : cookie).replace(/.*?OJSSID=(.*?);.*/, '$1')

export const setCookieHeader = (
  name: string,
  value: unknown,
  options: SerializeOptions = {},
): string => {
  const stringValue = typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value)

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  return stringifySetCookie({ ...options, name, value: stringValue })
}
