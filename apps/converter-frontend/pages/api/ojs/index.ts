import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import qs from 'querystring'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { apiToken: token, searchPhrase, endpoint, ...rest } = req.query

  const session = await getSession({ req })
  if (session) {
    try {
      const result = (
        await axios.get(
          `${process.env.OJS_API}/submissions?apiToken=${
            process.env.OJS_TOKEN
          }${searchPhrase ? `&search-phrase=${searchPhrase}` : ''}${
            rest ? `&${qs.stringify(rest)}` : ''
          }`
        )
      ).data

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
    const result = (
      await axios.get(
        `${endpoint}/submissions?apiToken=${apiToken}${
          searchPhrase ? `&search-phrase=${searchPhrase}` : ''
        }`
      )
    ).data

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
export default handler
