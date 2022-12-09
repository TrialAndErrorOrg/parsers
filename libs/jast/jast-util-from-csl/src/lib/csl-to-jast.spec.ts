import { cslToRefList } from './csl-to-jast'

import { readFileSync, writeFileSync } from 'fs'

const test = JSON.parse(
  readFileSync(new URL('test.json', import.meta.url), { encoding: 'utf-8' })
)
describe('cslToRefList', () => {
  it('should map csl to reflist', () => {
    const res = cslToRefList(test)
    writeFileSync(
      new URL('test-jast.json', import.meta.url),
      JSON.stringify(res, null, 2)
    )
    expect(res).toBeDefined()
  })
})
