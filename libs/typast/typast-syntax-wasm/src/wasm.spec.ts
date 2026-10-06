import { describe, expect, it } from 'vitest'
import * as raw from '../pkg/typast_syntax_wasm.js'
import { parse, parseCst, typstVersion } from './node.js'

describe('typast-syntax-wasm', () => {
  it('parses markup into typast', () => {
    const { tree, errors } = parse('= Intro\n\nSome *bold* text.', { positions: false })
    expect(errors).toEqual([])
    expect(tree.children.map((n) => n.type)).toEqual([
      'heading',
      'parbreak',
      'text',
      'space',
      'strong',
      'space',
      'text',
    ])
  })

  it('reports errors with positions', () => {
    const { errors } = parse('#f(')
    expect(errors[0].message).toBe('unclosed delimiter')
    expect(errors[0].position.start.line).toBe(1)
  })

  it('parses math and code modes', () => {
    expect(parse('x^2', { mode: 'math', positions: false }).tree.children[0].type).toBe(
      'mathAttach',
    )
    expect(parse('1 + 2', { mode: 'code', positions: false }).tree.children[0].type).toBe('binary')
  })

  it('returns the concrete syntax tree', () => {
    const cst = parseCst('*a*', { positions: false })
    expect(cst).toEqual({
      kind: 'Markup',
      children: [
        {
          kind: 'Strong',
          children: [
            { kind: 'Star', text: '*' },
            { kind: 'Markup', children: [{ kind: 'Text', text: 'a' }] },
            { kind: 'Star', text: '*' },
          ],
        },
      ],
    })
  })

  it('knows its Typst version', () => {
    parse('')
    expect(typstVersion).toBe(raw.typstVersion())
  })
})
