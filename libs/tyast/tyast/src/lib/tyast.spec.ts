import { describe, expect, expectTypeOf, it } from 'vitest'
import type {
  BlockContent,
  Comment,
  Content,
  FunctionCall,
  Heading,
  Label,
  NodeMap,
  PhrasingContent,
  Root,
  Value,
} from './tyast.js'

describe('tyast types', () => {
  it('describes a document tree', () => {
    const tree: Root = {
      type: 'root',
      children: [
        { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Intro' }] },
        {
          type: 'paragraph',
          children: [
            { type: 'text', value: 'See ' },
            { type: 'ref', target: 'fig:a' },
            {
              type: 'call',
              name: 'footnote',
              args: [],
              body: [[{ type: 'text', value: 'a note' }]],
            },
          ],
        },
        {
          type: 'call',
          name: 'figure',
          args: [
            { type: 'argument', value: { type: 'code', value: 'image("a.png")' } },
            {
              type: 'argument',
              name: 'caption',
              value: { type: 'contentBlock', children: [{ type: 'text', value: 'A' }] },
            },
          ],
        },
        { type: 'comment', value: 'c', block: true },
      ],
    }
    expect(tree.children).toHaveLength(4)
  })

  it('sorts nodes into block and inline content', () => {
    expectTypeOf<Heading>().toMatchTypeOf<BlockContent>()
    expectTypeOf<Heading>().not.toMatchTypeOf<PhrasingContent>()
    expectTypeOf<Label>().toMatchTypeOf<PhrasingContent>()
    expectTypeOf<Label>().not.toMatchTypeOf<BlockContent>()
    expectTypeOf<Comment>().toMatchTypeOf<BlockContent & PhrasingContent>()
    expectTypeOf<FunctionCall>().toMatchTypeOf<Value>()
    expectTypeOf<PhrasingContent>().toMatchTypeOf<Content>()
    expectTypeOf<NodeMap['call']>().toEqualTypeOf<FunctionCall>()
  })
})
