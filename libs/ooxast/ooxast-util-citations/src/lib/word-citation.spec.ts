import { x } from 'xastscript'
import { toString } from 'xast-util-to-string'
import { selectAll } from 'xast-util-select'
import { findCitations } from './ooxast-util-citations.js'
import { describe, it, expect } from 'vitest'

describe('Word citations (citation content controls)', () => {
  it('parses the text inside a w:sdt citation', () => {
    const run = (text: string) => x('w:r', [x('w:t', text)])
    const tree = x(null, [
      x('w:document', [
        x('w:body', [
          x('w:p', [
            x('w:sdt', [
              x('w:sdtPr', [x('w:citation')]),
              x('w:sdtContent', [
                x('w:r', [x('w:fldChar', { 'w:fldCharType': 'begin' })]),
                x('w:r', [x('w:instrText', 'CITATION Aut22 \\l 1033 ')]),
                run('(Author, 2022)'),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])

    const result = findCitations(tree as any)
    const instr = selectAll('w\\:instrText', result as any).map((node) => toString(node))
    expect(instr.some((text) => text.includes('CSL_CITATION') && text.includes('Author'))).toBe(
      true,
    )
  })
})

describe('runs with several w:t', () => {
  it('keeps the text after the first w:t', () => {
    const tree = x(null, [
      x('w:document', [
        x('w:body', [
          x('w:p', [
            x('w:r', [
              x('w:t', 'Before the page break, '),
              x('w:lastRenderedPageBreak'),
              x('w:t', 'after it.'),
            ]),
          ]),
        ]),
      ]),
    ])

    expect(toString(findCitations(tree as any) as any)).toBe('Before the page break, after it.')
  })
})
