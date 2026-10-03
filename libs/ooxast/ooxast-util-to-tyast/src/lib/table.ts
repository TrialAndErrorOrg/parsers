/**
 * Word tables → `#table(…)`, captioned tables → `#figure(table(…), caption: […])`, and
 * single-cell tables (the usual way manuscripts draw a box) → `#jote-box(…)[…]`.
 */
import type { Element } from 'xast'
import type { Argument, BlockContent, Content, FunctionCall, PhrasingContent, Value } from 'tyast'
import type { State, Where } from './types.js'
import { attr, child, isOn, kids, plainText } from './util.js'
import { group, labelNode, noteBlock, paragraph, toItems, type Item } from './blocks.js'
import { splitBoxBody } from './box-split.js'

export interface CellModel {
  span: number
  vMerge?: 'restart' | 'continue'
  items: Item[]
  /** cell width (twips) */
  width?: number
  align?: string
  text: string
  /** grid column, filled in during layout */
  col?: number
  rowspan?: number
}

export interface RowModel {
  header: boolean
  gridBefore: number
  gridAfter: number
  cells: CellModel[]
}

export interface TableItem {
  kind: 'table'
  el: Element
  /** grid column widths (twips) */
  grid: number[]
  /** table width (twips), if given */
  width?: number
  rows: RowModel[]
}

/** Pass 1: convert all cell contents in document order. */
export function tableItem(state: State, tbl: Element): TableItem {
  const grid = kids(child(tbl, 'w:tblGrid'))
    .filter((k) => k.name === 'w:gridCol')
    .map((k) => parseInt(attr(k, 'w:w') ?? '0', 10) || 0)
  const tblW = child(child(tbl, 'w:tblPr'), 'w:tblW')
  const width =
    attr(tblW, 'w:type') === 'dxa' ? parseInt(attr(tblW, 'w:w') ?? '', 10) || undefined : undefined

  const rows: RowModel[] = []
  for (const tr of kids(tbl)) {
    if (tr.name !== 'w:tr') continue
    const trPr = child(tr, 'w:trPr')
    const row: RowModel = {
      header: isOn(child(trPr, 'w:tblHeader')) && !!child(trPr, 'w:tblHeader'),
      gridBefore: parseInt(attr(child(trPr, 'w:gridBefore'), 'w:val') ?? '0', 10) || 0,
      gridAfter: parseInt(attr(child(trPr, 'w:gridAfter'), 'w:val') ?? '0', 10) || 0,
      cells: [],
    }
    for (const tc of cellsOf(tr)) {
      const tcPr = child(tc, 'w:tcPr')
      const vMergeEl = child(tcPr, 'w:vMerge')
      const firstP = kids(tc).find((k) => k.name === 'w:p')
      row.cells.push({
        span: parseInt(attr(child(tcPr, 'w:gridSpan'), 'w:val') ?? '1', 10) || 1,
        vMerge: vMergeEl
          ? attr(vMergeEl, 'w:val') === 'restart'
            ? 'restart'
            : 'continue'
          : undefined,
        width: parseInt(attr(child(tcPr, 'w:tcW'), 'w:w') ?? '', 10) || undefined,
        align: attr(child(child(firstP, 'w:pPr'), 'w:jc'), 'w:val'),
        items: toItems(
          state,
          kids(tc).filter((k) => k.name !== 'w:tcPr'),
          'table',
        ),
        text: plainText(tc).trim(),
      })
    }
    rows.push(row)
  }
  return { kind: 'table', el: tbl, grid, width, rows }
}

/** `w:tc` children of a row, looking through `w:sdt`/`w:customXml` wrappers. */
function cellsOf(tr: Element): Element[] {
  const out: Element[] = []
  for (const k of kids(tr)) {
    if (k.name === 'w:tc') out.push(k)
    else if (k.name === 'w:sdt') out.push(...cellsOf(child(k, 'w:sdtContent') ?? k))
    else if (k.name === 'w:customXml') out.push(...cellsOf(k))
  }
  return out
}

/** Captioned tables with at least this many columns go on a landscape page */
const LANDSCAPE_COLUMNS = 9

export interface TableBlockOptions {
  where: Where
  caption?: { title: PhrasingContent[]; number: string; note?: PhrasingContent[] }
  box?: { title?: PhrasingContent[]; subtitle?: PhrasingContent[]; note?: PhrasingContent[] }
}

