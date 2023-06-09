import { ooxastUtilRemoveRsid, Options } from 'ooxast-util-remove-rsid'
import type { DocxVFileData } from 'docx-to-vfile'
import type { Root } from 'ooxast'
import type { Parsed } from 'reoff-parse'
import type { Plugin } from 'unified'
import type { VFile } from 'vfile'

declare module 'vfile' {
  interface DataMap extends DocxVFileData {
    parsed: Parsed
  }
}

export function reoffClean(
  options: Options = {
    rPrRemoveList: [
      'w:lang',
      'w:shd',
      'w:szCs',
      'w:sz',
      'w:kern',
      'w:rFonts',
      'w:noProof',
      'w:color',
    ],
  },
): ReturnType<Plugin<[Options?] | void[], Root, Root>> {
  return (tree: Root, vfile: VFile) => {
    const cleanedTree = ooxastUtilRemoveRsid(tree as Root, options) as Root

    if (vfile.data.parsed?.['word/footnotes.xml']) {
      vfile.data.parsed['word/footnotes.xml'] = ooxastUtilRemoveRsid(
        vfile.data.parsed['word/footnotes.xml'] as Root,
        options,
      ) as Root
    }

    if (vfile.data.parsed?.['word/endnotes.xml']) {
      vfile.data.parsed['word/endnotes.xml'] = ooxastUtilRemoveRsid(
        vfile.data.parsed['word/endnotes.xml'] as Root,
        options,
      ) as Root
    }

    return cleanedTree
  }
}
