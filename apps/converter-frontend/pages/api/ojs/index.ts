import { getSID, replaceCookieRes } from '../../../utils/forgeCookie'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import qs from 'querystring'
import { setCookie } from '../../../utils/cookies'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { apiToken: token, searchPhrase, endpoint, ...rest } = req.query

  const session = await getSession({ req })
  if (session) {
    try {
      const response = await axios.get(
        `${process.env.OJS_API ?? endpoint}/submissions?apiToken=${
          process.env.OJS_TOKEN
        }${searchPhrase ? `&searchPhrase=${searchPhrase}` : ''}${
          rest ? `&${qs.stringify(rest)}` : ''
        }`,

        { headers: { cookie: `OJSSID=${req.cookies.OJSSID}` } }
      )
      const result = response.data

      const cookie = replaceCookieRes(response, req.headers.host || '')
      setCookie(res, 'OJSSID', getSID(response.headers['set-cookie'] || ''), {
        path: '/',
      })

      res.status(200).json(result)
      return
    } catch (e) {
      console.error(e)
      res.status(500).send(e)
      return
    }
  }

  req.statusCode = 200

  if (!token) {
    res.status(403).send('No token included')
  }

  const apiToken = token

  try {
    const response = await axios.get(
      `${endpoint}/submissions?apiToken=${apiToken}${
        searchPhrase ? `&searchPhrase=${searchPhrase}` : ''
      }`
    )

    const result = response.data
    console.log(searchPhrase, result)

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
