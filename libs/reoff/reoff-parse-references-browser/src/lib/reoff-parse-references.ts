import { Root } from 'ooxast'
import { Options, parseBib } from 'ooxast-util-parse-bib-browser'
import { VFile } from 'vfile'

export default function reoffReoffParseReferences(options: Options) {
  return async (tree: Root, vfile: VFile) => {
    const bib = await parseBib(tree, options)

    await bib
    vfile.data.bibliography = bib

    return tree
  }
}