/** Pass 2: a table item as block content. */
export function tableBlocks(
  state: State,
  item: TableItem,
  options: TableBlockOptions,
): BlockContent[] {
  const singleCell = item.rows.length === 1 && item.rows[0].cells.length === 1
  if (options.box || (singleCell && options.where === 'body' && !options.caption)) {
    return box(state, item, options.box ?? {})
  }

  const { pre, table } = repairNested(item)
  const preBlocks = pre ? group(state, pre.items, 'box') : []
  const tableCall = typstTable(state, table, !!options.caption)

  if (!options.caption) {
    return [...preBlocks, tableCall]
  }

  state.counters.table++
  const { title, number, note } = options.caption
  const body: Value =
    note || preBlocks.length
      ? {
          type: 'contentBlock',
          children: [...preBlocks, tableCall, ...(note ? [noteBlock(note)] : [])] as Content[],
        }
      : tableCall
  const args: Argument[] = [{ type: 'argument', value: body }]
  if (title.length)
    args.push({
      type: 'argument',
      name: 'caption',
      value: { type: 'contentBlock', children: title },
    })
  if (number !== String(state.counters.table)) {
    args.push({
      type: 'argument',
      name: 'numbering',
      value: { type: 'code', value: `(..) => ${JSON.stringify(number)}` },
    })
  }
  const columns = table.grid.length || Math.max(...table.rows.map((r) => r.cells.length))
  const label = labelNode(`tab:${number}`) as never
  if (state.options.wideFigures === 'auto' && columns >= LANDSCAPE_COLUMNS) {
    // too many columns even for the full text width: a rotated page of its own
    args.push({ type: 'argument', name: 'placement', value: { type: 'code', value: 'none' } })
    return [
      {
        type: 'call',
        name: 'landscape',
        args: [],
        body: [[{ type: 'call', name: 'figure', args }, label]],
      },
    ]
  }
  const wide =
    state.options.wideFigures === 'always' || (state.options.wideFigures === 'auto' && columns >= 5)
  return [{ type: 'call', name: wide ? 'wide-figure' : 'figure', args }, label]
}

/**
 * Google Docs exports a table nested in a single-cell box as one table whose first grid column
 * spans the whole width: row 0 = [the box text, header cells…], following rows = the inner
 * table. Split that back into the text before the table and the inner table.
 */
function repairNested(item: TableItem): { pre?: CellModel; table: TableItem } {
  const { grid, rows } = item
  if (grid.length < 3 || rows.length < 2) return { table: item }
  const total = item.width ?? grid.reduce((a, b) => a + b, 0)
  const first = rows[0].cells[0]
  if (grid[0] < 0.9 * total || rows[0].cells.length < 2 || first.span !== 1) return { table: item }
  const rest = grid.slice(1)
  const innerCols = rest.length
  const innerRows: RowModel[] = [
    { ...rows[0], cells: rows[0].cells.slice(1) },
    ...rows.slice(1),
  ].map((row) => {
    const used = row.cells.reduce((a, c) => a + c.span, 0) + row.gridBefore + row.gridAfter
    // rows whose cells don't fill the inner grid are missing their leading cells
    return used < innerCols ? { ...row, gridBefore: row.gridBefore + innerCols - used } : row
  })
  innerRows[0] = { ...innerRows[0], header: true }
  return { pre: first, table: { ...item, grid: rest, rows: innerRows } }
}

function typstTable(state: State, item: TableItem, captioned: boolean): FunctionCall {
  const rows = item.rows.map((r) => ({ ...r, cells: r.cells.map((c) => ({ ...c })) }))
  const columnCount = Math.max(
    1,
    item.grid.length,
    ...rows.map((r) => r.gridBefore + r.gridAfter + r.cells.reduce((a, c) => a + c.span, 0)),
  )

  // grid positions and rowspans from vertical merges
  rows.forEach((row) => {
    let col = row.gridBefore
    for (const cell of row.cells) {
      cell.col = col
      col += cell.span
    }
  })
  const covered = new Set<string>()
  rows.forEach((row, r) => {
    for (const cell of row.cells) {
      if (cell.vMerge !== 'restart') continue
      let span = 1
      for (let r2 = r + 1; r2 < rows.length; r2++) {
        const below = rows[r2].cells.find((c) => c.col === cell.col)
        if (below?.vMerge !== 'continue') break
        covered.add(`${r2}:${cell.col}`)
        span++
      }
      cell.rowspan = span
    }
  })

  // header rows
  let headerRows = 0
  while (headerRows < rows.length && rows[headerRows].header) headerRows++
  if (!headerRows && rows.length >= 3) {
    const first = rows[0].cells.filter((c) => c.text)
    const allBold =
      first.length > 0 &&
      first.every((c) => c.items.every((it) => it.kind !== 'p' || !it.content.length || it.bold))
    if (captioned || allBold) headerRows = 1
  }
  // a header cell spanning into the body pulls those rows into the header
  for (let r = 0; r < headerRows; r++) {
    for (const cell of rows[r].cells) {
      if (cell.rowspan && r + cell.rowspan > headerRows) headerRows = r + cell.rowspan
    }
  }
  if (headerRows >= rows.length) headerRows = 0

  const cellValues = (row: RowModel, r: number): Value[] => {
    const out: Value[] = []
    for (let k = 0; k < row.gridBefore; k++) out.push(emptyCell())
    for (const cell of row.cells) {
      if (cell.vMerge === 'continue' && covered.has(`${r}:${cell.col}`)) continue
      out.push(cellValue(state, cell))
    }
    for (let k = 0; k < row.gridAfter; k++) out.push(emptyCell())
    // pad short rows so the next row starts in column 0
    const used =
      row.gridBefore +
      row.gridAfter +
      row.cells.reduce(
        (a, c) => a + (c.vMerge === 'continue' && covered.has(`${r}:${c.col}`) ? c.span : c.span),
        0,
      )
    for (let k = used; k < columnCount; k++) out.push(emptyCell())
    return out
  }

  const args: Argument[] = [
    { type: 'argument', name: 'columns', value: columnsValue(item.grid, columnCount) },
  ]
  const hline = (stroke?: string): Argument => ({
    type: 'argument',
    value: {
      type: 'call',
      name: 'table.hline',
      args: stroke
        ? [{ type: 'argument', name: 'stroke', value: { type: 'code', value: stroke } }]
        : [],
    },
  })
  args.push(hline())
  if (headerRows) {
    const header: Value[] = []
    for (let r = 0; r < headerRows; r++) header.push(...cellValues(rows[r], r))
    args.push({
      type: 'argument',
      value: {
        type: 'call',
        name: 'table.header',
        args: header.map((v) => ({ type: 'argument', value: v } as Argument)),
      },
    })
    args.push(hline('0.05em'))
  }
  for (let r = headerRows; r < rows.length; r++) {
    args.push(...cellValues(rows[r], r).map((v) => ({ type: 'argument', value: v } as Argument)))
  }
  args.push(hline())
  return { type: 'call', name: 'table', args }
}

