import type * as Ast from '@unified-latex/unified-latex-types'
import type { Argument, Content, Value } from 'typast'
import { arg, arr, asBlock, call, code, content, dict, named, text } from '../build.js'
import type { State } from '../state.js'
import { fontSizes } from '../symbols.js'
import type { EnvironmentHandler } from '../types.js'
import {
  args,
  convertLength,
  envArgs,
  envName,
  lastArg,
  plainText,
  printRaw,
  rawText,
  round,
  trimNodes,
} from '../util.js'

// ---------------------------------------------------------------------------
// Column specifications
// ---------------------------------------------------------------------------

type HAlign = 'left' | 'center' | 'right'
type VAlign = 'top' | 'horizon' | 'bottom'

export interface Column {
  /** Typst track size: `auto`, `3cm`, `20%`, `1.25fr` */
  width: string
  align: HAlign
  valign?: VAlign
  /** Typst text size from a `>{\footnotesize}` prefix */
  size?: string
  /** `\hyphenpenalty=10000` in a `>{…}` prefix */
  nohyphen?: boolean
  /** `\exhyphenpenalty=10000`: no line break after an explicit hyphen either */
  noexhyphen?: boolean
  bold?: boolean
  italic?: boolean
  /** `@{…}` before/after the column: no \tabcolsep on that side */
  noPadLeft?: boolean
  noPadRight?: boolean
}

export interface ColumnSpec {
  columns: Column[]
  /** x positions of vertical rules (`|`) */
  vlines: number[]
}

/** A spec token: a single character, a `{…}` group, or a macro */
type Token =
  | { kind: 'char'; value: string }
  | { kind: 'group'; nodes: Ast.Node[] }
  | { kind: 'macro'; node: Ast.Macro }

const isSpace = (t: Token | undefined) => t?.kind === 'char' && t.value === ' '

function tokenize(nodes: Ast.Node[]): Token[] {
  const tokens: Token[] = []
  for (const node of nodes) {
    if (node.type === 'string')
      for (const ch of node.content) tokens.push({ kind: 'char', value: ch })
    else if (node.type === 'group') tokens.push({ kind: 'group', nodes: node.content })
    else if (node.type === 'macro') {
      tokens.push({ kind: 'macro', node })
      // parser may have attached arguments to macros in the spec (e.g. \centering has none)
    } else if (node.type === 'whitespace' || node.type === 'comment') continue
    else tokens.push({ kind: 'group', nodes: [node] })
  }
  return tokens
}

/** Read the formatting of a `>{…}` prefix. */
function readPrefix(nodes: Ast.Node[], col: Partial<Column> & { weight?: number }) {
  const raw = printRaw(nodes)
  if (/\\centering\b|\\Centering\b/.test(raw)) col.align = 'center'
  if (/\\raggedright\b|\\RaggedRight\b|\\arraybackslash\\raggedright/.test(raw)) col.align = 'left'
  if (/\\raggedleft\b|\\RaggedLeft\b/.test(raw)) col.align = 'right'
  if (/\\bfseries\b/.test(raw)) col.bold = true
  if (/\\itshape\b/.test(raw)) col.italic = true
  for (const [name, size] of Object.entries(fontSizes)) {
    if (new RegExp(`\\\\${name}(?![a-zA-Z])`).test(raw)) col.size = size
  }
  if (/\\(?:ex)?hyphenpenalty=?10000/.test(raw.replace(/\s+/g, ''))) col.nohyphen = true
  if (/\\exhyphenpenalty=?10000/.test(raw.replace(/\s+/g, ''))) col.noexhyphen = true
  const hsize = raw.match(/\\hsize\s*=\s*([\d.]+)\s*\\hsize/)
  if (hsize) col.weight = Number(hsize[1])
}

