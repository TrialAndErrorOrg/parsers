import { describe, expect, it } from 'vitest'
import { fromTypst } from 'typast-util-from-string'
import { EXIT, SKIP, visit } from './visit.js'

const tree = fromTypst('Hi #footnote[a *b*] $x^2$ #set text(size: 10pt)', { positions: false })

describe('visit', () => {
  it('walks markup inside code', () => {
    const texts: string[] = []
    visit(tree, 'text', (node) => {
      texts.push(node.value)
    })
    expect(texts).toEqual(['Hi', 'a', 'b'])
  })

  it('tells where a node is', () => {
    const seen: string[] = []
    visit(tree, ['numeric', 'mathText'], (node, info) => {
      seen.push(`${node.type} in ${info.parent?.type}.${info.key}`)
    })
    expect(seen).toEqual([
      'mathText in mathAttach.base',
      'mathText in mathAttach.top',
      'numeric in named.expr',
    ])
  })

  it('skips and exits', () => {
    const types: string[] = []
    visit(tree, (node) => {
      types.push(node.type)
      if (node.type === 'funcCall') return SKIP
      if (node.type === 'equation') return EXIT
    })
    expect(types).toEqual(['root', 'text', 'space', 'funcCall', 'space', 'equation'])
  })
})
