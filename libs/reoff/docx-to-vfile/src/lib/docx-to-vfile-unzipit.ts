import { VFile } from 'vfile'
import { unzip } from 'unzipit'

const removeHeader = (text: string | undefined) =>
  text ? text.replace(/<\?xml.*?\?>/, '') : ''

export async function docxToVFile(file: ArrayBuffer) {
  const { entries } = await unzip(file)
  console.log(entries['word/document.xml'])
  const doc = (await entries['word/document.xml'].arrayBuffer()).toString()
  const foot =
    (await entries?.['word/footnotes.xml']?.arrayBuffer())?.toString() || ''
  const bib =
    (await entries?.['customXml/item1.xml']?.arrayBuffer())?.toString() || ''
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
  const total = `${removeHeader(doc).slice(0, -'</w:document>'.length)}
  ${removeHeader(foot)}
  ${Object.values(bib)
    .map((bib) => removeHeader(bib))
    .join('\n')}
  </w:document>`
  const vfile = new VFile(total)
  // if (footnotes) {
  //   Object.assign(vfile.data, { footnotes })
  // }
  return vfile
}
