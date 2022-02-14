import { VFile } from 'vfile'
import { getXMLDatas } from './get-xml-data'

const removeHeader = (text: string | undefined) =>
  text ? text.replace(/<\?xml.*?\?>/, '') : ''

export async function docxToVFile(file: Buffer | string) {
  const data = await getXMLDatas(file, {
    filenames: [/customXml(\/|\\)/, 'word/document.xml', 'word/footnotes.xml'],
  })

  const total = `${removeHeader(data['word/document.xml'])}
  ${removeHeader(data['word/footnotes.xml'])}

  </w:document>`
  const vfile = new VFile(total)
  // if (footnotes) {
  //   Object.assign(vfile.data, { footnotes })
  // }
  return vfile
}
