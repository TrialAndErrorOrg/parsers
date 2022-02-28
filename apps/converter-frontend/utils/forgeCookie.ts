import { AxiosResponse } from 'axios'
import { NextApiRequest } from 'next'

export const replaceCookieRes = (
  response: AxiosResponse,
  endpoint: string | string[]
) => {
  const cookie = response.headers['set-cookie']
  const myCookie = (Array.isArray(cookie) ? cookie[0] : cookie)?.replace(
    /domain=(.*)$/,
    `domain=${(Array.isArray(endpoint) ? endpoint[0] : endpoint)?.replace(
      /https:\/\/(.*?)\/.*/,
      '$1'
    )}`
  )
  return myCookie ? [myCookie] : ''
}

export const getSID = (cookie: string | string[]) => {
  return (Array.isArray(cookie) ? cookie[0] : cookie).replace(
    /.*?OJSSID=(.*?);.*/,
    '$1'
  )
}
