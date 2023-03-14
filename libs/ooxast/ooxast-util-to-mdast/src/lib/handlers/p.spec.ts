import { x } from 'xastscript'
import { toMdast } from '../ooxast-util-to-mdast.js'
import { s, SP } from '@unified-latex/unified-latex-builder'

describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [x('w:rPr', {}, []), x('w:t', {}, [{ type: 'text', value: 'lmao' }])]),
    ])
    expect(toMdast(basicp)).toEqual([SP])
  })
})
