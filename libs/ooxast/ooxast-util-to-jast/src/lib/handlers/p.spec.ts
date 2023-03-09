import { x } from 'xastscript'
import { toJast } from '../ooxast-util-to-jast.js'
describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [x('w:rPr', {}, []), x('w:t', {}, [{ type: 'text', value: 'lmao' }])]),
    ])
    expect(toJast(basicp)).toEqual(x('p', [{ type: 'text', value: 'lmao' }]))
  })
})
