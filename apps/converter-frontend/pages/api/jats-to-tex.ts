import { jatsToTex } from '@jote/processors/jats-to-tex'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const text = req.body.response

    const tex = await jatsToTex(text)

    res.send(tex)
    req.statusCode = 200
  } catch (err) {
    res.statusCode = 500
    console.log(err)
    res.json({ error: err })
  }
}
