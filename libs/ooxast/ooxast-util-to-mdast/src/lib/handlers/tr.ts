import { State } from '../state.js'
import { Handle } from '../types.js'
import { Row } from 'ooxast'
import { TableRow } from 'mdast'

export const tr: Handle = (state: State, node: Row, parent) => {
  const content = state.all(node)

  const result = {
    type: 'tableRow',
    children: content,
  } as TableRow
  state.patch(node, result)

  return result
}