export function parseColumnSpec(nodes: Ast.Node[], state: State, depth = 0): ColumnSpec {
  const tokens = tokenize(nodes)
  const columns: Column[] = []
  const vlines: number[] = []
  /** column positions of `@{…}` */
  const ats: number[] = []
  let prefix: Partial<Column> & { weight?: number } = {}
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i]
    if (tok.kind === 'macro') {
      // stray macros (\centering in a prefix written without braces etc.)
      continue
    }
    if (tok.kind === 'group') continue
    const c = tok.value
    // reads the token after the current position at call time, so that consecutive calls
    // (`*{n}{spec}`, column types with several arguments) consume consecutive groups
    const groupArg = (): Ast.Node[] => {
      let j = i + 1
      while (isSpace(tokens[j])) j++
      const next = tokens[j]
      if (next?.kind === 'group') {
        i = j
        return next.nodes
      }
      // like TeX, a single token is an argument too (`*3c`)
      if (next?.kind === 'char') {
        i = j
        return [{ type: 'string', content: next.value }]
      }
      return []
    }
    // \newcolumntype definitions shadow the built-in column letters
    const custom = state.columnTypes.get(c)
    if (custom && depth < 5) {
      let def = custom.def
      if (custom.args > 0) {
        const argNodes = Array.from({ length: custom.args }, () => groupArg())
        def = substituteParams(def, argNodes)
      }
      const sub = parseColumnSpec(def, state, depth + 1)
      for (const v of sub.vlines) vlines.push(columns.length + v)
      if (sub.columns[0])
        Object.assign(sub.columns[0], { ...stripWeight(prefix), ...keep(sub.columns[0]) })
      prefix = {}
      columns.push(...sub.columns)
      continue
    }
    switch (c) {
      case ' ':
        break
      case '|':
        vlines.push(columns.length)
        break
      case '@':
        ats.push(columns.length)
        groupArg()
        break
      case '!':
      case '<':
        groupArg()
        break
      case '>':
        readPrefix(groupArg(), prefix)
        break
      case '*': {
        const count = Number(plainText(groupArg()))
        const repeated = groupArg()
        if (Number.isFinite(count) && depth < 5) {
          for (let k = 0; k < count; k++) {
            const sub = parseColumnSpec(repeated, state, depth + 1)
            for (const v of sub.vlines) vlines.push(columns.length + v)
            // a pending prefix applies to the first repeated column only
            if (sub.columns[0])
              Object.assign(sub.columns[0], stripWeight(prefix), keep(sub.columns[0]))
            prefix = {}
            columns.push(...sub.columns)
          }
        }
        break
      }
      case 'l':
      case 'c':
      case 'r':
      case 'S': {
        const align: HAlign = c === 'l' ? 'left' : c === 'r' ? 'right' : 'center'
        columns.push({ width: 'auto', align, ...stripWeight(prefix) })
        prefix = {}
        break
      }
      case 'p':
      case 'm':
      case 'b': {
        const raw = rawText(groupArg())
        const width = convertLength(raw) ?? 'auto'
        if (width === 'auto') state.warn(`Could not convert column width \`${raw}\``)
        const valign: VAlign = c === 'm' ? 'horizon' : c === 'b' ? 'bottom' : 'top'
        columns.push({ width, align: 'left', valign, ...stripWeight(prefix) })
        prefix = {}
        break
      }
      case 'X': {
        const weight = prefix.weight ?? 1
        columns.push({ width: `${round(weight)}fr`, align: 'left', ...stripWeight(prefix) })
        prefix = {}
        break
      }
      default: {
        if (/[LCR]/.test(c)) {
          const align: HAlign = c === 'L' ? 'left' : c === 'R' ? 'right' : 'center'
          columns.push({ width: '1fr', align, ...stripWeight(prefix) })
          prefix = {}
        } else {
          state.warn(`Unknown column type \`${c}\`: treated as \`l\``)
          columns.push({ width: 'auto', align: 'left', ...stripWeight(prefix) })
          prefix = {}
        }
      }
    }
  }
  for (const at of ats) {
    if (columns[at - 1]) columns[at - 1].noPadRight = true
    if (columns[at]) columns[at].noPadLeft = true
  }
  return { columns, vlines }
}

function stripWeight(p: Partial<Column> & { weight?: number }): Partial<Column> {
  const { weight: _w, ...rest } = p
  return rest
}

/** properties set by the column's own definition win over an outer prefix */
function keep(col: Column): Partial<Column> {
  const out: Partial<Column> = { width: col.width }
  if (col.size) out.size = col.size
  if (col.nohyphen) out.nohyphen = col.nohyphen
  if (col.noexhyphen) out.noexhyphen = col.noexhyphen
  if (col.bold) out.bold = col.bold
  if (col.italic) out.italic = col.italic
  if (col.valign) out.valign = col.valign
  if (col.noPadLeft) out.noPadLeft = true
  if (col.noPadRight) out.noPadRight = true
  out.align = col.align
  return out
}

