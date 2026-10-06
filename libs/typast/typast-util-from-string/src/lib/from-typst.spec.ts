import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import type { ParseError } from 'typast-syntax-wasm'
import { toTypst } from 'typast-util-to-typst'
import { fromTypst } from './from-typst.js'

const template = new URL('../../../../../templates/typst/jote-article/', import.meta.url)

/** Drop positions and the parts of the tree the serializer normalises (indentation, final newline). */
function normalize(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(normalize)
  if (!node || typeof node !== 'object') return node
  const out: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(node)) {
    if (key !== 'position') out[key] = normalize(value)
  }
  if (out.type === 'space') out.value = /\n/.test(out.value as string) ? '\n' : ' '
  if (out.type === 'comment') out.value = (out.value as string).replace(/\s*\n\s*/g, '\n')
  if (out.type === 'root') {
    const children = out.children as { type: string }[]
    while (['space', 'parbreak'].includes(children.at(-1)?.type ?? '')) children.pop()
  }
  return out
}

describe('fromTypst', () => {
  it('parses markup into typast', () => {
    expect(fromTypst('= Hi <hi>\n\nA *b* @hi.', { positions: false })).toEqual({
      type: 'root',
      children: [
        { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Hi' }] },
        { type: 'space', value: ' ' },
        { type: 'label', name: 'hi' },
        { type: 'parbreak' },
        { type: 'text', value: 'A' },
        { type: 'space', value: ' ' },
        { type: 'strong', children: [{ type: 'text', value: 'b' }] },
        { type: 'space', value: ' ' },
        { type: 'ref', target: 'hi' },
        { type: 'text', value: '.' },
      ],
    })
  })

  it('adds unist positions', () => {
    const tree = fromTypst('a\n*b*')
    expect(tree.children[2].position).toEqual({
      start: { line: 2, column: 1, offset: 2 },
      end: { line: 2, column: 4, offset: 5 },
    })
  })

  it('reports syntax errors and keeps the source', () => {
    const errors: ParseError[] = []
    const tree = fromTypst('a #f( b', { onerror: (e) => errors.push(e), positions: false })
    expect(errors.length).toBeGreaterThan(0)
    expect(JSON.stringify(tree)).toContain('"type":"funcCall"')
  })

  it('takes a VFile-like value and other modes', () => {
    expect(fromTypst({ toString: () => 'x' }).children[0].type).toBe('text')
    expect(fromTypst('a/b', { mode: 'math' }).children[0].type).toBe('mathFrac')
  })

  it.each(['lib.typ', 'example/main.typ'])('round-trips the jote-article template: %s', (file) => {
    const source = readFileSync(new URL(file, template), 'utf8')
    const tree = fromTypst(source, { positions: false })
    const again = fromTypst(toTypst(tree), { positions: false })
    expect(normalize(again)).toEqual(normalize(tree))
  })
})
