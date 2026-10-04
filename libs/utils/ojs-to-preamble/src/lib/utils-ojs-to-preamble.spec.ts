import { utilsOjsToPreamble } from './utils-ojs-to-preamble.js'
import { describe, it, expect } from 'vitest'

describe('utilsOjsToPreamble', () => {
  it('should work', () => {
    expect(utilsOjsToPreamble()).toEqual('utils-ojs-to-preamble')
  })
})
