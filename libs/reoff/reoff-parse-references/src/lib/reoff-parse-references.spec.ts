import reoffParseReferences from './reoff-parse-references.js'
import { describe, it, expect } from 'vitest'

describe('reoffReoffParseReferences', () => {
  it('should work', () => {
    expect(reoffParseReferences()).toEqual('reoff-reoff-parse-references')
  })
})
