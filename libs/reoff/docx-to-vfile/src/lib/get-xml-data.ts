/* eslint-disable regexp/no-unused-capturing-group */
import AdmZip from 'adm-zip'
import { extname } from 'path'
import { promisify } from 'util'
import yauzl, { Entry, ZipFile } from 'yauzl'

const tab = '\t'
const cr = '\n\n'
const tabRegex = /<w:tab\/>/g
const tagRegex = /(<\/|<)w:[^>]*>/g
const extensionRegex = /^(.docx|.xlsx|.pptx)$/
const paragraphRegex = /(<w:t>|<w:t xml:space="preserve">).*?(?=<\/w:p>)/g

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
  const result: { [key: string]: string } = {}

  const openReadStream = promisify(zip.openReadStream.bind(zip))
  zip.readEntry()
  zip.on('entry', async (entry: Entry) => {
    if (
      /\/$/.test(entry.fileName) ||
      !filenames.some((filename) => entry.fileName.match(filename))
    ) {
      zip.readEntry()
    } else {
      const stream = await openReadStream(entry)
      const entryChunks: any[] = []
      if (stream) {
        stream!.on('data', (chunk) => entryChunks.push(chunk))
        stream!.on('end', () => {
          const string = Buffer.concat(entryChunks).toString()
          result[entry.fileName] = string
          zip.readEntry()
        })
      }
    }
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
export const extractText = async (path: string, xmlFilename = 'document') => {
  const xml = await getXMLData(path, { filename: xmlFilename })
  let paragraph
  let text = ''
  while ((paragraph = paragraphRegex.exec(xml))) {
    text += paragraph[0].replace(tabRegex, tab).replace(tagRegex, '') + cr
  }
  return text
}
