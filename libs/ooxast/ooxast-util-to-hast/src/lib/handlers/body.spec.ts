import { x } from 'xastscript'
import { h } from 'hastscript'
import type { Element } from 'xast'
import { toHast } from '../ooxast-util-to-hast.js'
import fs from 'fs'
import { it, expect } from 'vitest'

const p = (style: string | null, text?: string) =>
  x('w:p', [
    ...(style ? [x('w:pPr', [x('w:pStyle', { 'w:val': style })])] : []),
    ...(text ? [x('w:r', [x('w:t', [{ type: 'text' as const, value: text }])])] : []),
  ])

const doc = (...children: Element[]) => toHast(x('w:document', [x('w:body', children)]) as any)

it('should convert headings and paragraphs', () => {
  expect(doc(p('Title', 'title'), p('Heading1', 'hey'), p('heading 2', 'ho'), p(null))).toEqual({
    type: 'root',
    children: [h('body', [h('h1', 'title'), h('h2', 'hey'), h('h3', 'ho'), h('p')])],
  })
})

it('should not treat styles that merely end in a digit as headings', () => {
  // Google Docs exports body text with style ids like `normal1`
  expect(doc(p('normal1', 'just text'))).toEqual({
    type: 'root',
    children: [h('body', [h('p', { style: 'normal1' }, 'just text')])],
  })
})

it('should recognise localised heading ids by their style name', () => {
  const styles = x(null, [
    x('w:styles', [x('w:style', { 'w:styleId': 'Kop1' }, [x('w:name', { 'w:val': 'heading 1' })])]),
  ])
  const hast = toHast(x('w:document', [x('w:body', [p('Kop1', 'Inleiding')])]) as any, { styles })
  expect(hast).toEqual({ type: 'root', children: [h('body', [h('h2', 'Inleiding')])] })
})

it('should convert a real document', () => {
  const ooxloc = new URL(
    '../../../../../reoff/reoff-parse/src/test/ooxasttree.json',
    import.meta.url,
  )
  const tree = JSON.parse(fs.readFileSync(ooxloc, { encoding: 'utf-8' }))

  const hast = toHast(tree) as any
  const tagNames = new Set<string>()
  const collect = (node: any) => {
    if (node.tagName) tagNames.add(node.tagName)
    node.children?.forEach(collect)
  }
  collect(hast)
  // The document has a Title and Heading1–3 paragraphs
  expect([...tagNames]).toEqual(expect.arrayContaining(['body', 'h1', 'h2', 'h3', 'h4', 'p']))
})
