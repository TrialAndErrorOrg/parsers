import { x } from 'xastscript'
import { toUnifiedLatex } from '../ooxast-util-to-unified-latex'
describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [
        x('w:rPr', {}, []),
        x('w:t', {}, [{ type: 'text', value: 'lmao' }]),
      ]),
    ])
    expect(toUnifiedLatex(basicp)).toEqual(x('p', [{ type: 'text', value: 'lmao' }]))
  })
})
