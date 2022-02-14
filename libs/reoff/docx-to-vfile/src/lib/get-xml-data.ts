import AdmZip, { IZipEntry } from 'adm-zip'
import { join, extname } from 'path'
import { promisify } from 'util'
import yauzl, { Entry, ZipFile } from 'yauzl'
import { tryCatchPromise } from '@jote/utils'

const tab = '\t',
  cr = '\n\n',
  empty = ''
const tabRegex = new RegExp('<w:tab/>', 'g')
const tagRegex = new RegExp('(</|<)w:[^>]*>', 'g')
const extensionRegex = new RegExp('^(.docx|.xlsx|.pptx)$')
const paragraphRegex = new RegExp(
  '(<w:t>|<w:t xml:space="preserve">)[^]*?(?=</w:p>)',
  'g'
)

/**
 * Get xml data from either a buffer or path,
 */
export async function getXMLDatas(
  file: string | Buffer,
  {
    filenames,
    xml,
    returnBuffer,
  }: { filenames: (string | RegExp)[]; xml?: boolean; returnBuffer?: boolean }
): Promise<{ [key: string]: string }> {
  return new Promise((resolve, reject) => {
    if (
      typeof file === 'string' &&
      !extensionRegex.test(extname(file).toLowerCase())
    ) {
      reject(new Error('The file must be either a .docx, .xlsx or .pptx'))
    }
    try {
      if (typeof file === 'string') {
        yauzl.open(file, { lazyEntries: true }, (err, zip) =>
          unzipCallback(err, zip, resolve, reject, filenames)
        )
        return
      }
      yauzl.fromBuffer(file, { lazyEntries: true }, (err, zip) =>
        unzipCallback(err, zip, resolve, reject, filenames)
      )
    } catch (err) {
      reject(new Error(`${err} (${file})`))
    }
  })
}

function unzipCallback(
  err: unknown,
  zip: ZipFile | undefined,
  resolve: (
    value: { [key: string]: string } | PromiseLike<{ [key: string]: string }>
  ) => void,
  reject: (reason?: any) => void,
  filenames: (string | RegExp)[]
) {
  if (err) {
    reject(err)
    return
  }
  if (!zip) {
    reject(new Error('Empty zip file'))
    return
  }
  let result: { [key: string]: string }

  const openReadStream = promisify(zip.openReadStream.bind(zip))
  zip.readEntry()
  zip.on('entry', async (entry: Entry) => {
    if (
      /\/$/.test(entry.fileName) ||
      !filenames.some((filename) => entry.fileName.match(filename))
    ) {
      zip.readEntry()
      return
    }
    let stream = await openReadStream(entry)
    let entryChunks: any[] = []
    if (!stream) {
      zip.readEntry()
      return
    }
    stream.on('data', (chunk) => entryChunks.push(chunk))
    stream.on('end', () => {
      result[entry.fileName] = Buffer.from(entryChunks).toString()
    })
  })
  zip.on('end', () => {
    resolve(result)
  })
}

export async function getXMLData(
  file: string | Buffer,
  { filename = 'document', xml = true, returnBuffer = false } = {
    filename: 'document',
    xml: true,
    returnBuffer: false,
  }
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (
      typeof file === 'string' &&
      !extensionRegex.test(extname(file).toLowerCase())
    ) {
      reject(new Error('The file must be either a .docx, .xlsx or .pptx'))
    }
    try {
      const zip = new AdmZip(file)
      zip
        ?.getEntry(xml ? `word/${filename}.xml` : filename)
        ?.getDataAsync((data) => resolve(data.toString()))
    } catch (err) {
      reject(`${err} (${file})`)
    }
  })
}

/**
 * Extracts the text from your Office file.
 *
 * @param {String} path Path to the file you want to extract the text from.
 * @param {String} [xmlFilename='document'] Optional argument used to specify
 * the XML component of the file from which to extract the text (default is: 'document').
 */
export const extractText = async (
  path: string,
  xmlFilename: string = 'document'
) => {
  const xml = await getXMLData(path, { filename: xmlFilename })
  let paragraph,
    text = ''
  while ((paragraph = paragraphRegex.exec(xml))) {
    text += paragraph[0].replace(tabRegex, tab).replace(tagRegex, empty) + cr
  }
  return text
}
