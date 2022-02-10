import AdmZip from 'adm-zip'
import { extname } from 'path'

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
