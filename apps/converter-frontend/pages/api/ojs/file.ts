import { replaceCookieRes, getSID } from '../../../utils/forgeCookie'

import { setCookie } from '../../../utils/cookies'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import qs from 'querystring'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query

  req.statusCode = 200

  try {
    const response = await axios.get(`${Array.isArray(url) ? url[0] : url}`, {
      headers: {
        cookie: `OJSSID=${req.cookies.OJSSID}`,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:97.0) Gecko/20100101 Firefox/97.0',
        'Accept-Encoding': 'gzip,deflate,br',
        'Accept-Language': 'en-US; en; q=0.5',
      },
    })

    const result = response.data

    const cookie = replaceCookieRes(response, req.headers.host || '')
    setCookie(res, 'OJSSID', getSID(response.headers['set-cookie'] || ''), {
      path: '/',
    })

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
export default handler
