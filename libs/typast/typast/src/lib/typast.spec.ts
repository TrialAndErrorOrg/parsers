import { describe, expect, expectTypeOf, it } from 'vitest'
import type { FuncCall, MarkupContent, NodeMap, NodeType, Root, TypastNode } from './typast.js'
import { codeTypes, nodeFields, statementTypes } from './typast.js'

describe('typast types', () => {
  it('describes a document the way Typst parses it', () => {
    const footnote: FuncCall = {
      type: 'funcCall',
      callee: { type: 'ident', name: 'footnote' },
      args: [],
      children: [{ type: 'contentBlock', children: [{ type: 'text', value: 'a note' }] }],
    }
    const tree: Root = {
      type: 'root',
      children: [
        { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Intro' }] },
        { type: 'space', value: ' ' },
        { type: 'label', name: 'intro' },
        { type: 'parbreak' },
        { type: 'text', value: 'See' },
        { type: 'space', value: ' ' },
        { type: 'ref', target: 'intro' },
        footnote,
        { type: 'equation', block: false, children: [{ type: 'mathText', value: 'x' }] },
      ],
    }
    expect(tree.children).toHaveLength(9)
    expectTypeOf(tree.children[0]).toExtend<MarkupContent>()
    expectTypeOf<NodeMap['funcCall']>().toEqualTypeOf<FuncCall>()
    expectTypeOf<NodeMap[NodeType]>().toExtend<TypastNode>()
  })

  it('lists code and statement node types', () => {
    expect(codeTypes.has('funcCall')).toBe(true)
    expect(codeTypes.has('text')).toBe(false)
    for (const t of statementTypes) expect(codeTypes.has(t)).toBe(true)
  })

  it('names the node fields of every node with sub-nodes outside `children`', () => {
    expect(nodeFields.funcCall).toEqual(['callee', 'args'])
    expect(nodeFields.binary).toEqual(['lhs', 'rhs'])
    expect(nodeFields.text).toBeUndefined()
  })
})
