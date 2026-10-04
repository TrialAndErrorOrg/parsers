import { ooxastUtilRemoveRsid } from './ooxast-util-remove-rsid.js'
import { readFileSync, writeFileSync as fsWriteFileSync } from 'fs'
import { selectAll } from 'xast-util-select'
import { Root } from 'ooxast'
import { describe, it, expect } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFileSync = (...args: Parameters<typeof fsWriteFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fsWriteFileSync(...args)
}

describe('ooxastOoxastUtilRemoveRsid', () => {
  const tree = JSON.parse(
    readFileSync(new URL('../../../../reoff/reoff-parse/src/test/ooxasttree', import.meta.url), {
      encoding: 'utf-8',
    }),
  ) as Root
  const cleanedTree = ooxastUtilRemoveRsid(tree as Root, {
    rPrRemoveList: ['w:lang', 'w:shd', 'w:szCs', 'w:kern', 'w:rFonts', 'w:noProof'],
  }) as Root
  writeFileSync(new URL('./removedRsid', import.meta.url), JSON.stringify(cleanedTree, null, 2))
  // console.dir(cleanedTree, { depth: null })

  it('should retain rs', () => {
    const wrs = selectAll('w\\:r > w\\:t', cleanedTree)
    console.dir(wrs, { depth: null })
    expect(wrs.length).toBeGreaterThan(1)
  })

  it('should get rid of rsids', () => {
    const wrs = selectAll('w\\:r[rsidP*=0]', cleanedTree)
    expect(wrs).toEqual([])
  })
  it('should get rid of w:langs', () => {
    const wrs = selectAll('w\\:r w\\:lang', cleanedTree)
    expect(wrs).toEqual([])
  })
})
