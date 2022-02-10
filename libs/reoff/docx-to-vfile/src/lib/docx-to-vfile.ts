import { VFile } from 'vfile'
import { getXMLData } from './get-xml-data'

export async function docxToVFile(file: Buffer | string) {
  const mainXML = (await getXMLData(file)).slice(0, -'</w:document>'.length)
  // xast-util-from-xml cannot handle two xml headers in one doc
  const footnotes = (await getXMLData(file, { filename: 'footnotes' })).replace(
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    ''
  )
  // easier to put the footnotes in the same spot
  const total = `${mainXML}${footnotes}
  </w:document>`
  console.log(footnotes)
  const vfile = new VFile(total)
  // if (footnotes) {
  //   Object.assign(vfile.data, { footnotes })
  // }
  return vfile
}
