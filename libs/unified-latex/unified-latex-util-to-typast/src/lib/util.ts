import type * as Ast from '@unified-latex/unified-latex-types'
import { gobbleArguments } from '@unified-latex/unified-latex-util-arguments'
import { printRaw } from '@unified-latex/unified-latex-util-print-raw'

export { printRaw }

/** Name of an environment (unified-latex 1.3 stores math environment names as a string node). */
export function envName(node: Ast.Environment | { env: unknown }): string {
  const env = (node as { env: unknown }).env
  if (typeof env === 'string') return env
  if (env && typeof env === 'object' && 'content' in env) return String((env as Ast.String).content)
  return printRaw(env as Ast.Node)
}

/**
 * The arguments of a macro/environment as arrays of nodes; `null` for an omitted optional
 * argument. Positional, in signature order.
 */
export function args(node: Ast.Macro | Ast.Environment): (Ast.Node[] | null)[] {
  return (node.args ?? []).map((a) =>
    a.openMark === '' && a.closeMark === '' && a.content.length === 0 ? null : a.content,
  )
}

/**
 * Like {@link args}, but if the environment's arguments weren't attached by the parser, gobble
 * them from the start of its content first (mutating the node).
 */
export function envArgs(node: Ast.Environment, signature: string): (Ast.Node[] | null)[] {
  if (!node.args || node.args.length === 0) {
    const content = [...node.content]
    // skip leading whitespace so `\begin{x} [opt]` is not mistaken for no-arg
    let start = 0
    while (start < content.length && content[start].type === 'whitespace') start++
    const { args: gobbled, nodesRemoved } = gobbleArguments(content.slice(start), signature)
    if (nodesRemoved > 0) {
      node.args = gobbled
      node.content = content.slice(start + nodesRemoved)
    } else {
      node.args = gobbled
    }
  }
  return args(node)
}

/** The last (usually the "main") mandatory argument. */
export function lastArg(node: Ast.Macro | Ast.Environment): Ast.Node[] {
  const a = args(node)
  for (let i = a.length - 1; i >= 0; i--) {
    const arg = node.args?.[i]
    if (arg && arg.openMark === '{') return a[i] ?? []
  }
  return a[a.length - 1] ?? []
}

/** Whether a starred variant was used: `\section*` is parsed as a `*` first argument. */
export function isStarred(node: Ast.Macro): boolean {
  const first = node.args?.[0]
  return !!first && first.content.length === 1 && printRaw(first.content) === '*'
}

/** Plain text of nodes, with groups unwrapped and a few common escapes resolved. */
export function plainText(nodes: Ast.Node[] | null | undefined): string {
  if (!nodes) return ''
  let out = ''
  for (const node of nodes) {
    switch (node.type) {
      case 'string':
        out += node.content
        break
      case 'whitespace':
        out += ' '
        break
      case 'group':
        out += plainText(node.content)
        break
      case 'macro': {
        const simple: Record<string, string> = {
          '&': '&',
          '%': '%',
          _: '_',
          '#': '#',
          $: '$',
          '{': '{',
          '}': '}',
          ' ': ' ',
          '~': '~',
          textendash: '–',
          textemdash: '—',
        }
        if (node.content in simple) out += simple[node.content]
        else if (node.args) out += plainText(lastArg(node))
        break
      }
      case 'inlinemath':
        out += printRaw(node.content)
        break
      case 'comment':
        break
      default:
        if ('content' in node && Array.isArray(node.content)) out += plainText(node.content)
        else out += printRaw(node)
    }
  }
  return out.replace(/~/g, '\u00A0')
}

/** Raw source of nodes with whitespace collapsed. */
export function rawText(nodes: Ast.Node[] | null | undefined): string {
  if (!nodes) return ''
  return printRaw(nodes).replace(/\s+/g, ' ').trim()
}

/** Split a node list on a top-level separator string (`,`, `&`, …). */
export function splitOn(nodes: Ast.Node[], sep: string): Ast.Node[][] {
  const parts: Ast.Node[][] = [[]]
  for (const node of nodes) {
    if (node.type === 'string' && node.content === sep) parts.push([])
    else parts[parts.length - 1].push(node)
  }
  return parts
}

/** Trim whitespace/parbreak/comment nodes from both ends. */
export function trimNodes(nodes: Ast.Node[]): Ast.Node[] {
  const isWs = (n: Ast.Node) =>
    n.type === 'whitespace' || n.type === 'parbreak' || n.type === 'comment'
  let start = 0
  let end = nodes.length
  while (start < end && isWs(nodes[start])) start++
  while (end > start && isWs(nodes[end - 1])) end--
  return nodes.slice(start, end)
}

