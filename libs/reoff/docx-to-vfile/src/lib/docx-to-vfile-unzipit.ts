import { VFile } from 'vfile'
import { unzip } from 'unzipit'

const removeHeader = (text: string | undefined) =>
  text ? text.replace(/<\?xml.*?\?>/, '') : ''

const removeCarriage = (text: string | undefined) =>
  text ? text.replace(/\r/, '') : ''

export interface Options {
  withoutImages: boolean
}

export async function docxToVFile(
  file: ArrayBuffer,
  options: Options = { withoutImages: false }
) {
  const { entries } = await unzip(file)
  const rels = await entries['word/_rels/document.xml.rels'].text()
  const relations = Object.fromEntries(
    [...rels.matchAll(/Id="(.*?)".*?Target="(.*?)"/g)].map((match) => [
      match[1],
      match[2],
    ])
  )

  const doc = await entries['word/document.xml'].text()
  const foot = (await entries?.['word/footnotes.xml']?.text()) || ''
  const bib = (await entries?.['customXml/item1.xml']?.text()) || ''

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

  vfile.data.relations = relations

  if (options.withoutImages) {
    return vfile
  }

  const mediaUrls = Object.values(relations).filter((rel: string) =>
    rel.includes('media/')
  )
  const images = {} as { [key: string]: ArrayBuffer }
  for (const url of mediaUrls) {
    images[url] = await entries[`word/${url}`].arrayBuffer()
  }
  console.dir(images, { depth: null })
  vfile.data.images = images
  return vfile
}
