import { x } from 'xastscript'
import type { Element } from 'xast'
import { toJast } from '../ooxast-util-to-jast.js'
import fs from 'fs'
import { select } from 'xast-util-select'
import { it, expect } from 'vitest'

const p = (style: string | null, text?: string) =>
  x('w:p', [
    ...(style ? [x('w:pPr', [x('w:pStyle', { 'w:val': style })])] : []),
    ...(text ? [x('w:r', [x('w:t', [{ type: 'text' as const, value: text }])])] : []),
  ])

/** Convert a `w:document` with the given body children, and return the jast `body`. */
const body = (...children: Element[]): any => {
  const article = toJast(x('w:document', [x('w:body', children)]) as any) as any
  return article.children.find((child: Element) => child.name === 'body')
}

it('should wrap headings in numbered sections', () => {
  expect(body(p('Heading1', 'hey'), p(null))).toEqual(
    x('body', [
      x('sec', { id: 'sec-1' }, [
        x('title', { style: 'Heading1' }, [{ type: 'text', value: 'hey' }]),
        x('p'),
      ]),
    ]),
  )
})

it('should nest and number sections by heading level', () => {
  const result = body(
    p('Heading1', 'one'),
    p('Heading2', 'one.one'),
    p('Heading1', 'two'),
    p(null, 'text'),
  )
  expect(result.children.map((sec: Element) => sec.attributes?.id)).toEqual(['sec-1', 'sec-2'])
  expect(result.children[0].children[1].attributes.id).toEqual('sec-1-1')
  expect(result.children[1].children[1]).toEqual(x('p', [{ type: 'text', value: 'text' }]))
})

it('should not treat styles that merely end in a digit as headings', () => {
  // Google Docs exports body text with style ids like `normal1`
  expect(body(p('normal1', 'just text'))).toEqual(
    x('body', [x('p', { style: 'normal1' }, [{ type: 'text', value: 'just text' }])]),
  )
})

it('should convert a real document', () => {
  const ooxloc = new URL(
    '../../../../../reoff/reoff-parse/src/test/ooxasttree.json',
    import.meta.url,
  )
  const tree = JSON.parse(fs.readFileSync(ooxloc, { encoding: 'utf-8' }))

  const jast = toJast(tree) as any
  // Heading1/2/3 paragraphs become nested sections
  expect(select('article > body > sec[id=sec-1] > title', jast)).toBeTruthy()
  expect(select('sec > sec > sec', jast)).toBeTruthy()
})
