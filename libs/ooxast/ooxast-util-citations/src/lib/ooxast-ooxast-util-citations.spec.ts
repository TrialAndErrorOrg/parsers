import { findCitations } from './ooxast-util-citations'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

describe('ooxastOoxastUtilCitations', () => {
  const ooxast = JSON.parse(
    readFileSync(
      new URL(
        '../../../../ooxast/ooxast-util-remove-rsid/src/lib/removedRsid',
        import.meta.url
      ),
      { encoding: 'utf-8' }
    )
  )
  const citetree = findCitations(ooxast)
  writeFileSync(
    new URL('citetree.json', import.meta.url),
    JSON.stringify(citetree, null, 2)
  )
  it('should work', () => {
    expect(citetree).toEqual('ooxast-ooxast-util-citations')
  })
})
