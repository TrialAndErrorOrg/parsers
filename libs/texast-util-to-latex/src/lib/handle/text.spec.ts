import { toLatex } from '../texast-util-to-latex'

describe('text', () => {
  it('should render', () => {
    const basic = { type: 'text', value: 'Hello world!' }
    expect(toLatex(basic)).toBe('Hello world!')
  })
})
