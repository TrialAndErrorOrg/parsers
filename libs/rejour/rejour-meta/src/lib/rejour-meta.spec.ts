import { rejourMoveAbstract } from './rejour-meta.js'
import { describe, it, expect } from 'vitest'

describe('rejourMeta', () => {
  it('should work', () => {
    expect(rejourMoveAbstract()).toEqual('rejour-meta')
  })
})
