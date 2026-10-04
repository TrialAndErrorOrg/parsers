import { H, Handle } from '../types.js'
import { Tbl } from 'ooxast'
import type { Element } from 'xast'
import type { Group } from '@unified-latex/unified-latex-types'
import { all } from '../all.js'
import { arg, args, env } from '@unified-latex/unified-latex-builder'

export const tbl: Handle = (h: H, tbl: Tbl) => {
  const nested = h.inTable
  h.inTable = true
  const contents = all(h, tbl)
  h.inTable = nested

  // tabularx needs X columns to stretch the table to its width
  const column = h.tabularx?.width ? 'X' : h.defaultCol
  const columns = Array.from(
    { length: columnCount(tbl) },
    () => `${column}${h.columnSeparator ? ' |' : ''}`,
  ).join(' ')

  const colArg = `@{} ${h.columnSeparator ? '| ' : ''}${columns} @{}`
  const tabular = h.tabularx?.width
    ? env('tabularx', contents, args([h.tabularx.width, colArg], { braces: '{}{}' }))
    : env('tabular', contents, arg(colArg))

  if (!nested) {
    return env('table', tabular)
  }

  // A table inside a table cell can't be a float. A nested tabularx has to be in a group:
  // the outer one collects its body up to the first `\end{tabularx}`.
  return h.tabularx?.width ? ({ type: 'group', content: [tabular] } as Group) : tabular
}

const isElement = (node: unknown, name: string): node is Element =>
  !!node && (node as Element).type === 'element' && (node as Element).name === name

/**
 * The number of columns of a table: the `w:gridCol`s of its `w:tblGrid`, or the widest row
 * (counting `w:gridSpan`) if that is wider.
 */
export function columnCount(tbl: Tbl): number {
  const children = (tbl.children ?? []) as unknown[]

  const grid = children.find((child) => isElement(child, 'w:tblGrid')) as Element | undefined
  const gridCols = grid ? grid.children.filter((col) => isElement(col, 'w:gridCol')).length : 0

  const rowWidths = children
    .filter((row): row is Element => isElement(row, 'w:tr'))
    .map((row) =>
      row.children
        .filter((cell): cell is Element => isElement(cell, 'w:tc'))
        .reduce((count, cell) => count + gridSpan(cell), 0),
    )

  return Math.max(gridCols, ...rowWidths, 1)
}

/** `w:tcPr/w:gridSpan` of a cell (not of a nested table's cells) */
export function gridSpan(cell: Element): number {
  const tcPr = cell.children.find((child) => isElement(child, 'w:tcPr')) as Element | undefined
  const span = tcPr?.children.find((child) => isElement(child, 'w:gridSpan')) as Element | undefined
  return parseInt(span?.attributes?.['w:val'] ?? '1', 10) || 1
}
