import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  req.statusCode = 200
  res.json({ hey: 'nerd' })
}
