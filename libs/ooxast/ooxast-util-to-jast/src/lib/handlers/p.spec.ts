import { x } from 'xastscript'
import { toJast } from '../ooxast-util-to-jast'
describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('pPr', {}, []),
      x('r', {}, [
        x('rPr', {}, []),
        x('t', {}, [{ type: 'text', value: 'lmao' }]),
      ]),
    ])
    expect(toJast(basicp)).toEqual(
      x('p', { id: 'ayy' }, [{ type: 'text', value: 'lmao' }])
    )
  })
})
