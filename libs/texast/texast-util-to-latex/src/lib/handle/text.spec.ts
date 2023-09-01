import { toLatex } from '../texast-util-to-latex.js'

describe('text', () => {
  it('should render', () => {
    const basic = { type: 'text' as const, value: 'Hello world!' }
    expect(toLatex(basic)).toBe('Hello world!')
  })
})
