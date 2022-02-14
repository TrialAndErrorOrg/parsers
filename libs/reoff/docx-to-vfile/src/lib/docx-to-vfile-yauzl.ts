import { VFile } from 'vfile'
import { getXMLDatas } from './get-xml-data'

const removeHeader = (text: string | undefined) =>
  text ? text.replace(/<\?xml.*?\?>/, '') : ''

export async function docxToVFile(file: Buffer | string) {
  const data = await getXMLDatas(file, {
    filenames: [
      /customXml\/item\d+\.xml/,
      'word/document.xml',
      'word/footnotes.xml',
    ],
  })

  const {
    'word/document.xml': document,
    'word/footnotes.xml': footnotes,
    ...bibliography
  } = data
  const total = `${removeHeader(document).slice(0, -'</w:document>'.length)}
  ${removeHeader(footnotes)}
  ${Object.values(bibliography)
    .map((bib) => removeHeader(bib))
    .join('\n')}
  </w:document>`
  const vfile = new VFile(total)
  // if (footnotes) {
  //   Object.assign(vfile.data, { footnotes })
  // }
  return vfile
}
