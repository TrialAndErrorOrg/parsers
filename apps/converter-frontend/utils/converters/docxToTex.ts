import reoffParseReferences from 'reoff-parse-references-browser'
import reoffCite from 'reoff-cite'
import { reoffClean } from 'reoff-clean'
import reoffParse from 'reoff-parse'
import { VFile } from 'vfile'
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import reoffUnifiedLatex from 'reoff-unified-latex'
import unifedLatexStringify from 'unified-latex-stringify'
import reoffMarkupToStyle from 'reoff-markup-to-style'

export async function docxToTexConverter(
  input: ArrayBuffer,
  options: {
    citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
    url?: string
    mailto?: string
    // preamble?: PreambleCommand[]
  } = {},
): Promise<VFile> {
  const { citationType: type, url: apiUrl, mailto, preamble } = options

  const uint = new Uint8Array(input)
  const vfile = await docxToVFile(uint)

  let before
  let after
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
        'w:iCs',
        'w:color',
      ],
    })
    .use(() => (tree) => {
      console.log({ prevTree: JSON.parse(JSON.stringify(tree)) })
    })
    .use(reoffMarkupToStyle, [
      {
        markup: ['w:b'],
        style: 'Heading 1',
      },
      {
        markup: ['w:i'],
        style: 'Heading 2',
      },
    ])
    .use(reoffParseReferences, {
      apiUrl:
        process.env.NODE_ENV === 'production'
          ? apiUrl || '/api/style'
          : process.env.NEXT_PUBLIC_STYLE_DEV_URL || 'http://localhost:8000/api/style',
      mailto: 'support@trialanderror.org',
    })
    .use(reoffCite, { type: type ?? 'zotero' })
    .use(() => (tree, vfile) => {
      console.log({ tree: JSON.parse(JSON.stringify(tree)) })
    })
    .use(reoffUnifiedLatex)
    .use(unifedLatexStringify)

  return proc.process(vfile)
}
