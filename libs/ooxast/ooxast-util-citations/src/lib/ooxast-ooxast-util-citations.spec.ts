import { findCitations } from './ooxast-util-citations.js'
import { readFileSync, writeFileSync as fsWriteFileSync } from 'fs'
import { describe, it, expect } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFileSync = (...args: Parameters<typeof fsWriteFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fsWriteFileSync(...args)
}

describe('ooxastOoxastUtilCitations', () => {
  const ooxast = JSON.parse(
    readFileSync(
      new URL('../../../../ooxast/ooxast-util-remove-rsid/src/lib/removedRsid', import.meta.url),
      { encoding: 'utf-8' },
    ),
  )
  const citetree = findCitations(ooxast)
  writeFileSync(new URL('citetree.json', import.meta.url), JSON.stringify(citetree, null, 2))
  it('should work', () => {
    expect(citetree).toEqual('ooxast-ooxast-util-citations')
  })
})
