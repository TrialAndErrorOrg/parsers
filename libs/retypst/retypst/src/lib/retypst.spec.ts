import { describe, expect, it } from 'vitest'
import type { Root } from 'typast'
import { retypst } from './retypst.js'

describe('retypst', () => {
  it('parses, transforms and serializes Typst', async () => {
    const file = await retypst()
      .use(() => (tree: Root) => {
        tree.children.push({ type: 'parbreak' }, { type: 'text', value: 'Added #1.' })
      })
      .process('= Title\n\nSome *text*.')
    expect(String(file)).toBe('= Title\n\nSome *text*.\n\nAdded \\#1.\n')
  })
})
