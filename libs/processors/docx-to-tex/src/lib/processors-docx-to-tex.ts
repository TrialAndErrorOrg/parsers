import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { docxToVFile } from 'docx-to-vfile'

import { unified } from 'unified'
import { reoffClean } from 'reoff-clean'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'
import { VFile } from 'vfile'

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
    .use(reoffCite, { type: type || 'mendeley' })
    .use(reoffRejour)
    .use(rejourRelatex)
    .use(relatexStringify)

  return proc.process(vfile)
}
