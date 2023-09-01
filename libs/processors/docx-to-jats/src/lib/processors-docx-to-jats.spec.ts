import { processorsDocxToJats } from './processors-docx-to-jats.js'

describe('processorsDocxToJats', () => {
  it('should work', () => {
    expect(processorsDocxToJats()).toEqual('processors-docx-to-jats')
  })
})
