import { toString } from './xast-util-to-string'

describe('xastXastUtilToString', () => {
  it('should work', () => {
    expect(toString({ type: 'text', value: 'Hello World' })).toEqual(
      'Hello World'
    )
  })
})
