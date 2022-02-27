import { ooxastUtilRemoveRsid } from './ooxast-util-remove-rsid'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { select, selectAll } from 'xast-util-select'
import { Root } from 'ooxast'

describe('ooxastOoxastUtilRemoveRsid', () => {
  const tree = JSON.parse(
    readFileSync(
      join(__dirname, '../../../../reoff/reoff-parse/src/test/ooxasttree'),
      { encoding: 'utf-8' }
    )
  ) as Root
  const cleanedTree = ooxastUtilRemoveRsid(tree as Root, {
    rPrRemoveList: [
      'w:lang',
      'w:shd',
      'w:szCs',
      'w:kern',
      'w:rFonts',
      'w:noProof',
    ],
  }) as Root
  writeFileSync(
    join(__dirname, './removedRsid'),
    JSON.stringify(cleanedTree, null, 2)
  )
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
