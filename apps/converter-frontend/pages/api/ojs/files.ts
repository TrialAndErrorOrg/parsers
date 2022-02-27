import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import qs from 'querystring'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { endpoint, apiToken, submissionId, stageId } = req.query
  req.statusCode = 200

  if (!apiToken) {
    res.status(403).send('No token included')
  }

  try {
    const result = (
      await axios.get(
        `${decodeURIComponent(
          Array.isArray(endpoint) ? endpoint[0] : endpoint
        )}/submissions/${submissionId}/files?${qs.stringify({
          apiToken: apiToken,
          //     fileStages: [11],
        })}`
      )
    ).data

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}
export default handler
