import { cslToBiblatex } from './csl-to-biblatex.js'
import { describe, it, expect } from 'vitest'

describe('cslToBiblatex', () => {
  it('should work', () => {
    expect(cslToBiblatex()).toEqual('csl-to-biblatex')
  })
})
