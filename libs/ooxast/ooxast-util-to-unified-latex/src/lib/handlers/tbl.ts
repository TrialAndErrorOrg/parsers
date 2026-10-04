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

  const columns = columnSpecs(h, tbl)
    .map((spec) => `${spec}${h.columnSeparator ? ' |' : ''}`)
    .join(' ')

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

/**
 * One column spec per column. Columns of equal width get `defaultCol` (`X` with tabularx, which
 * needs X columns to stretch the table). When the `w:tblGrid` gives columns of different widths,
 * they keep their proportions: `p{}` columns of the line width, or weighted `X` columns.
 */
export function columnSpecs(h: H, tbl: Tbl): string[] {
  const count = columnCount(tbl)
  const uniform = h.tabularx?.width ? 'X' : h.defaultCol
  const widths = gridWidths(tbl)

  const total = widths.reduce((sum, width) => sum + width, 0)
  const share = (width: number, scale = 1) => Number(((width / total) * scale).toFixed(3))

  // Word's grids are rarely exactly even: columns within 5% of the average count as equal
  const even = widths.every((width) => Math.abs(width * widths.length - total) <= total * 0.05)
  if (widths.length !== count || even) {
    return Array.from({ length: count }, () => uniform)
  }

  return widths.map((width) =>
    h.tabularx?.width
      ? `>{\\hsize=${share(width, count)}\\hsize}X`
      : `p{\\dimexpr ${share(width)}\\linewidth-2\\tabcolsep\\relax}`,
  )
}

/** The `w:w` of every `w:gridCol`, or nothing if any is missing */
function gridWidths(tbl: Tbl): number[] {
  const grid = ((tbl.children ?? []) as unknown[]).find((child) =>
    isElement(child, 'w:tblGrid'),
  ) as Element | undefined
  const widths = (grid?.children ?? [])
    .filter((col): col is Element => isElement(col, 'w:gridCol'))
    .map((col) => parseInt(col.attributes?.['w:w'] ?? '', 10))
  return widths.every((width) => width > 0) ? widths : []
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
