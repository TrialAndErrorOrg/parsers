import { describe, expect, it } from 'vitest'
import type { Root } from 'typast'
import { unified } from 'unified'
import retypstStringify from './retypst-stringify.js'

const tree: Root = {
  type: 'root',
  children: [
    {
      type: 'moduleImport',
      source: { type: 'str', value: 'jote-article/lib.typ' },
      imports: '*',
    },
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Intro' }] },
    { type: 'parbreak' },
    { type: 'text', value: 'Some ' },
    { type: 'emph', children: [{ type: 'text', value: 'text' }] },
    { type: 'text', value: ' with a #hash.' },
  ],
}

describe('retypstStringify', () => {
  it('compiles a typast tree to Typst', () => {
    expect(unified().use(retypstStringify).stringify(tree)).toBe(
      '#import "jote-article/lib.typ": *\n= Intro\n\nSome _text_ with a \\#hash.\n',
    )
  })

  it('passes options through', () => {
    const call: Root = {
      type: 'root',
      children: [
        {
          type: 'funcCall',
          callee: { type: 'ident', name: 'f' },
          args: [
            { type: 'str', value: 'aaaaaaaaaa' },
            { type: 'str', value: 'bbbbbbbbbb' },
          ],
        },
      ],
    }
    expect(unified().use(retypstStringify, { lineWidth: 10 }).stringify(call)).toBe(
      '#f(\n  "aaaaaaaaaa",\n  "bbbbbbbbbb",\n)\n',
    )
  })
})