function substituteParams(def: Ast.Node[], params: Ast.Node[][]): Ast.Node[] {
  const out: Ast.Node[] = []
  for (let i = 0; i < def.length; i++) {
    const node = def[i]
    if (node.type === 'string' && node.content.startsWith('#')) {
      const n = Number(
        node.content.slice(1, 2) ||
          (def[i + 1]?.type === 'string' ? (def[i + 1] as Ast.String).content[0] : ''),
      )
      if (Number.isFinite(n) && params[n - 1]) {
        out.push(...params[n - 1])
        if (node.content.length === 1) i++
        continue
      }
    }
    if (node.type === 'group')
      out.push({ ...node, content: substituteParams(node.content, params) })
    else out.push(node)
  }
  return out
}

// ---------------------------------------------------------------------------
// Rows and cells
// ---------------------------------------------------------------------------

type Rule =
  | { kind: 'hline'; stroke: string }
  | { kind: 'cline'; start: number; end: number; stroke: string }

interface RawRow {
  rules: Rule[]
  cells: Ast.Node[][]
}

/**
 * Rule thicknesses. Only the thickness is given: the template sets the colour (the class'
 * \arrayrulecolor{betterlightblack}). `\hline`, `\cline` and `|` use \arrayrulewidth, see
 * {@link arrayRuleWidth}; the booktabs rules have their own widths (.08em/.05em/.03em at 10pt).
 */
const STROKES = {
  hline: 'arrayrule',
  toprule: '0.8pt',
  bottomrule: '0.8pt',
  midrule: '0.5pt',
  cmidrule: '0.3pt',
  cline: 'arrayrule',
  specialrule: '0.5pt',
}

/** \arrayrulewidth: 0.4pt, but 1pt inside `table` floats (set by the class). */
function arrayRuleWidth(state: State): string {
  return state.inTableEnv > 0 ? '1pt' : '0.4pt'
}

function strokeOf(name: keyof typeof STROKES, state: State): string {
  const s = STROKES[name]
  return s === 'arrayrule' ? arrayRuleWidth(state) : s
}

function parseRange(raw: string): [number, number] | undefined {
  const m = raw.match(/(\d+)\s*-\s*(\d+)/)
  return m ? [Number(m[1]), Number(m[2])] : undefined
}

function isBlank(nodes: Ast.Node[]): boolean {
  return trimNodes(nodes).length === 0
}

/** Split a tabular body into rows (with the rules above each row) and cells. */
export function splitRows(nodes: Ast.Node[], state: State): RawRow[] {
  const rows: RawRow[] = []
  let row: RawRow = { rules: [], cells: [[]] }
  const cell = () => row.cells[row.cells.length - 1]
  const rowIsEmpty = () => row.cells.length === 1 && isBlank(row.cells[0])
  for (const node of nodes) {
    if (node.type === 'macro') {
      const name = node.content
      if (name === '\\' || name === 'tabularnewline' || name === 'cr') {
        rows.push(row)
        row = { rules: [], cells: [[]] }
        continue
      }
      if (name in STROKES) {
        if (!rowIsEmpty()) state.warn(`\\${name} in the middle of a row`, node)
        if (name === 'cline' || name === 'cmidrule') {
          const range = parseRange(plainText(lastArg(node)))
          if (range)
            row.rules.push({
              kind: 'cline',
              start: range[0],
              end: range[1],
              stroke: strokeOf(name, state),
            })
        } else {
          row.rules.push({ kind: 'hline', stroke: strokeOf(name as keyof typeof STROKES, state) })
        }
        continue
      }
      if (
        [
          'addlinespace',
          'noalign',
          'rowcolor',
          'hhline',
          'endhead',
          'endfirsthead',
          'endfoot',
          'endlastfoot',
        ].includes(name)
      ) {
        continue
      }
    }
    if (node.type === 'string' && node.content === '&') {
      row.cells.push([])
      continue
    }
    if (node.type === 'comment') continue
    cell().push(node)
  }
  if (!rowIsEmpty() || row.rules.length) rows.push(row)
  return rows
}

