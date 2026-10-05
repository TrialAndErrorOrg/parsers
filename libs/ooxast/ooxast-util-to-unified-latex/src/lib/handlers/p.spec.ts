import { x } from 'xastscript'
import { toUnifiedLatex } from '../ooxast-util-to-unified-latex.js'
import { toString } from '@unified-latex/unified-latex-util-to-string'
import { describe, it, expect } from 'vitest'

const p = (style: string | undefined, text: string) =>
  x('w:p', [
    x('w:pPr', style ? [x('w:pStyle', { 'w:val': style })] : []),
    x('w:r', [x('w:rPr'), x('w:t', text)]),
  ])

const tex = (node: ReturnType<typeof p>) =>
  toString(toUnifiedLatex(node as any, { document: false })).trim()

describe('p', () => {
  it('should return the text of a plain paragraph', () => {
    expect(tex(p(undefined, 'lmao'))).toEqual('lmao')
  })

  it('should turn Heading N into sections', () => {
    expect(tex(p('Heading1', 'One'))).toEqual('\\section{One}')
    expect(tex(p('Heading2', 'Two'))).toEqual('\\subsection{Two}')
  })

  it('should not turn other styles ending in a digit into sections', () => {
    expect(tex(p('normal1', 'Body text'))).toEqual('Body text')
    expect(tex(p('Literaturverzeichnis1', 'Doe, J. (2020).'))).toEqual('Doe, J. (2020).')
  })

  it('should wrap quote styles in a quote environment', () => {
    expect(tex(p('IntenseQuote', 'Quoted'))).toMatch(/\\begin\{quote\}\s*Quoted\s*\\end\{quote\}/)
  })
})
