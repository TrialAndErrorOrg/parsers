import { jatsToTex } from '@jote/processors/jats-to-tex'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    ////console.log(req.body.response)
    const text = req.body.response

    const tex = await jatsToTex(text)
    //console.log(tex)

    res.status(200).json({ tex })
    req.statusCode = 200
  } catch (err) {
    res.statusCode = 500
    //console.log(err)
    res.json({ error: err })
  }
}
