import astStringify from './ast-stringify.js'
import { describe, it, expect } from 'vitest'
describe('unified-ast-stringify', () => {
  it('should work', () => {
    expect(typeof astStringify).toEqual('function')
  })
})
