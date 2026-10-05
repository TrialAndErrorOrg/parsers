import { cslToRefList } from './csl-to-jast.js'

import { readFileSync, writeFileSync as fsWriteFileSync } from 'fs'
import { describe, it, expect } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFileSync = (...args: Parameters<typeof fsWriteFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fsWriteFileSync(...args)
}

const test = JSON.parse(readFileSync(new URL('test.json', import.meta.url), { encoding: 'utf-8' }))
describe('cslToRefList', () => {
  it('should map csl to reflist', () => {
    const res = cslToRefList(test)
    writeFileSync(new URL('test-jast.json', import.meta.url), JSON.stringify(res, null, 2))
    expect(res).toBeDefined()
  })
})
