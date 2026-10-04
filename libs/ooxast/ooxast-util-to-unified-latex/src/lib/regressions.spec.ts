/**
 * Regressions from converting real JOTE manuscripts (Kohrt et al., issue 6-2, a Google Docs
 * export; issue 4 Word manuscripts) with the docx → LaTeX route.
 */
import { describe, expect, it } from 'vitest'
import { x } from 'xastscript'
import { VFile } from 'vfile'
import type { Element } from 'xast'
import { toString } from '@unified-latex/unified-latex-util-to-string'
import { toUnifiedLatex } from './ooxast-util-to-unified-latex.js'
import { getHeadingLevel, getStyleNames } from './util/style-names.js'
import { sanitizeCiteKey } from './handlers/citation.js'
import type { Options, Root } from './types.js'

const t = (text: string) => x('w:t', { 'xml:space': 'preserve' }, text)
const r = (content: string | Element[], rPr: Element[] = []) =>
  x('w:r', [x('w:rPr', rPr), ...(typeof content === 'string' ? [t(content)] : content)])
const p = (style: string | undefined, children: Element[], pPr: Element[] = []) =>
  x('w:p', [
    x('w:pPr', [...(style ? [x('w:pStyle', { 'w:val': style })] : []), ...pPr]),
    ...children,
  ])

const doc = (...paragraphs: Element[]) =>
  ({ type: 'root', children: [x('w:document', [x('w:body', paragraphs)])] }) as unknown as Root

const styles = (...defs: [string, string][]) =>
  `<?xml version="1.0" encoding="UTF-8"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">${defs
    .map(
      ([id, name]) =>
        `<w:style w:type="paragraph" w:styleId="${id}"><w:name w:val="${name}"/></w:style>`,
    )
    .join('')}</w:styles>`

const convert = (tree: Root, options: Options = {}, data: Record<string, unknown> = {}) =>
  toString(toUnifiedLatex(tree, new VFile({ data: data as any }), { document: false, ...options }))

