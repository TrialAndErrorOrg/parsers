import reoffParseReferences from 'reoff-parse-references-browser'
import { rejourStringify } from 'rejour-stringify'
import reoffCite from 'reoff-cite'
import { reoffClean } from 'reoff-clean'
import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import { VFile } from 'vfile'
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { PreambleCommand } from 'texast-util-add-preamble'
import relatexAddPreamble from 'relatex-add-preamble'

export async function docxToTexConverter(
  input: ArrayBuffer,
  options: {
    citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
    url?: string
    mailto?: string
    preamble?: PreambleCommand[]
  } = {}
): Promise<VFile> {
  const { citationType: type, url: apiUrl, mailto, preamble } = options

  const uint = new Uint8Array(input)
  const vfile = await docxToVFile(uint)

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
    .use(reoffParseReferences, {
      apiUrl:
        process.env.NODE_ENV === 'production'
          ? apiUrl || '/api/style'
          : process.env.NEXT_PUBLIC_STYLE_DEV_URL ||
            'http://localhost:8000/api/style',
      mailto,
    })
    //  @ts-expect-error tbh idk what it's talking about
    .use(reoffCite, { type: type || 'zotero', bibliography: undefined })
    .use(reoffRejour)
    .use(rejourStringify)
    .use(rejourRelatex, {
      documentClass: {
        name: 'jote-new-article',
        options: ['empirical', 'authordate'],
      },
      topSection: 0,
      booktabs: true,
    })
    .use(relatexAddPreamble, preamble || [])
    .use(relatexStringify)

  return proc.process(vfile)
}
