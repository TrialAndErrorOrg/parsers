import { astStringify } from './json-stringifier'

describe('jsonStringifier', () => {
  it('should work', () => {
    expect(astStringify()).toEqual('json-stringifier')
  })
})
