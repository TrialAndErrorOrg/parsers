import type { Root } from 'tyast'
import { unified } from 'unified'

import tyastStringify from './tyast-stringify.js'

const tree: Root = {
  type: 'root',
  children: [
    { type: 'import', source: 'jote-article/lib.typ', items: '*' },
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Intro' }], label: 'sec:intro' },
    {
      type: 'paragraph',
      children: [
        { type: 'text', value: 'Costs $5 & uses #hashtags, ' },
        { type: 'emphasis', children: [{ type: 'text', value: 'really' }] },
        { type: 'text', value: '.' },
      ],
    },
  ],
}

describe('tyastStringify', () => {
  it('compiles a tyast tree to Typst', () => {
    const out = unified().use(tyastStringify).stringify(tree)
    expect(out).toBe(
      '#import "jote-article/lib.typ": *\n\n= Intro <sec:intro>\n\nCosts \\$5 & uses \\#hashtags, _really_.\n',
    )
  })

  it('passes options through', () => {
    const out = unified()
      .use(tyastStringify, { lineWidth: 10 })
      .stringify({
        type: 'root',
        children: [
          {
            type: 'call',
            name: 'figure',
            args: [
              { type: 'argument', value: { type: 'string', value: 'a.png' } },
              { type: 'argument', name: 'caption', value: { type: 'contentBlock', children: [] } },
            ],
          },
        ],
      })
    expect(out).toBe('#figure(\n  "a.png",\n  caption: [],\n)\n')
  })
})
