import reoffCite from './reoff-cite.js'
import { describe, it, expect } from 'vitest'

describe('reoffReoffCite', () => {
  it('should work', () => {
    expect(reoffCite()).toEqual('reoff-reoff-cite')
  })
})
