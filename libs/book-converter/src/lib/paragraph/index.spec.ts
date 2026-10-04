import { describe, expect, it } from 'vitest'
import { x } from 'xastscript'
import { VFile } from 'vfile'
import type { Element } from 'xast'
import { toString } from '@unified-latex/unified-latex-util-to-string'
import { toUnifiedLatex } from 'ooxast-util-to-unified-latex'
import type { Root } from 'ooxast'
import { makeParagraphHandlers } from './index.js'

const p = (style: string, text: string) =>
  x('w:p', [
    x('w:pPr', [x('w:pStyle', { 'w:val': style })]),
    x('w:r', [x('w:t', { 'xml:space': 'preserve' }, text)]),
  ])
const doc = (...children: Element[]) =>
  ({ type: 'root', children: [x('w:document', [x('w:body', children)])] }) as unknown as Root

const convert = (tree: Root, matchers: { style: string; output: string }[] = []) =>
  toString(
    toUnifiedLatex(tree, new VFile(), {
      document: false,
      paragraphHandlers: makeParagraphHandlers(matchers),
    }),
  )

describe('makeParagraphHandlers', () => {
  it('turns Heading1 paragraphs into chapters', () => {
    expect(convert(doc(p('Heading1', 'Introduction')))).toContain('\\chapter{Introduction}')
  })

  it('adds a handler per configured paragraph style', () => {
    const latex = convert(doc(p('Motto', 'Carpe diem'), p('Break', 'ignored')), [
      { style: 'Motto', output: '\\epigraph{$1}{}' },
      { style: 'Break', output: '\\bigskip' },
    ])
    expect(latex).toContain('\\epigraph{Carpe diem}{}')
    expect(latex).toContain('\\bigskip')
    expect(latex).not.toContain('ignored')
  })
})