/**
 * Parse a pgfkeys-ish option list (`width=0.5\linewidth, alt={…}, keepaspectratio`) into a map
 * from key to the value's nodes (`[]` for a bare key).
 */
export function parseKeyVals(nodes: Ast.Node[] | null | undefined): Map<string, Ast.Node[]> {
  const result = new Map<string, Ast.Node[]>()
  if (!nodes) return result
  for (const part of splitOn(nodes, ',')) {
    const trimmed = trimNodes(part)
    if (trimmed.length === 0) continue
    const eq = trimmed.findIndex((n) => n.type === 'string' && n.content === '=')
    if (eq === -1) {
      result.set(rawText(trimmed), [])
      continue
    }
    const key = rawText(trimmed.slice(0, eq))
    let value = trimNodes(trimmed.slice(eq + 1))
    if (value.length === 1 && value[0].type === 'group') value = value[0].content
    result.set(key, value)
  }
  return result
}

const LENGTH_UNITS = new Set(['pt', 'mm', 'cm', 'in', 'em'])

/**
 * Convert a LaTeX length to a Typst length/ratio expression, or `undefined` if it can't be
 * expressed. `0.5\linewidth` → `50%`, `3cm` → `3cm`, `2ex` → `1em`, `\baselineskip` → `1.2em`.
 */
export function convertLength(raw: string): string | undefined {
  const s = raw.replace(/\s+/g, '').replace(/^\{(.*)\}$/, '$1')
  if (!s) return undefined
  const rel = s.match(
    /^(-?[\d.]*)\\(linewidth|textwidth|columnwidth|hsize|paperwidth|textheight|paperheight)$/,
  )
  if (rel) {
    const factor = rel[1] === '' ? 1 : rel[1] === '-' ? -1 : Number(rel[1])
    if (Number.isNaN(factor)) return undefined
    return `${round(factor * 100)}%`
  }
  const named = s.match(
    /^(-?[\d.]*)\\(baselineskip|topsep|parskip|itemsep|parsep|bigskipamount|medskipamount|smallskipamount|fill)$/,
  )
  if (named) {
    const factor = named[1] === '' ? 1 : named[1] === '-' ? -1 : Number(named[1])
    const base: Record<string, string> = {
      baselineskip: '1.2em',
      // size10.clo's \@listi: \topsep = 8pt plus 2pt minus 4pt
      topsep: '0.8em',
      parskip: '0.5em',
      itemsep: '0.3em',
      parsep: '0.3em',
      bigskipamount: '1em',
      medskipamount: '0.5em',
      smallskipamount: '0.25em',
      fill: '1fr',
    }
    const m = base[named[2]].match(/^(\d+(?:\.\d+)?)([a-z%]*)$/)
    if (!m) return undefined
    return `${round(factor * Number(m[1]))}${m[2]}`
  }
  const abs = s.match(/^(-?(?:\d+(?:\.\d+)?|\.\d+))([a-z]+)$/)
  if (abs) {
    const [, n, unit] = abs
    if (LENGTH_UNITS.has(unit)) return `${Number(n)}${unit}`
    if (unit === 'ex') return `${round(Number(n) / 2)}em`
    if (unit === 'bp') return `${Number(n)}pt`
    if (unit === 'pc') return `${round(Number(n) * 12)}pt`
    if (unit === 'mu') return `${round(Number(n) / 18)}em`
  }
  if (s === '\\fill' || s === '\\stretch{1}') return '1fr'
  return undefined
}

export function round(n: number): number {
  return Math.round(n * 1000) / 1000
}

/** Typst label names: letters, digits, `_`, `-`, `:`, `.` */
export function labelName(raw: string): string {
  return raw.trim().replace(/[^\p{L}\p{N}_\-:.]/gu, '-')
}

export function isValidLabel(name: string): boolean {
  return /^[\p{L}\p{N}_\-:.]+$/u.test(name) && !/[.:]$/.test(name)
}

/** xcolor names the converter can map to Typst colours (the jote* ones come from the template). */
const COLORS: Record<string, string> = {
  black: 'black',
  gray: 'gray',
  red: 'red',
  blue: 'blue',
  green: 'green',
  orange: 'orange',
  purple: 'purple',
  white: 'white',
  yellow: 'yellow',
  navy: 'navy',
  teal: 'teal',
  maroon: 'maroon',
  joteorange: 'joteorange',
  jotedark: 'jotedark',
  joteOrangeLight: 'jote-orange-light',
  lightblack: 'lightblack',
  betterlightblack: 'betterlightblack',
  darklightblack: 'darklightblack',
}

/** The Typst expression for an xcolor colour name, if known. */
export function typstColor(name: string): string | undefined {
  return COLORS[name.trim()]
}
