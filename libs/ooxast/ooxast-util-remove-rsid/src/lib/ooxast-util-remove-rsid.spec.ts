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
  const readTree = () =>
    JSON.parse(
      readFileSync(
        new URL('../../../../reoff/reoff-parse/src/test/ooxasttree.json', import.meta.url),
        {
          encoding: 'utf-8',
        },
      ),
    ) as Root
  const tree = readTree()
  const cleanedTree = ooxastUtilRemoveRsid(tree as Root, {
    rPrRemoveList: ['w:lang', 'w:shd', 'w:szCs', 'w:kern', 'w:rFonts', 'w:noProof'],
  }) as Root
  writeFileSync(new URL('./removedRsid', import.meta.url), JSON.stringify(cleanedTree, null, 2))
  // console.dir(cleanedTree, { depth: null })

  it('should retain rs', () => {
    const wrs = selectAll('w\\:r > w\\:t', cleanedTree)
    expect(wrs.length).toBeGreaterThan(1)
  })

  it('should get rid of rsids', () => {
    const runsAndParagraphs = [
      ...selectAll('w\\:p', cleanedTree),
      ...selectAll('w\\:r', cleanedTree),
    ]
    expect(runsAndParagraphs.length).toBeGreaterThan(1)
    const rsidAttributes = runsAndParagraphs.flatMap((node) =>
      Object.keys((node as any).attributes ?? {}).filter((key) => key.startsWith('w:rsid')),
    )
    expect(rsidAttributes).toEqual([])
  })
  it('should start from a tree with rsids', () => {
    expect(JSON.stringify(readTree())).toContain('"w:rsidR"')
  })

  it('should get rid of w:langs', () => {
    const wrs = selectAll('w\\:r w\\:lang', cleanedTree)
    expect(wrs).toEqual([])
  })
})
