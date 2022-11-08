import { x } from 'xastscript'
import { h } from 'hastscript'
import { toHast } from '../ooxast-util-to-hast'
describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [
        x('w:rPr', {}, []),
        x('w:t', {}, [{ type: 'text', value: 'lmao' }]),
      ]),
    ])
    expect(toHast(basicp)).toEqual(h('p', [{ type: 'text', value: 'lmao' }]))
  })
})
