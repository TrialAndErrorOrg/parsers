import type { Root } from 'ooxast'
import type { VFile } from 'vfile'
import type { Data as CSL } from 'csl-json'
import type { Plugin } from 'unified'
import type { Parsed } from 'reoff-parse'
import type { DocxVFileData } from 'docx-to-vfile'
import { findCitations, type Options } from 'ooxast-util-citations'

declare module 'vfile' {
  interface DataMap extends DocxVFileData {
    parsed: Parsed
  }
}

export default function reoffCite(
  options: Options = { type: 'zotero' },
): ReturnType<Plugin<[Options | void | undefined], Root, Root>> {
  return (tree: Root, vfile: VFile) => {
    if (options.log !== false) {
      console.log(vfile.data.bibliography)
    }
    const treeCitations = findCitations(tree, vfile, {
      bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
      type: options.type,
      log: options.log,
    })

    if (vfile.data.parsed?.['word/footnotes.xml']) {
      vfile.data.parsed['word/footnotes.xml'] = findCitations(
        vfile.data.parsed['word/footnotes.xml'],
        vfile,
        {
          bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
          type: options.type,
          log: options.log,
        },
      )
    }

    if (vfile.data.parsed?.['word/endnotes.xml']) {
      vfile.data.parsed['word/endnotes.xml'] = findCitations(
        vfile.data.parsed['word/endnotes.xml'],
        vfile,
        {
          bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
          type: options.type,
          log: options.log,
        },
      )
    }

    return treeCitations
  }
}
