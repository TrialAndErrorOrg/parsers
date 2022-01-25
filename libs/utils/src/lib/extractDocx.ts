import { Stream } from 'stream'
import { promisify } from 'util'
import { ZipFile } from 'yauzl'
import openZipFromBuffer from './openZipFromBuffer'
import tryCatchPromise from './tryCatchPromise'
import tryCatchVoid from './tryCatchVoid'

export async function extractDocx(docx: Buffer, stream?: Stream): Promise<any> {
  const [zipfile, zipfileError]: [ZipFile, Error] = await tryCatchPromise(
    openZipFromBuffer(docx, { lazyEntries: true })
  )
  console.log(zipfile)
  if (zipfileError) {
    return
  }
  if (!zipfile) {
    console.error('No Zipfile')
    return
  }
  const openReadStream = promisify(zipfile.openReadStream.bind(zipfile))

  const e = tryCatchVoid(zipfile.readEntry())
  if (e) {
    console.error(e)
    return
  }

  zipfile.on('entry', async (entry) => {
    console.log('AAAAAAAAA')
    if (/\/$/.test(entry.fileName)) {
      // Directory file names end with '/'.
      // Note that entries for directories themselves are optional.
      // An entry's fileName implicitly requires its parent directories to exist.
      console.log(entry)
      zipfile.readEntry()
      return
    }
    //console.dir(entry, { depth: null })
    const [stream, streamError]: [Stream, Error] = await tryCatchPromise(
      openReadStream(entry)
    )

    if (streamError) {
      console.error(streamError)
      return
    }
    if (!stream) {
      console.error('No Stream')
      console.log(stream)
      return
    }

    stream.on('data', (data) => {
      console.log(data)
    })

    stream.on('end', () => {
      console.log('<EOF>')
      zipfile.readEntry()
    })

    stream.pipe(process.stdout)
  })

  zipfile.on('end', () => {
    console.log('end of entries')
    return
  })
}
