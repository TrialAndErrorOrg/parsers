import { x } from 'xastscript'
import { toMdast } from '../ooxast-util-to-mdast.js'
import { describe, it, expect } from 'vitest'

describe('p', () => {
  it('turns a w:p into a paragraph', () => {
    const basicp = x('w:p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [x('w:rPr', {}, []), x('w:t', {}, [{ type: 'text', value: 'lmao' }])]),
    ])
    expect(toMdast(basicp as any)).toEqual({
      type: 'paragraph',
      children: [{ type: 'text', value: 'lmao' }],
    })
  })
})
