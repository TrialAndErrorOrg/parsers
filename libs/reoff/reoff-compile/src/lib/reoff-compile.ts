import { Root, Node } from 'ooxast'
import { ZipWriter, BlobWriter, TextReader, BlobReader } from '@zip.js/zip.js'

import { CompilerFunction, Plugin } from 'unified'
import { toXml } from 'xast-util-to-xml'
import { DocxVFileData } from 'docx-to-vfile'

declare module 'vfile' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DataMap extends DocxVFileData {}
}

const reoffCompile: Plugin<void[], Root, Promise<Blob>> = async function reoffCompile() {
  const compiler: CompilerFunction<Node, Promise<Blob>> = async (tree, vfile) => {
    const zipWriter = new ZipWriter(new BlobWriter('application/zip'))

    const { data: dataAttr, value } = vfile
    const { parsed, media, relations, ...data } = dataAttr

    // add the value

    const mainPromise = zipWriter.add('word/document.xml', new TextReader(toXml(tree as Root)))

    const rawAndParsedOverlap = parsed ? Object.keys(parsed).filter((key) => key in data) : []

    const parsedPromise = parsed
      ? Object.entries(parsed).map(async ([key, value]) => {
          if ((!key.endsWith('.xml') && !key.endsWith('.rels')) || !value) {
            return
          }
          zipWriter.add(key, new TextReader(toXml(value)))
        })
      : []

    const rawPromise = data
      ? Object.entries(data).map(async ([key, value]) => {
          if (
            (!key.endsWith('.xml') && !key.endsWith('.rels')) ||
            rawAndParsedOverlap.includes(key)
          ) {
            return
          }
          return zipWriter.add(key, new TextReader(value as string))
        })
      : []

    const mediaPromise = media
      ? Object.entries(media).map(async ([key, value]) =>
          zipWriter.add(`word/${key}`, new BlobReader(value as Blob)),
        )
      : []

    await Promise.all([mainPromise, ...rawPromise, ...mediaPromise, ...parsedPromise])

    return zipWriter.close()

    // Assume options.
  }

  Object.assign(this, { Compiler: compiler })
}

export default reoffCompile
