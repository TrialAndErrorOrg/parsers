import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import qs from 'querystring'
import { replaceCookieRes, getSID } from '../../../utils/forgeCookie'

import { setCookie } from '../../../utils/cookies'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { endpoint, apiToken, submissionId, stageId } = req.query
  //console.log(req)
  req.statusCode = 200
  console.dir(req, { depth: null })

  if (!apiToken) {
    res.status(403).send('No token included')
    return
  }
  if(!endpoint) {
    res.status(400).send('No ENDPOINT included')
    return
  }


  try {
    const response = await axios.get(
      `${decodeURIComponent(
        Array.isArray(endpoint) ? endpoint[0] : endpoint
      )}/submissions/${submissionId}/files?${qs.stringify({
        apiToken: apiToken,
        //     fileStages: [11],
      })}`,
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
