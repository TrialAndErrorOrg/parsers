import { TableCell } from 'mdast'
import { tableCell } from 'mdast-builder'
import { Tc } from 'ooxast'
import { select } from 'xast-util-select'
import { State } from '../state.js'
import { Handle } from '../types.js'

export const tc: Handle = (state: State, node: Tc) => {
  const gridSpan = select('w\\:gridSpan', node)?.attributes?.['w:val']
  // const shade = select('w\\:shd', node)?.attributes?.['w:fill']

  const children = state.all(node)

  if (!gridSpan) return children

  const content = children

  const parsedGridSpan = parseInt(gridSpan || '0')

  const result = tableCell(content) as TableCell
  state.patch(node, result)

  if (parsedGridSpan > 1) {
    return [
      tableCell(content) as TableCell,
      ...Array.from({ length: parsedGridSpan - 1 }).map(() => tableCell([]) as TableCell),
    ]
  }

  return [result]
}
