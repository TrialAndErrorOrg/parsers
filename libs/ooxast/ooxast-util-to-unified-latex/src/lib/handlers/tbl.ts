import { H, Handle } from '../types.js'
import { Tbl } from 'ooxast'
import { all } from '../all.js'
import { env } from '@unified-latex/unified-latex-builder'

export const tbl: Handle = (h: H, tbl: Tbl) => {
  h.inTable = true
  const contents = all(h, tbl)
  h.inTable = false

  const tableRows = tbl.children.filter((row) => 'name' in row && row.name === 'w:tr')

  const columns = tableRows.map(() => `${h.defaultCol}${h.columnSeparator ? ' |' : ''}`).join(' ')

  const colArg = [`@{} ${h.columnSeparator ? '| ' : ''}${columns} @{}`]
  const table = env(
    'table',
    h.tabularx?.width
      ? env('tabularx', contents, [h.tabularx.width, ...colArg])
      : env('tabular', contents, colArg),
  )
  return table
}