interface Cell {
  colspan: number
  rowspan: number
  align?: HAlign
  valign?: VAlign
  nodes: Ast.Node[]
}

/** Unwrap `\multicolumn` and `\multirow` from a cell. */
function readCell(nodes: Ast.Node[], state: State): Cell {
  let inner = trimNodes(nodes)
  const cell: Cell = { colspan: 1, rowspan: 1, nodes: inner }
  for (let guard = 0; guard < 3; guard++) {
    const first = inner.find((n) => n.type !== 'whitespace' && n.type !== 'comment')
    const meaningful = inner.filter((n) => n.type !== 'whitespace' && n.type !== 'comment')
    if (!first || first.type !== 'macro' || meaningful.length !== 1) break
    if (first.content === 'multicolumn') {
      const a = args(first)
      cell.colspan = Math.max(1, Number(plainText(a[0])) || 1)
      const spec = parseColumnSpec(a[1] ?? [], state)
      if (spec.columns[0]) cell.align = spec.columns[0].align
      inner = trimNodes(lastArg(first))
      cell.nodes = inner
      continue
    }
    if (first.content === 'multirow') {
      const a = args(first)
      const n = Number(plainText(a[1]))
      if (n < 0) state.warn('\\multirow with a negative row count is not supported', first)
      cell.rowspan = Math.max(1, Math.abs(n) || 1)
      cell.valign = 'horizon'
      inner = trimNodes(lastArg(first))
      cell.nodes = inner
      continue
    }
    break
  }
  return cell
}

function alignCode(h: HAlign | undefined, v: VAlign | undefined): string | undefined {
  if (h && v && v !== 'top') return `${h} + ${v}`
  if (h) return h
  if (v) return v
  return undefined
}

/** Wrap cell content according to column formatting. */
function styleCell(children: Content[], col: Column | undefined, uniformSize: boolean): Content[] {
  let out = children
  if (!col) return out
  if (col.bold) out = [{ type: 'strong', children: out }]
  if (col.italic) out = [{ type: 'emphasis', children: out }]
  if (col.size && !uniformSize) out = [call('text', [arg(code(col.size), 'size')], [out])]
  if (col.noexhyphen) out = keepHyphenated(out)
  if (col.nohyphen) out = [call('text', [arg(code('false'), 'hyphenate')], [out])]
  return out
}

/**
 * Keep words with an explicit hyphen (`Re-implementation`) on one line, as TeX does with
 * `\exhyphenpenalty=10000` (Typst would break after the hyphen).
 */
function keepHyphenated(nodes: Content[]): Content[] {
  return nodes.flatMap((node): Content[] => {
    if (node.type === 'text') {
      return node.value
        .split(/(\S*\p{L}-\p{L}\S*)/u)
        .filter((part) => part !== '')
        .map((part) => (/\p{L}-\p{L}/u.test(part) ? call('box', [], [[text(part)]]) : text(part)))
    }
    if (node.type === 'paragraph' || node.type === 'strong' || node.type === 'emphasis')
      return [{ ...node, children: keepHyphenated(node.children) }]
    return [node]
  })
}

/** LaTeX's `2\tabcolsep`, which Typst puts inside the track as cell inset */
const COLUMN_PADDING = '12pt'

/** The padding of a column: `2\tabcolsep`, less the sides an `@{…}` takes away */
function columnPadding(c: Column): string {
  const halves = (c.noPadLeft ? 0 : 1) + (c.noPadRight ? 0 : 1)
  return halves === 2 ? COLUMN_PADDING : halves === 1 ? '6pt' : '0pt'
}

/**
 * Typst track sizes for the columns. LaTeX widths (`p{3cm}`, X columns) are the width of the
 * cell's text, with `\tabcolsep` added on both sides; a Typst track includes the cell inset,
 * so the padding is added back. tabularx sizes its X columns from what is left of the table
 * width after the fixed columns and all padding (`\hsize=0.8\hsize` scales one of them),
 * which is expressed as a ratio of the table width when there are no `auto` columns.
 * Otherwise the X columns stay `fr` tracks.
 */
