import { reoffClean } from './reoff-clean.js'
import { describe, it, expect } from 'vitest'

describe('reoffReoffClean', () => {
  it('should work', () => {
    expect(reoffClean()).toEqual('reoff-reoff-clean')
  })
})
