import { State } from '../state.js'
import { Handle } from '../types.js'
import { Tbl } from 'ooxast'
import { toString } from 'xast-util-to-string'
import type { Table, TableRow, Text } from 'mdast'

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
  const result: Table = { type: 'table', align: ['left'], children: contents as TableRow[] }
  state.patch(node, result)
  return result
}
