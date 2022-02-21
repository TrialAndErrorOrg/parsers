import { findCitations } from './ooxast-ooxast-util-citations'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('ooxastOoxastUtilCitations', () => {
  const ooxast = JSON.parse(
    readFileSync(
      join(__dirname, '../../../../reoff/reoff-parse/src/test/ooxasttree'),
      { encoding: 'utf-8' }
    )
  )
  it('should work', () => {
    expect(findCitations(ooxast)).toEqual('ooxast-ooxast-util-citations')
  })
})
