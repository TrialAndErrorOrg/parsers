import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import relatexAddPreamble from 'relatex-add-preamble'
import { docxToVFile } from 'docx-to-vfile'

import { unified } from 'unified'
import { reoffClean } from 'reoff-clean'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'
import { VFile } from 'vfile'
import { Options } from 'ooxast-util-citations'

export async function docxToTex(
  input: Uint8Array,
  options: {
    citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
    url?: string
    mailto?: string
  } = {}
): Promise<VFile> {
  const vfile = await docxToVFile(input)
  const { citationType: type, url: apiUrl, mailto } = options

  const proc = unified()
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:szCs',
        'w:kern',
        'w:rFonts',
        'w:noProof',
      ],
    })
    .use(reoffParseReferences, { apiUrl, mailto })
    .use(reoffCite, { type: type ?? 'mendeley' } as Options)
    .use(reoffRejour)
    .use(rejourRelatex, {
      documentClass: {
        name: 'jote-new-article',
        options: ['empirical', 'authordate'],
      },
    })
    .use(relatexAddPreamble, [])
    .use(relatexStringify)

  return proc.process(vfile)
}
