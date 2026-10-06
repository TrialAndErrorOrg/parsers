/**
 * Constructors for typast nodes, so code that builds trees reads like the Typst it produces.
 */
import type {
  Arg,
  ArrayExpr,
  Auto,
  BinOp,
  Binary,
  Bool,
  CodeBlock,
  CodeContent,
  Comment,
  ContentBlock,
  Dict,
  Emph,
  EnumItem,
  Equation,
  Expr,
  FieldAccess,
  Float,
  FuncCall,
  Heading,
  Ident,
  Int,
  Keyed,
  Label,
  LetBinding,
  Linebreak,
  Link,
  ListItem,
  MarkupContent,
  MathContent,
  ModuleImport,
  Named,
  None,
  Numeric,
  Parbreak,
  Pattern,
  Raw,
  Ref,
  Root,
  SetRule,
  ShowRule,
  Space,
  Spread,
  Str,
  Strong,
  TermItem,
  Text,
  Typst,
  UnOp,
  Unary,
  Unit,
} from 'typast'

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

type Many = MarkupContent | MarkupContent[] | null | undefined | false

function flat(items: Many[]): MarkupContent[][] {
  return items
    .filter((i): i is MarkupContent | MarkupContent[] => !!i)
    .map((i) => (Array.isArray(i) ? i : [i]))
    .filter((i) => i.length > 0)
}

/** Join blocks (single nodes or sequences) with paragraph breaks. Empty ones are dropped. */
export function blocks(...items: Many[]): MarkupContent[] {
  return flat(items).flatMap((group, i) => (i ? [parbreak(), ...group] : group))
}

/** Join items (single nodes or sequences) with newlines. Empty ones are dropped. */
export function lines(...items: Many[]): MarkupContent[] {
  return flat(items).flatMap((group, i) => (i ? [space(true), ...group] : group))
}

export const root = (...children: MarkupContent[]): Root => ({ type: 'root', children })

// ---------------------------------------------------------------------------
// Markup
// ---------------------------------------------------------------------------

export const text = (value: string): Text => ({ type: 'text', value })

/** A space, or with `newline` a line break in the source (still a space in the output). */
export const space = (newline = false): Space => ({ type: 'space', value: newline ? '\n' : ' ' })

export const parbreak = (): Parbreak => ({ type: 'parbreak' })

export const linebreak = (): Linebreak => ({ type: 'linebreak' })

export const strong = (...children: MarkupContent[]): Strong => ({ type: 'strong', children })

export const emph = (...children: MarkupContent[]): Emph => ({ type: 'emph', children })

export const raw = (
  value: string,
  { lang, block = false }: { lang?: string; block?: boolean } = {},
): Raw => (lang === undefined ? { type: 'raw', value, block } : { type: 'raw', value, lang, block })

export const link = (url: string): Link => ({ type: 'link', url })

export const label = (name: string): Label => ({ type: 'label', name })

export const ref = (target: string, supplement?: MarkupContent[]): Ref =>
  supplement ? { type: 'ref', target, supplement: content(...supplement) } : { type: 'ref', target }

export const heading = (depth: number, ...children: MarkupContent[]): Heading => ({
  type: 'heading',
  depth,
  children,
})

export const listItem = (...children: MarkupContent[]): ListItem => ({ type: 'listItem', children })

export const enumItem = (children: MarkupContent[], number?: number): EnumItem =>
  number === undefined ? { type: 'enumItem', children } : { type: 'enumItem', number, children }

export const termItem = (term: MarkupContent[], ...children: MarkupContent[]): TermItem => ({
  type: 'termItem',
  term,
  children,
})

/** An equation; a string is Typst math source, kept verbatim. */
export const equation = (body: string | MathContent[], block = false): Equation => ({
  type: 'equation',
  block,
  children: typeof body === 'string' ? (body ? [typst(body)] : []) : body,
})

export const comment = (value: string, block = false): Comment => ({
  type: 'comment',
  value,
  block,
})

/** Verbatim Typst source. */
export const typst = (value: string): Typst => ({ type: 'typst', value })

// ---------------------------------------------------------------------------
// Code: literals
// ---------------------------------------------------------------------------

export const ident = (name: string): Ident => ({ type: 'ident', name })

export const none = (): None => ({ type: 'none' })

export const auto = (): Auto => ({ type: 'auto' })

export const bool = (value: boolean): Bool => ({ type: 'bool', value })

export const int = (value: number): Int => ({ type: 'int', value })

export const float = (value: number): Float => ({ type: 'float', value })

export const numeric = (value: number, unit: Unit): Numeric => ({ type: 'numeric', value, unit })

export const str = (value: string): Str => ({ type: 'str', value })

/** `a.b.c` as an identifier or field accesses. */
export function path(name: string): Ident | FieldAccess {
  const [first, ...rest] = name.split('.')
  let node: Ident | FieldAccess = ident(first)
  for (const field of rest) node = { type: 'fieldAccess', target: node, field }
  return node
}

const UNITS = new Set(['pt', 'mm', 'cm', 'in', 'rad', 'deg', 'em', 'fr', '%'])
const NUMBER = String.raw`(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?`

/**
 * Typst code source as a node: literals (`none`, `auto`, `true`, `12`, `1.5`, `2cm`, `50%`),
 * identifiers and dotted paths (`left`, `jote.box`) become real nodes, anything else a verbatim
 * {@link Typst} node.
 */
