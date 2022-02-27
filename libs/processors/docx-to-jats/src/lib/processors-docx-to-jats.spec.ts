import { processorsDocxToJats } from './processors-docx-to-jats'

describe('processorsDocxToJats', () => {
  it('should work', () => {
    expect(processorsDocxToJats()).toEqual('processors-docx-to-jats')
  })
})
