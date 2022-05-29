import { findCitations } from './ooxast-util-citations'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

describe('ooxastOoxastUtilCitations', () => {
  const ooxast = JSON.parse(
    readFileSync(
      join(
        __dirname,
        '../../../../ooxast/ooxast-util-remove-rsid/src/lib/removedRsid'
      ),
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