describe('heading styles', () => {
  it('only treats `heading N` styles as headings, not any style ending in a digit', () => {
    expect(getHeadingLevel('Heading1')).toBe(1)
    expect(getHeadingLevel('Heading 2')).toBe(2)
    expect(getHeadingLevel('heading 3')).toBe(3)
    expect(getHeadingLevel('Heading')).toBe(1)
    expect(getHeadingLevel('normal1')).toBeNull()
    expect(getHeadingLevel('Literaturverzeichnis1')).toBeNull()
    expect(getHeadingLevel('TOC1')).toBeNull()
    expect(getHeadingLevel('ListParagraph2')).toBeNull()
  })

  it('resolves localised style ids through their name in styles.xml', () => {
    const names = getStyleNames(styles(['Kop2', 'heading 2'], ['normal1', 'normal1']))
    expect(names).toEqual({ Kop2: 'heading 2', normal1: 'normal1' })
    expect(getHeadingLevel('Kop2', names)).toBe(2)
    expect(getHeadingLevel('normal1', names)).toBeNull()
  })

  it('does not turn Google Docs `normal1` paragraphs into sections (kohrt)', () => {
    const latex = convert(
      doc(
        p('normal1', [r('Florian Kohrt, Felix Schönbrodt')]),
        p('Literaturverzeichnis1', [r('Doe, J. (2020). A book.')]),
        p('Heading1', [r('Introduction')]),
        p('Kop2', [r('Background')]),
      ),
      {},
      { 'word/styles.xml': styles(['Kop2', 'heading 2'], ['Heading1', 'heading 1']) },
    )
    expect(latex).not.toMatch(/\\section\{Florian/)
    expect(latex).not.toMatch(/\\section\{Doe/)
    expect(latex).toContain('\\section{Introduction}')
    expect(latex).toContain('\\subsection{Background}')
  })

  it('keeps a numbered heading a heading instead of a one-item list', () => {
    const numPr = x('w:numPr', [x('w:ilvl', { 'w:val': '0' }), x('w:numId', { 'w:val': '21' })])
    const latex = convert(doc(p('Heading1', [r('Introduction and Previous Research')], [numPr])))
    expect(latex).toContain('\\section{Introduction and Previous Research}')
    expect(latex).not.toContain('\\item')
  })
})

describe('runs', () => {
  it('treats `w:val="false"` / `"0"` toggles as off (Google Docs export)', () => {
    const latex = convert(
      doc(
        p(undefined, [
          r('plain ', [x('w:b', { 'w:val': 'false' }), x('w:i', { 'w:val': '0' })]),
          r('bold', [x('w:b')]),
        ]),
      ),
    )
    expect(latex).toContain('plain \\textbf{bold}')
    expect(latex).not.toContain('\\emph')
  })

  it('drops deleted text of tracked changes', () => {
    const latex = convert(
      doc(
        p('Heading3', [
          x('w:ins', [r('External Constraints')]),
          x('w:del', [x('w:r', [x('w:delText', 'Conflicting Choices')])]),
        ]),
      ),
    )
    expect(latex).toContain('\\subsubsection{External Constraints}')
    expect(latex).not.toContain('Conflicting')
  })

  it('keeps line breaks inside a run', () => {
    const latex = convert(
      doc(p(undefined, [r([t('Munich, Germany'), x('w:br'), t('Vienna, Austria')])])),
    )
    expect(latex).toMatch(/Munich, Germany\\newline\s+Vienna, Austria/)
  })

  it('escapes braces in text', () => {
    expect(convert(doc(p(undefined, [r('a set {x} and \\')])))).toContain(
      'a set \\{x\\} and \\textbackslash{}',
    )
  })
})

describe('drawings', () => {
  const drawing = (rId: string, cy = 152400) =>
    x('w:drawing', [
      x('wp:inline', [
        x('wp:extent', { cx: '152400', cy: String(cy) }),
        x('a:graphic', [
          x('a:graphicData', [
            x('pic:pic', [x('pic:blipFill', [x('a:blip', { 'r:embed': rId })])]),
          ]),
        ]),
      ]),
    ])

  it('keeps an image in running text or a link inline instead of a figure float (ORCID icon)', () => {
    const latex = convert(
      doc(
        p(undefined, [
          r('Florian Kohrt '),
          x('w:hyperlink', { 'r:id': 'rIdLink' }, [r([drawing('rIdImg')])]),
        ]),
      ),
      {},
      {
        relations: {
          document: {
            rIdLink: 'https://orcid.org/0000-0003-0374-5625',
            rIdImg: 'media/image1.png',
          },
        },
      },
    )
    expect(latex).not.toContain('\\begin{figure}')
    expect(latex).toContain(
      '\\href{https://orcid.org/0000-0003-0374-5625}{\\includegraphics[height=12pt]{media/image1.png}}',
    )
  })

  it('makes a figure only of a paragraph that holds nothing but the image', () => {
    const tree = doc(
      p(undefined, [r('Florian Kohrt '), r([drawing('rIdImg')])]),
      p(undefined, [r([drawing('rIdFig', 3000000)])]),
    )
    const latex = convert(
      tree,
      {},
      { relations: { document: { rIdImg: 'media/image1.png', rIdFig: 'media/image2.png' } } },
    )
    expect(latex).toMatch(/Florian Kohrt ?\\includegraphics\[height=12pt\]\{media\/image1.png\}/)
    expect(latex).toMatch(
      /\\begin\{figure\}\s*\\includegraphics\[width=\\linewidth\]\{media\/image2.png\}/,
    )
  })

  it('does not emit an empty \\includegraphics for a picture without an embedded image', () => {
    const svgOnly = x('w:drawing', [x('wp:inline', [x('a:graphic', [x('a:blip')])])])
    const latex = convert(doc(p(undefined, [r([svgOnly])])))
    expect(latex).not.toContain('\\includegraphics{}')
  })
})

describe('tables', () => {
  const tc = (...paragraphs: Element[]) => x('w:tc', [x('w:tcPr'), ...paragraphs])
  const grid = (n: number) =>
    x(
      'w:tblGrid',
      Array.from({ length: n }, () => x('w:gridCol')),
    )

  it('takes the column count from the grid, not the number of rows', () => {
    const tbl = x('w:tbl', [
      grid(3),
      x('w:tr', [
        tc(p(undefined, [r('a')])),
        tc(p(undefined, [r('b')])),
        tc(p(undefined, [r('c')])),
      ]),
    ])
    const latex = convert(doc(tbl as Element))
    expect(latex).toContain('\\begin{tabular}{@{} l l l @{}}')
  })

  it('escapes text in cells and separates the paragraphs of a cell', () => {
    const tbl = x('w:tbl', [
      grid(2),
      x('w:tr', [
        tc(p(undefined, [r('95% CI')])),
        tc(p(undefined, [r('first')]), p(undefined, [r('second')])),
      ]),
    ])
    const plain = convert(doc(tbl as Element))
    expect(plain).toContain('95\\% CI')
    expect(plain).toContain('first second')

    const tabularx = convert(doc(tbl as Element), { tabularx: { width: '\\linewidth' } })
    expect(tabularx).toContain('\\begin{tabularx}{\\linewidth}{@{} X X @{}}')
    expect(tabularx).toMatch(/first\\newline\s+second/)
  })

  it('does not put a nested table in a float', () => {
    const inner = x('w:tbl', [grid(1), x('w:tr', [tc(p(undefined, [r('inner')]))])])
    const outer = x('w:tbl', [
      grid(1),
      x('w:tr', [tc(p(undefined, [r('Box 5')]), inner as Element)]),
    ])
    const latex = convert(doc(outer as Element), { tabularx: { width: '\\linewidth' } })
    expect(latex.match(/\\begin\{table\}/g)).toHaveLength(1)
    // a nested tabularx has to be wrapped in a group
    expect(latex).toMatch(/\{\\begin\{tabularx\}/)
  })

  it('spans multicolumn cells with a single argument for their content', () => {
    const tbl = x('w:tbl', [
      grid(2),
      x('w:tr', [
        x('w:tc', [
          x('w:tcPr', [x('w:gridSpan', { 'w:val': '2' })]),
          p(undefined, [r('R'), r('2', [x('w:vertAlign', { 'w:val': 'superscript' })])]),
        ]),
      ]),
    ])
    expect(convert(doc(tbl as Element))).toContain('\\multicolumn{2}{l}{R\\textsuperscript{2}}')
  })
})

describe('title', () => {
  it('keeps the title with a custom preamble and ignores empty Title paragraphs', () => {
    const tree = doc(p('Title', []), p('Title', [r('Formal Definitions & Epistemic Functions')]))
    const latex = toString(
      toUnifiedLatex(tree, new VFile(), { preamble: '\\addbibresource{bibliography.bib}' }),
    )
    expect(latex).toContain('\\title{Formal Definitions \\& Epistemic Functions}')
    expect(latex).toContain('\\addbibresource{bibliography.bib}')
  })
})

describe('citation keys', () => {
  it('has no spaces in keys of organisations as authors', () => {
    expect(sanitizeCiteKey('Wellcome Trust2020')).toBe('WellcomeTrust2020')
    expect(sanitizeCiteKey('R Core Team2019')).toBe('RCoreTeam2019')
  })
})
