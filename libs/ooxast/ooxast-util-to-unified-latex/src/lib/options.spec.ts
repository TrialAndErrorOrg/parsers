/**
 * Behaviour that was released from the 2024 `feat/update-unified` branch (0.6.0).
 */
import { describe, expect, it } from 'vitest'
import { x } from 'xastscript'
import { VFile } from 'vfile'
import type { Element } from 'xast'
import { toString } from '@unified-latex/unified-latex-util-to-string'
import { toUnifiedLatex } from './ooxast-util-to-unified-latex.js'
import type { Options, Root } from './types.js'

const r = (...children: Element[]) => x('w:r', children)
const t = (text: string) => x('w:t', { 'xml:space': 'preserve' }, text)
const p = (...children: Element[]) => x('w:p', children)
const doc = (...children: Element[]) =>
  ({ type: 'root', children: [x('w:document', [x('w:body', children)])] }) as unknown as Root

const convert = (tree: Root, options: Options = {}) =>
  toString(toUnifiedLatex(tree, new VFile(), { document: false, ...options }))

const table = (...widths: number[]) =>
  x('w:tbl', [
    x(
      'w:tblGrid',
      widths.map((w) => x('w:gridCol', { 'w:w': String(w) })),
    ),
    x(
      'w:tr',
      widths.map((_, i) => x('w:tc', [p(r(t(`cell ${i}`)))])),
    ),
  ])

describe('table column widths', () => {
  it('keeps the proportions of a grid with unequal columns', () => {
    const latex = convert(doc(table(1000, 3000)))
    expect(latex).toContain(
      '\\begin{tabular}{@{} p{\\dimexpr 0.25\\linewidth-2\\tabcolsep\\relax} p{\\dimexpr 0.75\\linewidth-2\\tabcolsep\\relax} @{}}',
    )
  })

  it('weights the X columns of a tabularx', () => {
    const latex = convert(doc(table(1000, 3000)), { tabularx: true })
    expect(latex).toContain(
      '\\begin{tabularx}{1.0\\textwidth}{@{} >{\\hsize=0.5\\hsize}X >{\\hsize=1.5\\hsize}X @{}}',
    )
  })

  it('uses the default column for (nearly) equal columns', () => {
    expect(convert(doc(table(3005, 3000, 2998)))).toContain('\\begin{tabular}{@{} l l l @{}}')
  })
})

describe('equation arrays', () => {
  it('become align* with one line per m:e', () => {
    const latex = convert(
      doc(
        p(
          x('m:oMathPara', [
            x('m:oMath', [
              x('m:eqArr', [
                x('m:e', [x('m:r', [x('m:t', 'a=b')])]),
                x('m:e', [x('m:r', [x('m:t', 'c=d')])]),
              ]),
            ]),
          ]),
        ),
      ),
    )
    expect(latex).toMatch(/\\begin\{align\*\}\s*a=b\s*\\\\\s*c=d\s*\\end\{align\*\}/)
  })
})

describe('citations option', () => {
  const field = doc(
    p(
      r(x('w:fldChar', { 'w:fldCharType': 'begin' })),
      r(
        x(
          'w:instrText',
          `ADDIN ZOTERO_ITEM CSL_CITATION {"properties":{"formattedCitation":"(Doe, 2020)"},"citationItems":[{"id":1,"itemData":{"id":1,"type":"book","title":"A book","author":[{"family":"Doe","given":"Jane"}],"issued":{"date-parts":[[2020]]}}}]}`,
        ),
      ),
      r(x('w:fldChar', { 'w:fldCharType': 'separate' })),
      r(t('(Doe, 2020)')),
      r(x('w:fldChar', { 'w:fldCharType': 'end' })),
    ),
  )

  it('makes \\cite commands by default', () => {
    const latex = convert(field)
    expect(latex).toMatch(/\\(paren)?cite/)
    expect(latex).not.toContain('(Doe, 2020)')
  })

  it("keeps Word's citation text with `citations: 'plain'`", () => {
    const latex = convert(field, { citations: 'plain' })
    expect(latex).not.toMatch(/\\(paren)?cite/)
    expect(latex).toContain('(Doe, 2020)')
  })
})
