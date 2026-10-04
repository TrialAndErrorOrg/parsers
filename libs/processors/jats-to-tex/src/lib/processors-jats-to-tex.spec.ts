import { jatsToTex } from './processors-jats-to-tex.js'
import { describe, it, expect } from 'vitest'

describe('processorsJatsToTex', () => {
  it('should work', () => {
    expect(jatsToTex).toBeDefined()
  })
})
