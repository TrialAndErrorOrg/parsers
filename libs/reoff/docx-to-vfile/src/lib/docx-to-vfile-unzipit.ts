import { VFile } from 'vfile'
import { unzip } from 'unzipit'

const removeHeader = (text: string | undefined) => (text ? text.replace(/<\?xml.*?\?>/, '') : '')

const removeCarriage = (text: string | undefined) => (text ? text.replace(/\r/g, '') : '')

export interface Options {
  withoutImages: boolean
}

export async function docxToVFile(file: ArrayBuffer, options: Options = { withoutImages: false }) {
  const { entries } = await unzip(file)
  console.log(entries)
  const rels = await entries['word/_rels/document.xml.rels'].text()
  const relations = Object.fromEntries(
    [...rels.matchAll(/Id="(.*?)".*?Target="(.*?)"/g)].map((match) => [match[1], match[2]]),
  )

  const doc = await entries['word/document.xml'].text()
  const foot = (await entries?.['word/footnotes.xml']?.text()) || ''
  const end = (await entries?.['word/endnotes.xml']?.text()) || ''
  const styles = (await entries?.['word/styles.xml']?.text()) || ''
  const bib = (await entries?.['customXml/item1.xml']?.text()) || ''

  // const {
  //   'word/document.xml': document,
  //   'word/footnotes.xml': footnotes,
  //   ...bibliography
  // } = data

  const total = `${removeCarriage(doc).slice(0, -'</w:document>'.length)}
  ${removeHeader(foot)}
  ${removeHeader(bib)}
  ${removeHeader(end)}
  ${removeHeader(styles)}
  </w:document>`

  const vfile = new VFile(total)

  vfile.data.relations = relations

  if (options.withoutImages) {
    return vfile
  }

  const mediaUrls = Object.values(relations).filter((rel: string) => rel.includes('media/'))
  const images = {} as { [key: string]: ArrayBuffer }
  for (const url of mediaUrls) {
    images[url] = await entries[`word/${url}`].arrayBuffer()
  }
  vfile.data.images = images
  return vfile
}
