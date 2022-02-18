import { NextApiRequest, NextApiResponse } from 'next'
import tar from 'tar-stream'
import { Writable } from 'stream'
import axios from 'axios'
import FormData from 'form-data'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  req.statusCode = 200
  const tex = req.body
  console.log('Received tex')

  const tararr: any[] = []
  const writable = new Writable({
    write: (chunk, encoding, next) => {
      console.log(chunk)
      tararr.push(chunk)
      next()
    },
  })
  const formdata = new FormData()
  const pack = tar.pack()
  console.log('Packing tarball')
  pack.entry({ name: 'article.tex' }, tex)
  pack.on('finish', function () {
    //
  })
  console.log('Laying pipe')

  pack.finalize()
  pack.pipe(writable)
  console.log('Converting tarball to buffer')
  let tarball
  writable.on('finish', async () => {
    tarball = Buffer.concat(tararr)

    formdata.append('files[]', tarball, 'tarball.tar.gz')
    console.log('Posting tarball...')

    axios
      .post(
        'https://texlive2020.latexonline.cc/data?command=lualatex&target=article.tex&force=true&download=sample.pdf',

        formdata,
        {
          responseType: 'arraybuffer',
          headers: {
            ...formdata.getHeaders(),
            Accept: 'application/pdf',
          },
        }
      )
      .then(async (result) => {
        console.log('PDF Received!')
        console.log('Sending back result...')
        const data = Buffer.from(result.data)
        res.status(200)
        res.setHeader('Content-Type', 'application/pdf')
        res.send(data)
      })
      .catch(async (e) => {
        console.log('Oopsie whoopsie, we made a fucky wucky!')
        console.error(e)
        res.status(400)
        res.send(e)
      })
  })
}

export default handler
