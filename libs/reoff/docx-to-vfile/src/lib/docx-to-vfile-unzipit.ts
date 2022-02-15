import { VFile } from 'vfile'
import { unzip } from 'unzipit'

const removeHeader = (text: string | undefined) =>
  text ? text.replace(/<\?xml.*?\?>/, '') : ''

const removeCarriage = (text: string | undefined) =>
  text ? text.replace(/\r/, '') : ''
export async function docxToVFile(file: ArrayBuffer) {
  const { entries } = await unzip(file)
  const doc = await entries['word/document.xml'].text()
  const foot = (await entries?.['word/footnotes.xml']?.text()) || ''
  const bib = (await entries?.['customXml/item1.xml']?.text()) || ''
  // const data = await getXMLDatas(file, {
  //   filenames: [
  //     /customXml\/item\d+\.xml/,
  //     'word/document.xml',
  //     'word/footnotes.xml',
  //   ],
  // })

  // const {
  //   'word/document.xml': document,
  //   'word/footnotes.xml': footnotes,
  //   ...bibliography
  // } = data
  const total = `${removeCarriage(doc).slice(0, -'</w:document>'.length)}
  ${removeHeader(foot)}
  ${removeHeader(bib)}
  </w:document>`
  const vfile = new VFile(total)
  // if (footnotes) {
  //   Object.assign(vfile.data, { footnotes })
  // }
  return vfile
}
