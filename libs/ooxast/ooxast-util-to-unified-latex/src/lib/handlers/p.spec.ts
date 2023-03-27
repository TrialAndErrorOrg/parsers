import { x } from 'xastscript'
import { toUnifiedLatex } from '../ooxast-util-to-unified-latex.js'
import { s, SP } from '@unified-latex/unified-latex-builder'
import { describe, it, expect } from 'vitest'

describe('p', () => {
  it('should do something', () => {
    const basicp = x('p', { id: 'ayy' }, [
      x('w:pPr', {}, []),
      x('w:r', {}, [x('w:rPr', {}, []), x('w:t', {}, [{ type: 'text', value: 'lmao' }])]),
    ])
    expect(toUnifiedLatex(basicp)).toEqual([SP])
  })
})
