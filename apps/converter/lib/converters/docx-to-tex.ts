import { reoffClean } from 'reoff-clean'
import reoffParse from 'reoff-parse'
import { VFile } from 'vfile'
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import reoffUnifiedLatex from 'reoff-unified-latex'
import unifiedLatexStringify from 'unified-latex-stringify'
import reoffMarkupToStyle from 'reoff-markup-to-style'

export async function docxToTexConverter(
  input: ArrayBuffer,
  options: {
    preamble?: string
    documentClassName?: string
    documentClassOptions?: string[]
  } = {},
): Promise<VFile> {
  const {
    preamble,
    documentClassName = 'jote-new-article',
    documentClassOptions = ['authordate', 'empirical'],
  } = options
  const uint = new Uint8Array(input)
  const vfile = await docxToVFile(uint)

  const proc = unified()
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:sz',
        'w:szCs',
        'w:kern',
        'w:rFonts',
        'w:noProof',
        'w:iCs',
        'w:color',
      ],
    })
    .use(reoffMarkupToStyle, [
      { markup: ['w:b'], style: 'Heading 1' },
      { markup: ['w:i'], style: 'Heading 2' },
    ])
    // @ts-expect-error type mismatch between unified versions
    .use(reoffUnifiedLatex, {
      xcolor: false,
      tabularx: { width: '\\linewidth' },
      preamble: `\\addbibresource{bibliography.bib}\n\n${preamble ?? ''}`,
      documentClass: {
        name: documentClassName,
        options: documentClassOptions,
      },
    })
    .use(unifiedLatexStringify)

  return proc.process(vfile)
}
