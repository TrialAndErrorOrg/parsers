import { State } from '../state.js'
import { Handle } from '../types.js'
import { Tbl } from 'ooxast'
import { toString } from 'xast-util-to-string'
import { Text } from 'mdast'
import { table } from 'mdast-builder'

export const tbl: Handle = (state: State, node: Tbl) => {
  // Ignore nested tables.
  if (state.inTable) {
    const result = { type: 'text', value: toString(node) } as Text
    state.patch(node, result)
    return result
  }

  state.inTable = true
  const contents = state.all(node)
  state.inTable = false

  // const tableRows = node.children.filter((row) => 'name' in row && row.name === 'w:tr')

  // const colArg = [`@{} ${state.columnSeparator ? '| ' : ''}${columns} @{}`]
  const result = table(['left'], contents)
  state.patch(node, result)
  return result
}
