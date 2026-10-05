import { unified } from 'unified'
import rejourParse from 'rejour-parse'
import { toLatex } from 'texast-util-to-latex'
import { toTexast } from '../jast-util-to-texast.js'
import { describe, it, expect } from 'vitest'

const latexFor = (body: string) => {
  const tree = unified()
    .use(rejourParse)
    .parse(`<article><front><article-meta></article-meta></front><body>${body}</body></article>`)
  return toLatex(toTexast(tree as any, { document: false }) as any)
}

describe('fig', () => {
  it('is a figure environment in the text', () => {
    expect(latexFor('<fig><graphic xlink:href="media/image1.png"/></fig>')).toContain(
      '\\begin{figure}',
    )
  })

  it('is not a float inside a table cell', () => {
    const latex = latexFor(
      '<table><tr><td>a</td><td><fig><graphic xlink:href="media/image1.png"/></fig></td></tr></table>',
    )
    expect(latex).toContain('\\includegraphics')
    expect(latex).not.toContain('\\begin{figure}')
  })
})
