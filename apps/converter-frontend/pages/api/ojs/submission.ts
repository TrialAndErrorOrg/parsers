import { getSID, replaceCookieRes } from '../../../utils/forgeCookie'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { setCookie } from '../../../utils/cookies'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, apiToken: token } = req.query
  let apiToken = token
  const session = await getSession({ req })
  if (session) {
    apiToken = process.env.OJS_TOKEN!
  }
  req.statusCode = 200

  if (!apiToken) {
    res.status(403).send('No token included')
  }

  try {
    const response = await axios.get(
      `${decodeURIComponent(
        Array.isArray(url) ? url[0] : url
      )}?apiToken=${apiToken}`,
      { headers: { cookie: `OJSSID=${req.cookies.OJSSID}` } }
    )
    const result = response.data

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
