import { m } from '@unified-latex/unified-latex-builder'
import { Tc } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all'
import { H, Handle, UnifiedLatexNode } from '../types'

export const tc: Handle = (h: H, node: Tc): UnifiedLatexNode[] => {
  const gridSpan = select('w\\:gridSpan', node)?.attributes?.['w:val']
  const shade = select('w\\:shd', node)?.attributes?.['w:fill']

  const children = all(h, node)

  if (!gridSpan && !shade) return children

  let result = children

  if (shade && h.xcolor) {
    result = [m('color', [shade, ...result])]
  }

  const parsedGridSpan = parseInt(gridSpan || '0')

  if (parsedGridSpan > 1) {
    result = [m('multicolumn', [`${parsedGridSpan}`, 'l', ...result])]
  }

  return result
}
