import { NextApiRequest, NextApiResponse } from 'next'
import tar from 'tar-stream'
import { WritableStreamBuffer } from 'stream-buffers'
import { streamToBuffer } from '@jorgeferrero/stream-to-buffer'
import { Writable } from 'stream'
import axios from 'axios'
import FormData from 'form-data'
import { fsyncSync } from 'fs'
import { writeFile } from 'fs/promises'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  req.statusCode = 200
  const tex = req.body
  const tarStream = new WritableStreamBuffer()
  console.log('Received tex')
  console.log(tex)

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
    console.log(this)
  })
  console.log('Laying pipe')

  pack.finalize()
  pack.pipe(writable)
  console.log('Converting tarball to buffer')
  let tarball
  writable.on('finish', async () => {
    // Create a buffer from all the received chunks
    tarball = Buffer.concat(tararr)
    console.log(tararr)

    // Insert your business logic here

    console.log(tarball)

    formdata.append('files[]', tarball, 'tarball.tar.gz')
    console.log('Posting tarball...')

    axios
      .post(
        'https://texlive2020.latexonline.cc/data?command=lualatex&target=article.tex&force=true&download=sample.pdf',

        formdata,
        {
          headers: { ...formdata.getHeaders(), responseType: 'arraybuffer' },
        }
      )
      .then(async (result) => {
        console.log('PDF Received!')
        console.log('Sending back result...')
        const data = Buffer.from(result.data)
        await writeFile('myFile.pdf', result.data, {
          encoding: 'binary',
        })
        console.log(result)
        res.status(200)
        res.setHeader('Content-Type', 'application/pdf')
        res.send(data)
      })
      .catch(async (e) => {
        console.log('Oopsie whoopsie, we made a fucky wucky!')
        console.error(e)
      })
  })
}
