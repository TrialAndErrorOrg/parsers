import { cslToRefList } from './csl-to-jast'
import path, { join } from 'path'

import { readFileSync, writeFileSync } from 'fs'

const test = JSON.parse(
  readFileSync(join(__dirname, 'test.json'), { encoding: 'utf-8' })
)
describe('cslToRefList', () => {
  it('should map csl to reflist', () => {
    const res = cslToRefList(test)
    writeFileSync(
      path.join(__dirname, 'test-jast.json'),
      JSON.stringify(res, null, 2)
    )
    expect(res).toBeDefined()
  })
})
