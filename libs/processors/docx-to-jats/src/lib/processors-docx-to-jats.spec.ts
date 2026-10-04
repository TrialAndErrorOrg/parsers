import { processorsDocxToJats } from './processors-docx-to-jats.js'
import { describe, it, expect } from 'vitest'

describe('processorsDocxToJats', () => {
  it('should work', () => {
    expect(processorsDocxToJats()).toEqual('processors-docx-to-jats')
  })
})
