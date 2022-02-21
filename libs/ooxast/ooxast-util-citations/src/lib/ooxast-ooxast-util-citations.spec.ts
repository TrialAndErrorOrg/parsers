import { findCitations } from './ooxast-util-citations'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

describe('ooxastOoxastUtilCitations', () => {
  const ooxast = JSON.parse(
    readFileSync(
      join(__dirname, '../../../../reoff/reoff-parse/src/test/ooxasttree'),
      { encoding: 'utf-8' }
    )
  )
  const citetree = findCitations(ooxast)
  writeFileSync(
    join(__dirname, 'citetree.json'),
    JSON.stringify(citetree, null, 2)
  )
  it('should work', () => {
    expect(citetree).toEqual('ooxast-ooxast-util-citations')
  })
})