export function code(source: string): Expr {
  const s = source.trim()
  if (s === 'none') return none()
  if (s === 'auto') return auto()
  if (s === 'true' || s === 'false') return bool(s === 'true')
  if (new RegExp(`^${NUMBER}$`, 'i').test(s)) {
    const value = Number(s)
    return /^\d+$/.test(s) && Number.isSafeInteger(value) ? int(value) : float(value)
  }
  const unit = new RegExp(`^(${NUMBER})(pt|mm|cm|in|rad|deg|em|fr|%)$`, 'i').exec(s)
  if (unit && UNITS.has(unit[2])) return numeric(Number(unit[1]), unit[2] as Unit)
  if (/^[\p{XID_Start}_][\p{XID_Continue}-]*(\.[\p{XID_Start}_][\p{XID_Continue}-]*)*$/u.test(s)) {
    return path(s)
  }
  return typst(s)
}

/**
 * A JavaScript value as a Typst expression: strings, numbers, booleans, `null` (`none`), arrays
 * and plain objects (dictionaries). Nodes are passed through; `undefined` entries are dropped.
 */
export function value(v: unknown): Expr {
  if (v === null) return none()
  if (typeof v === 'string') return str(v)
  if (typeof v === 'boolean') return bool(v)
  if (typeof v === 'number') return Number.isInteger(v) ? int(v) : float(v)
  if (Array.isArray(v)) return array(...v.filter((x) => x !== undefined).map(value))
  if (typeof v === 'object' && v && 'type' in v) return v as Expr
  if (typeof v === 'object' && v) return dict(v as Record<string, unknown>)
  return none()
}

// ---------------------------------------------------------------------------
// Code: collections and calls
// ---------------------------------------------------------------------------

export const content = (...children: MarkupContent[]): ContentBlock => ({
  type: 'contentBlock',
  children,
})

export const codeBlock = (...children: CodeContent[]): CodeBlock => ({
  type: 'codeBlock',
  children,
})

export const array = (...items: (Expr | Spread)[]): ArrayExpr => ({ type: 'array', items })

/** A dictionary from named pairs, or from an object (`undefined` values are dropped). */
export function dict(items: (Named | Keyed | Spread)[] | Record<string, unknown>): Dict {
  if (Array.isArray(items)) return { type: 'dict', items }
  return {
    type: 'dict',
    items: Object.entries(items)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => (isIdentifierLike(k) ? named(k, value(v)) : keyed(str(k), value(v)))),
  }
}

const KEYWORDS = new Set([
  'none',
  'auto',
  'true',
  'false',
  'not',
  'and',
  'or',
  'let',
  'set',
  'show',
  'context',
  'if',
  'else',
  'for',
  'in',
  'while',
  'break',
  'continue',
  'return',
  'import',
  'include',
  'as',
  '_',
])

/** Can `name` be written bare, as an identifier (`jote-box`, `_x`, not `none` or `_`)? */
export function isIdentifierLike(name: string): boolean {
  return /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(name) && !KEYWORDS.has(name)
}

export const named = (name: string, expr: Expr | Pattern): Named => ({ type: 'named', name, expr })

export const keyed = (key: Expr, expr: Expr): Keyed => ({ type: 'keyed', key, expr })

export const spread = (expr: Expr): Spread => ({ type: 'spread', expr })

/**
 * `call('figure', [named('placement', none())], [body])`: a function call. A string callee may be
 * a dotted path (`table.cell`); each trailing list of markup becomes a content block argument
 * (`[…]` after the parentheses). Falsy arguments are dropped, which keeps optional arguments
 * free of conditionals.
 */
export function call(
  callee: string | Expr,
  args: (Arg | null | undefined | false)[] = [],
  ...trailing: MarkupContent[][]
): FuncCall {
  return {
    type: 'funcCall',
    callee: typeof callee === 'string' ? path(callee) : callee,
    args: [...args.filter((a): a is Arg => !!a), ...trailing.map((t) => content(...t))],
    trailing: trailing.length,
  }
}

export const unary = (op: UnOp, expr: Expr): Unary => ({ type: 'unary', op, expr })

export const binary = (op: BinOp, lhs: Expr, rhs: Expr): Binary => ({
  type: 'binary',
  op,
  lhs,
  rhs,
})

// ---------------------------------------------------------------------------
// Code: statements
// ---------------------------------------------------------------------------

export const set = (
  target: string | Expr,
  args: (Arg | null | undefined | false)[],
  condition?: Expr,
): SetRule => ({
  type: 'setRule',
  target: typeof target === 'string' ? path(target) : target,
  args: args.filter((a): a is Arg => !!a),
  ...(condition ? { condition } : {}),
})

export const show = (selector: Expr | undefined, transform: Expr): ShowRule =>
  selector ? { type: 'showRule', selector, transform } : { type: 'showRule', transform }

/** `import "source": a, b`, `import "source": *` (`'*'`), or a bare import (no items). */
export function moduleImport(source: string | Expr, imports?: '*' | string[]): ModuleImport {
  const node: ModuleImport = {
    type: 'moduleImport',
    source: typeof source === 'string' ? str(source) : source,
  }
  if (imports === '*') node.imports = '*'
  else if (imports?.length) {
    node.imports = imports.map((name) => ({ type: 'importItem', path: name.split('.') }))
  }
  return node
}

export const letBinding = (pattern: string | Pattern, init?: Expr): LetBinding => ({
  type: 'letBinding',
  pattern: typeof pattern === 'string' ? ident(pattern) : pattern,
  ...(init ? { init } : {}),
})
