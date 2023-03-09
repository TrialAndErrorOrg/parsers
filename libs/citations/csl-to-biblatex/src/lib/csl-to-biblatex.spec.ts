import { cslToBiblatex } from './csl-to-biblatex.js'

describe('cslToBiblatex', () => {
  it('should work', () => {
    expect(cslToBiblatex()).toEqual('csl-to-biblatex')
  })
})