function trackSizes(columns: Column[]): string[] {
  const fr = (w: string) => w.match(/^([\d.]+)fr$/)
  const isFixed = (w: string) => w !== 'auto' && !fr(w)
  const xs = columns.filter((c) => fr(c.width))
  const plus = (c: Column) => (columnPadding(c) === '0pt' ? '' : ` + ${columnPadding(c)}`)
  const sizes = columns.map((c) => (isFixed(c.width) ? `${c.width}${plus(c)}` : c.width))
  if (xs.length === 0 || columns.some((c) => c.width === 'auto')) return sizes
  const fixed = columns.filter((c) => isFixed(c.width)).map((c) => c.width)
  const halves = columns.reduce((n, c) => n + (c.noPadLeft ? 0 : 1) + (c.noPadRight ? 0 : 1), 0)
  const padding =
    halves === 2 * columns.length ? `${columns.length} * ${COLUMN_PADDING}` : `${halves} * 6pt`
  const taken = [padding, ...fixed].join(' - ')
  // the `\hsize` factors should add up to the number of X columns; when they don't, tabularx's
  // trial run overshoots and the table still ends up (close to) the full width
  const total = xs.reduce((sum, c) => sum + Number(fr(c.width)?.[1] ?? 1), 0)
  return columns.map((c, i) => {
    const m = fr(c.width)
    if (!m) return sizes[i]
    const factor = Math.round((Number(m[1]) / total) * 10000) / 10000
    return `${factor} * (100% - ${taken})${plus(c)}`
  })
}

export interface TableOptions {
  /** total width of the table (`tabularx{0.8\linewidth}`), Typst length/ratio */
  width?: string
}

/** Convert a tabular body + column spec into a `table(…)` call (possibly wrapped). */
export function buildTable(
  specNodes: Ast.Node[],
  bodyNodes: Ast.Node[],
  state: State,
  opts: TableOptions = {},
): Content {
  const spec = parseColumnSpec(specNodes, state)
  const ncols = Math.max(1, spec.columns.length)
  const rawRows = splitRows(bodyNodes, state)

  const sizes = new Set(spec.columns.map((c) => c.size ?? ''))
  const uniformSize = sizes.size === 1
  const tableSize = uniformSize ? [...sizes][0] : ''

  const items: Argument[] = []
  // occupied[r] = set of column indexes covered by a rowspan from above
  const occupied = new Map<number, Set<number>>()
  const isOccupied = (r: number, c: number) => occupied.get(r)?.has(c) ?? false
  let y = 0
  for (const raw of rawRows) {
    for (const rule of raw.rules) {
      if (rule.kind === 'hline') {
        items.push(
          arg(call('table.hline', [arg(code(String(y)), 'y'), arg(code(rule.stroke), 'stroke')])),
        )
      } else {
        items.push(
          arg(
            call('table.hline', [
              arg(code(String(y)), 'y'),
              arg(code(String(Math.max(0, rule.start - 1))), 'start'),
              arg(code(String(Math.min(ncols, rule.end))), 'end'),
              arg(code(rule.stroke), 'stroke'),
            ]),
          ),
        )
      }
    }
    // a "row" that is only rules (the last one, after the final \\)
    if (raw.cells.length === 1 && isBlank(raw.cells[0])) continue

    let col = 0
    const rowCells: Argument[] = []
    for (const cellNodes of raw.cells) {
      const cell = readCell(cellNodes, state)
      // a blank cell at a position covered by a \multirow above is its placeholder
      if (col < ncols && isOccupied(y, col)) {
        if (isBlank(cell.nodes) && cell.rowspan === 1) {
          col += cell.colspan
          continue
        }
        while (col < ncols && isOccupied(y, col)) col++
      }
      if (col >= ncols) {
        if (!isBlank(cellNodes))
          state.warn(`Table row ${y + 1} has more cells than columns; extra content dropped`)
        continue
      }
      const span = Math.min(cell.colspan, ncols - col)
      const column = spec.columns[col]
      state.labelContext.push('table')
      const children = styleCell(state.body(cell.nodes), column, uniformSize)
      state.labelContext.pop()
      if (cell.rowspan > 1) {
        for (let r = 1; r < cell.rowspan; r++) {
          const set = occupied.get(y + r) ?? new Set<number>()
          for (let c = col; c < col + span; c++) set.add(c)
          occupied.set(y + r, set)
        }
      }
      const valign =
        cell.valign ?? (column?.valign && column.valign !== 'top' ? column.valign : undefined)
      const align =
        cell.align || cell.valign
          ? alignCode(cell.align ?? column?.align ?? 'left', valign)
          : undefined
      // `@{}`: the cell has no padding on that side
      const noLeft = column?.noPadLeft
      const noRight = spec.columns[col + span - 1]?.noPadRight
      const inset =
        noLeft || noRight
          ? dict({
              left: noLeft ? code('0pt') : undefined,
              right: noRight ? code('0pt') : undefined,
            })
          : undefined
      if (span > 1 || cell.rowspan > 1 || align || inset) {
        rowCells.push(
          arg(
            call(
              'table.cell',
              [
                span > 1 ? named('colspan', code(String(span))) : undefined,
                cell.rowspan > 1 ? named('rowspan', code(String(cell.rowspan))) : undefined,
                align ? named('align', code(align)) : undefined,
                named('inset', inset),
              ],
              [children],
            ),
          ),
        )
      } else {
        rowCells.push(arg(content(children)))
      }
      col += span
    }
    // pad short rows so cells don't flow into the next row
    while (col < ncols) {
      if (!isOccupied(y, col)) rowCells.push(arg(content([])))
      col++
    }
    items.push(...rowCells)
    y++
  }

  const columnsValue: Value = arr(trackSizes(spec.columns).map(code))
  const alignValue: Value = arr(
    spec.columns.map((c) => code(alignCode(c.align, c.valign) ?? 'left')),
  )
  const vlineArgs = spec.vlines.map((x) =>
    arg(
      call('table.vline', [arg(code(String(x)), 'x'), arg(code(arrayRuleWidth(state)), 'stroke')]),
    ),
  )

  let table: Content = call('table', [
    arg(spec.columns.length ? columnsValue : code(String(ncols)), 'columns'),
    arg(alignValue, 'align'),
    arg(code('none'), 'stroke'),
    ...vlineArgs,
    ...items,
  ])
  if (tableSize) {
    table = call('text', [arg(code(tableSize), 'size')], [[table]])
  }
  if (opts.width && opts.width !== '100%') {
    table = call('block', [arg(code(opts.width), 'width')], [[table]])
  }
  return asBlock(table)
}

