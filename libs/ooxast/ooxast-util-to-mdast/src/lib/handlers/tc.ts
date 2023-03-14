import { TableCell } from 'mdast'
import { tableCell } from 'mdast-builder'
import { Tc } from 'ooxast'
import { select } from 'xast-util-select'
import { State } from '../state.js'
import { Handle } from '../types.js'

export const tc: Handle = (state: State, node: Tc) => {
  const gridSpan = select('w\\:gridSpan', node)?.attributes?.['w:val']
  const shade = select('w\\:shd', node)?.attributes?.['w:fill']

  const children = state.all(node)

  if (!gridSpan) return children

  let result = children

  const parsedGridSpan = parseInt(gridSpan || '0')

  if (parsedGridSpan > 1) {
    result = [
      tableCell(result) as TableCell,
      ...Array.from({ length: parsedGridSpan - 1 }).map(() => tableCell([]) as TableCell),
    ]
  }

  return [tableCell(result) as TableCell]
}
