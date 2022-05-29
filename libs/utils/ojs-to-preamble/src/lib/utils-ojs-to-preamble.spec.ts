import { utilsOjsToPreamble } from './utils-ojs-to-preamble'

describe('utilsOjsToPreamble', () => {
  it('should work', () => {
    expect(utilsOjsToPreamble()).toEqual('utils-ojs-to-preamble')
  })
})
