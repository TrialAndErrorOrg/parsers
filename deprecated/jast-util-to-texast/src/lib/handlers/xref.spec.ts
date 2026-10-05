import { unified } from 'unified'
import rejourParse from 'rejour-parse'
import { toLatex } from 'texast-util-to-latex'
import { toTexast } from '../jast-util-to-texast.js'
import { describe, it, expect } from 'vitest'

const latexFor = (jats: string) => {
  const tree = unified().use(rejourParse).parse(jats)
  return toLatex(toTexast(tree as any, { document: false }) as any)
}

const article = (body: string, footnotes: string) =>
  `<article><front><article-meta></article-meta></front><body><p>${body}</p></body><back><fn-group>${footnotes}</fn-group></back></article>`

describe('xref to a footnote', () => {
  it('finds the footnote by its rid', () => {
    // Footnote ids need not start at 1 (Word skips its separator footnotes).
    const latex = latexFor(
      article(
        'Text<xref ref-type="fn" rid="fn-3">[3]</xref>',
        '<fn id="fn-3"><p>The footnote.</p></fn>',
      ),
    )
    expect(latex).toContain('\\footnote{')
    expect(latex).toContain('The footnote.')
  })

  it('falls back to the footnote number when the footnotes have no ids', () => {
    const latex = latexFor(
      article(
        'Text<xref ref-type="fn">[2]</xref>',
        '<fn><p>First.</p></fn><fn><p>Second.</p></fn>',
      ),
    )
    expect(latex).toContain('Second.')
    expect(latex).not.toContain('First.')
  })

  it('emits an empty footnote instead of crashing when the footnote is missing', () => {
    const latex = latexFor(article('Text<xref ref-type="fn" rid="fn-9">[9]</xref>', ''))
    expect(latex).toContain('\\footnote{}')
  })
})

describe('xref to a bibliography entry', () => {
  const cite = (customType: Record<string, string>) =>
    latexFor(
      article(
        `<xref ref-type="bibr" rid="Key2020" custom-type='${JSON.stringify(customType)}'>(Key, 2020)</xref>`,
        '',
      ),
    )

  it('puts a page locator in the postnote and leaves p./pp. to biblatex', () => {
    expect(cite({ plainCitation: '(Key, 2020, p. 12)', label: 'page', locator: '12' })).toContain(
      '\\parencite[12]{Key2020}',
    )
  })

  it('puts the prefix in the prenote', () => {
    expect(
      cite({
        plainCitation: '(see Key, 2020, p. 12)',
        prefix: 'see',
        label: 'page',
        locator: '12',
      }),
    ).toContain('\\parencite[see][12]{Key2020}')
    expect(cite({ plainCitation: '(see Key, 2020)', prefix: 'see' })).toContain(
      '\\parencite[see][]{Key2020}',
    )
  })
})