// ---------------------------------------------------------------------------
// Environments
// ---------------------------------------------------------------------------

const tabular: EnvironmentHandler = (node, state) => {
  const name = envName(node)
  let spec: Ast.Node[]
  let width: string | undefined
  if (name === 'tabular' || name === 'longtable' || name === 'array') {
    const a = envArgs(node, 'o m')
    spec = a[1] ?? []
  } else {
    // tabularx / tabular* / tabulary: {width}[pos]{spec}
    const a = envArgs(node, 'm o m')
    width = convertLength(rawText(a[0]))
    spec = a[2] ?? []
  }
  return buildTable(spec, node.content, state, { width })
}

/** threeparttable notes: `\item[a] text` → small paragraphs with superscript markers */
const tablenotes: EnvironmentHandler = (node, state) => {
  const notes: Content[] = []
  const flush = (label: Ast.Node[] | null, body: Ast.Node[]) => {
    const children = state.inline(body)
    if (!children.length && !label) return
    if (notes.length) notes.push({ type: 'linebreak' })
    if (label) notes.push(call('super', [], [state.inline(label)]), text(' '))
    notes.push(...children)
  }
  for (const n of node.content) {
    if (n.type === 'macro' && n.content === 'item') {
      const a = args(n)
      const label = (n.args ?? []).find((x) => x.openMark === '[')?.content ?? null
      flush(label, a[a.length - 1] ?? [])
    }
  }
  return asBlock(
    call(
      'block',
      [arg(code('0.5em'), 'above')],
      [[call('text', [arg(code(fontSizes.footnotesize), 'size')], [notes])]],
    ),
  )
}

export const tableEnvironments: Record<string, EnvironmentHandler> = {
  tabular,
  'tabular*': tabular,
  tabularx: tabular,
  tabulary: tabular,
  longtable: tabular,
  tablenotes,
  threeparttable: (node, state) => {
    envArgs(node, 'o')
    return state.flow(node.content)
  },
}

export { lastArg }
