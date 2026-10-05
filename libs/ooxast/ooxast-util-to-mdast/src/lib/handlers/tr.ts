import { State } from '../state.js'
import { Handle } from '../types.js'
import { Row } from 'ooxast'
import type { TableCell, TableRow } from 'mdast'

export const tr: Handle = (state: State, node: Row, parent) => {
  const content = state.all(node)

  const result: TableRow = { type: 'tableRow', children: content as TableCell[] }
  state.patch(node, result)

  return result
}