function emptyCell(): Value {
  return { type: 'contentBlock', children: [] }
}

function columnsValue(grid: number[], count: number): Value {
  if (grid.length !== count || grid.some((w) => !w)) return { type: 'code', value: String(count) }
  if (count === 1) return { type: 'code', value: '1' }
  const min = Math.min(...grid)
  const frs = grid.map((w) => Math.round((w / min) * 100) / 100)
  if (frs.every((f) => f === 1)) return { type: 'code', value: String(count) }
  return { type: 'array', items: frs.map((f) => ({ type: 'code', value: `${f}fr` })) }
}

function cellValue(state: State, cell: CellModel): Value {
  const content = group(state, cell.items, 'table')
  const children: Content[] =
    content.length === 1 && content[0].type === 'paragraph'
      ? (content[0].children as PhrasingContent[])
      : content
  const named: Argument[] = []
  if (cell.span > 1)
    named.push({
      type: 'argument',
      name: 'colspan',
      value: { type: 'code', value: String(cell.span) },
    })
  if (cell.rowspan && cell.rowspan > 1) {
    named.push({
      type: 'argument',
      name: 'rowspan',
      value: { type: 'code', value: String(cell.rowspan) },
    })
  }
  if (cell.align === 'center' || cell.align === 'right' || cell.align === 'end') {
    named.push({
      type: 'argument',
      name: 'align',
      value: { type: 'code', value: cell.align === 'center' ? 'center' : 'right' },
    })
  }
  if (!named.length) return { type: 'contentBlock', children }
  return { type: 'call', name: 'table.cell', args: named, body: [children as PhrasingContent[]] }
}

/**
 * A single-cell table / "Box N" → `jote-box`. A box taller than a page is continued in further
 * untitled boxes (see `box-split.ts`).
 */
function box(
  state: State,
  item: TableItem,
  options: NonNullable<TableBlockOptions['box']>,
): FunctionCall[] {
  const singleColumn = item.rows.every((r) => r.cells.length === 1)
  const body: BlockContent[] = []
  if (options.subtitle?.length)
    body.push(paragraph([{ type: 'strong', children: options.subtitle }]))
  let hasTable = false
  if (singleColumn) {
    for (const row of item.rows) {
      for (const cell of row.cells) body.push(...group(state, cell.items, 'box'))
    }
  } else {
    const { pre, table } = repairNested(item)
    if (pre) body.push(...group(state, pre.items, 'box'))
    body.push(typstTable(state, table, false))
    hasTable = true
  }
  if (options.note?.length) body.push(noteBlock(options.note))

  const length = item.rows.flatMap((r) => r.cells).reduce((a, c) => a + c.text.length, 0)
  let width = state.options.boxWidth
  if (width === 'auto') width = hasTable || length > 1800 ? 'full' : 'column'

  const chunks = splitBoxBody(body, width)
  if (chunks.length > 1) state.warn(`A box was split into ${chunks.length} boxes to fit the page`)
  return chunks.map((chunk, i) => {
    const args: Argument[] = []
    if (i === 0 && options.title?.length)
      args.push({
        type: 'argument',
        name: 'title',
        value: { type: 'contentBlock', children: options.title },
      })
    if (width !== 'column')
      args.push({ type: 'argument', name: 'width', value: { type: 'string', value: width } })
    return { type: 'call', name: 'jote-box', args, body: [chunk as PhrasingContent[]] }
  })
}
