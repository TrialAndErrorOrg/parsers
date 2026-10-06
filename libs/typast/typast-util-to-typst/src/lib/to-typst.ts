import type {
  Arg,
  BinOp,
  Closure,
  Comment,
  ContentBlock,
  EnumItem,
  Equation,
  Expr,
  FuncCall,
  Heading,
  ImportItem,
  Link,
  ListItem,
  MarkupContent,
  MathArg,
  MathAttach,
  MathContent,
  Raw,
  Ref,
  Root,
  Strong,
  Emph,
  TermItem,
  TypastNode,
} from 'typast'
import { codeTypes, statementTypes } from 'typast'

import {
  escapeBlockComment,
  escapeMarkup,
  escapeString,
  hasNewline,
  isAlnum,
  isIdContinue,
  isIdStart,
  isIdentifier,
  isLabelChar,
  normalizeNewlines,
  normalizeText,
  sanitizeLabel,
} from './escape.js'

export interface Options {
  /**
   * One level of indentation: inside content blocks, code blocks, argument lists and list items.
   * @default '  '
   */
  indent?: string
  /**
   * Argument lists, arrays and dictionaries longer than this are broken over several lines.
   * @default 80
   */
  lineWidth?: number
}

/**
 * Stands in for a newline inside inline raw text and verbatim source until the end, so indenting
 * nested lines leaves their content alone. A lone surrogate: no valid text has one. (Block
 * comments are indented with what surrounds them: a line after a comment that is not indented
 * would end a list item.)
 */
const KEPT_NEWLINE = '\uDBFF'

function keepNewlines(s: string): string {
  return normalizeNewlines(s).replace(/\n/g, KEPT_NEWLINE)
}

interface State {
  indent: string
  lineWidth: number
  /** Inside a heading or term: a newline would end the element */
  singleLine: boolean
  /** Inside a term's term: `:` ends the term */
  escapeColon: boolean
  /** Inside `*…*` */
  inStrong: boolean
  /** Inside `_…_` */
  inEmph: boolean
}

/**
 * Serialize a `typast` tree (or any node of one, or a list of markup nodes) to Typst source.
 *
 * The output follows the tree: paragraphs are where the tree has `parbreak`s, spaces where it
 * has `space`s. Text is escaped so it renders literally. Code expressions get a `#` in markup
 * and math, and parentheses where operator precedence needs them. Indentation inside list items
 * and blocks is the serializer's own (a `space`'s newline is kept, its indentation is not).
 */
export function toTypst(tree: TypastNode | MarkupContent[], options: Options = {}): string {
  const st: State = {
    indent: options.indent ?? '  ',
    lineWidth: options.lineWidth ?? 80,
    singleLine: false,
    escapeColon: false,
    inStrong: false,
    inEmph: false,
  }
  return render(tree, st).replaceAll(KEPT_NEWLINE, '\n')
}

function render(tree: TypastNode | MarkupContent[], st: State): string {
  if (Array.isArray(tree)) return markup(tree, st)
  switch (tree.type) {
    case 'root': {
      const out = markup((tree as Root).children, st)
      return out && !out.endsWith('\n') ? out + '\n' : out
    }
    case 'named':
    case 'keyed':
    case 'spread':
    case 'underscore':
    case 'destructuring':
    case 'importItem':
      return code(tree, st)
    default:
      if (isCode(tree)) return code(tree as Expr, st)
      if (isMath(tree)) return math([tree as MathContent], st)
      return markup([tree as MarkupContent], st)
  }
}

// ---------------------------------------------------------------------------
// Classification
// ---------------------------------------------------------------------------

function isCode(node: TypastNode): boolean {
  return codeTypes.has(node.type)
}

function isMath(node: TypastNode): boolean {
  return node.type === 'math' || node.type.startsWith('math')
}

/** Expressions that may directly follow `#` (Typst's `Expr::hash`). */
const HASHABLE = new Set([
  'ident',
  'none',
  'auto',
  'bool',
  'int',
  'float',
  'numeric',
  'str',
  'codeBlock',
  'contentBlock',
  'array',
  'dict',
  'parenthesized',
  'fieldAccess',
  'funcCall',
  'letBinding',
  'setRule',
  'showRule',
  'contextual',
  'conditional',
  'whileLoop',
  'forLoop',
  'moduleImport',
  'moduleInclude',
  'loopBreak',
  'loopContinue',
  'funcReturn',
])

/** Markup nodes that start at the beginning of a line and run to its end. */
const LINE_NODES = new Set(['heading', 'listItem', 'enumItem', 'termItem'])

function isNewlineSpace(node: TypastNode | undefined): boolean {
  return (
    !!node &&
    (node.type === 'parbreak' ||
      (node.type === 'space' && hasNewline((node as { value: string }).value)))
  )
}

// ---------------------------------------------------------------------------
// Writer
// ---------------------------------------------------------------------------

/**
 * Accumulates markup and tracks what escaping at node boundaries needs: whether we are at the
 * start of a line (block markers are live) and whether the last thing written was a
 * `#expression` (which would swallow a following `(`, `[`, `.field` or identifier character).
 */
class Writer {
  out = ''
  atLineStart: boolean
  afterHash = false
  private initialLast: string | undefined

  constructor({ atLineStart, lastChar }: { atLineStart: boolean; lastChar?: string }) {
    this.atLineStart = atLineStart
    this.initialLast = lastChar
  }

  get lastChar(): string | undefined {
    return this.out ? this.out[this.out.length - 1] : this.initialLast
  }

  /** Does the output end with `c` that is not escaped by a backslash? */
  endsWithUnescaped(c: string): boolean {
    if (!this.out.endsWith(c)) return false
    const backslashes = this.out.slice(0, -c.length).match(/\\*$/)?.[0].length ?? 0
    return backslashes % 2 === 0
  }

  write(s: string, { hash = false, nextChar }: { hash?: boolean; nextChar?: string } = {}) {
    if (!s) return
    if (this.afterHash && continuesExpression(this.out, s, nextChar)) {
      // `#emph[x];(y)`: the semicolon ends the embedded expression and is swallowed
      this.out += ';'
    }
    this.out += s
    this.afterHash = hash
    const nl = s.lastIndexOf('\n')
    const tail = nl >= 0 ? s.slice(nl + 1) : s
    if (/\S/.test(tail)) this.atLineStart = false
    else if (nl >= 0) this.atLineStart = true
  }
}

/**
 * Would `s`, written right after the `#expression` that ends `out`, continue that expression?
 * `#f()(…)`, `#f()[…]` are further calls, `#f().x` a field access, `#x-y` one identifier and a
 * leading `;` would be swallowed as the expression's terminator.
 */
function continuesExpression(out: string, s: string, nextChar?: string): boolean {
  const c = s[0]
  if (c === '(' || c === '[' || c === ';') return true
  if (c === '.') return isIdStart(s.length > 1 ? Array.from(s.slice(1))[0] : nextChar)
  return isIdContinue(out[out.length - 1]) && isIdContinue(Array.from(s)[0])
}

// ---------------------------------------------------------------------------
// Markup
// ---------------------------------------------------------------------------

/** Merge adjacent text nodes and drop empty ones, so text boundaries are real boundaries. */
function mergeText(nodes: MarkupContent[]): MarkupContent[] {
  const out: MarkupContent[] = []
  for (const node of nodes) {
    if (node.type === 'text') {
      if (!node.value) continue
      const prev = out[out.length - 1]
      if (prev && prev.type === 'text') {
        out[out.length - 1] = { ...prev, value: prev.value + node.value }
        continue
      }
    }
    out.push(node)
  }
  return out
}

const MARKUP_SHORTHANDS: Record<string, string> = {
  '…': '...',
  ' ': '~',
  '−': '-',
  '–': '--',
  '—': '---',
  '­': '-?',
}

/**
 * Best guess at the first character a node will emit. Only used for escaping decisions at node
 * boundaries, so it errs on the side of "dangerous" characters.
 */
function firstChar(node: MarkupContent | undefined): string | undefined {
  if (!node) return undefined
  switch (node.type) {
    case 'text':
      return Array.from(normalizeText(node.value))[0]
    case 'space':
      return ' '
    case 'parbreak':
      return '\n'
    case 'linebreak':
    case 'escape':
      return '\\'
    case 'shorthand':
      return (MARKUP_SHORTHANDS[node.value] ?? node.value)[0]
    case 'smartQuote':
      return node.double ? '"' : "'"
    case 'strong':
      return '*'
    case 'emph':
      return '_'
    case 'raw':
      return '`'
    case 'link':
      return node.url[0]
    case 'label':
      return '<'
    case 'ref':
      return '@'
    case 'heading':
      return '='
    case 'listItem':
      return '-'
    case 'enumItem':
      return '+'
    case 'termItem':
      return '/'
    case 'equation':
      return '$'
    case 'comment':
      return '/'
    case 'typst':
    case 'error':
      return Array.from(node.value)[0]
    default:
      return '#'
  }
}

interface MarkupOptions {
  atLineStart?: boolean
  lastChar?: string
  /** first character after the markup (`]` at the end of a content block) */
  endChar?: string
}

/** Render a markup sequence. */
function markup(nodes: MarkupContent[], st: State, options: MarkupOptions = {}): string {
  const w = new Writer({ atLineStart: options.atLineStart ?? true, lastChar: options.lastChar })
  writeMarkup(nodes, st, w, options.endChar)
  return w.out
}

function writeMarkup(nodes: MarkupContent[], st: State, w: Writer, endChar?: string) {
  const list = mergeText(nodes)
  for (let i = 0; i < list.length; i++) {
    const node = list[i]
    const next = list[i + 1]
    const nextChar = next ? firstChar(next) : endChar

    if (LINE_NODES.has(node.type) && !w.atLineStart) w.write('\n')

    switch (node.type) {
      case 'text':
        w.write(
          escapeMarkup(node.value, {
            atLineStart: w.atLineStart,
            prevChar: w.lastChar,
            nextChar,
            escapeColon: st.escapeColon,
          }),
          { nextChar },
        )
        break
      case 'space':
        if (hasNewline(node.value) && !st.singleLine) w.write('\n')
        else w.write(' ')
        break
      case 'parbreak':
        w.write(st.singleLine ? ' ' : '\n\n')
        break
      case 'linebreak':
        // at the end, `\` could escape what follows the markup (`]`, `*`)
        if (!next) w.write('#linebreak()', { hash: true })
        else if (next.type === 'space' || next.type === 'parbreak') w.write('\\')
        else w.write('\\ ')
        break
      case 'escape':
        w.write(escapeChar(node.value))
        break
      case 'shorthand': {
        const source = MARKUP_SHORTHANDS[node.value]
        // `-` is only a minus sign before a digit
        const ok = source && (source !== '-' || /\d/.test(nextChar ?? ''))
        w.write(ok ? source : node.value)
        break
      }
      case 'smartQuote':
        w.write(node.double ? '"' : "'")
        break
      case 'strong':
      case 'emph':
        writeDelimited(node, st, w, nextChar)
        break
      case 'raw':
        writeRaw(node, st, w)
        break
      case 'link':
        writeLink(node, w, nextChar)
        break
      case 'label':
        w.write(`<${sanitizeLabel(node.name)}>`)
        break
      case 'ref':
        writeRef(node, st, w, next, list[i + 2] ? firstChar(list[i + 2]) : endChar)
        break
      case 'heading':
        writeHeading(node, st, w)
        break
      case 'listItem':
      case 'enumItem':
        writeItem(node, st, w)
        break
      case 'termItem':
        writeTerm(node, st, w)
        break
      case 'equation':
        w.write(equation(node, st))
        break
      case 'comment':
        // After a list item, Typst measures a line's indentation after a leading comment
        // (`- a⏎/* c */b` continues the item): start such a line with an empty content block.
        if (node.block && w.atLineStart && next && !isNewlineSpace(next) && afterItem(list, i)) {
          w.write('#[]', { hash: true })
        }
        writeComment(node, st, w)
        break
      case 'error':
      case 'typst':
        w.write(keepNewlines(node.value), {
          hash: node.type === 'typst' && node.value.startsWith('#'),
        })
        break
      default:
        w.write(hashed(node as Expr, st), { hash: true, nextChar })
    }

    // Statements, line comments, headings and list items end at the end of the line.
    const endsLine =
      statementTypes.has(node.type) ||
      LINE_NODES.has(node.type) ||
      (node.type === 'comment' && !node.block && !st.singleLine)
    if (endsLine && next && !isNewlineSpace(next)) {
      if (statementTypes.has(node.type)) {
        // Typst drops the newline after a statement from the tree: put it back, or end the
        // statement with `;` when something follows on the same line
        if (next.type === 'space') {
          w.out += ';'
          w.afterHash = false
        } else {
          w.write('\n')
        }
      } else if (
        node.type === 'heading' &&
        (next.type === 'label' || (next.type === 'space' && list[i + 2]?.type === 'label'))
      ) {
        // `= Intro <intro>`: the label stays on the heading's line
      } else {
        w.write('\n')
        if (next.type === 'space') i++
      }
    }
  }
}

/** Is the last node before `i`, ignoring whitespace and comments, a list, enum or term item? */
function afterItem(nodes: MarkupContent[], i: number): boolean {
  for (let j = i - 1; j >= 0; j--) {
    const t = nodes[j].type
    if (t === 'space' || t === 'parbreak' || t === 'comment') continue
    return t === 'listItem' || t === 'enumItem' || t === 'termItem'
  }
  return false
}

/** `#expr`, parenthesized if Typst can't embed it directly. */
function hashed(node: Expr, st: State): string {
  const out = code(node, st)
  return HASHABLE.has(node.type) ? '#' + out : `#(${out})`
}

function escapeChar(c: string): string {
  const cp = c.codePointAt(0) ?? 0
  if (c === 'u' || /\s/.test(c) || cp < 0x20 || (cp >= 0x7f && cp <= 0x9f)) {
    return `\\u{${cp.toString(16)}}`
  }
  return '\\' + c
}

function writeDelimited(node: Strong | Emph, st: State, w: Writer, nextChar?: string) {
  const strong = node.type === 'strong'
  const delimiter = strong ? '*' : '_'
  const nested = strong ? st.inStrong : st.inEmph
  const children = node.children
  const canDelimit =
    !nested &&
    children.length > 0 &&
    !isAlnum(w.lastChar) &&
    !isAlnum(nextChar) &&
    !children.some((n) => n.type === 'parbreak' || LINE_NODES.has(n.type)) &&
    hasVisibleText(children)

  if (canDelimit) {
    w.write(delimiter)
    writeMarkup(
      children,
      { ...st, inStrong: st.inStrong || strong, inEmph: st.inEmph || !strong },
      w,
      delimiter,
    )
    w.write(delimiter)
    return
  }
  w.write('#' + (strong ? 'strong' : 'emph') + contentBlock(children, st), { hash: true })
}

function hasVisibleText(nodes: MarkupContent[]): boolean {
  return nodes.some((n) => {
    if (n.type === 'text') return normalizeText(n.value).trim() !== ''
    if (n.type === 'space' || n.type === 'parbreak') return false
    if ('children' in n && Array.isArray(n.children)) {
      return hasVisibleText(n.children as MarkupContent[])
    }
    return n.type !== 'label' && n.type !== 'comment'
  })
}

function writeRaw(node: Raw, st: State, w: Writer) {
  const { value, lang } = node
  const validLang = lang === undefined || /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(lang)

  if (!node.block) {
    // (an empty raw is `#raw("")`: two backticks next to more backticks would be a fence)
    if (!lang && value && !value.includes('`')) {
      w.write('`' + keepNewlines(value) + '`')
      return
    }
    const args = [escapeString(value)]
    if (lang) args.push(`lang: ${escapeString(lang)}`)
    w.write(`#raw(${args.join(', ')})`, { hash: true })
    return
  }

  if (st.singleLine || !validLang) {
    const args = [escapeString(value), 'block: true']
    if (lang) args.push(`lang: ${escapeString(lang)}`)
    w.write(`#raw(${args.join(', ')})`, { hash: true })
    return
  }

  const longest = Math.max(0, ...(value.match(/`+/g) ?? []).map((m) => m.length))
  const fence = '`'.repeat(Math.max(3, longest + 1))
  // nested, the block is indented as a whole, which Typst's dedenting undoes
  const body = value ? normalizeNewlines(value) + '\n' : ''
  w.write(`${fence}${lang ?? ''}\n${body}${fence}`)
}

function writeLink(node: Link, w: Writer, nextChar?: string) {
  // a bare link needs a scheme, and must not run into the following text
  const bare =
    /^https?:\/\/\S+$/.test(node.url) &&
    !/[.,;:!?'")\]]$/.test(node.url) &&
    (nextChar === undefined || /[\s\])]/.test(nextChar)) &&
    !isAlnum(w.lastChar)
  if (bare) w.write(node.url)
  else w.write(`#link(${escapeString(node.url)})`, { hash: true })
}

/**
 * `@target`, unless the following characters would be read as part of the target, in which
 * case `#ref(<target>)`.
 *
 * @param after first character after `next` (or after the sequence)
 */
function writeRef(
  node: Ref,
  st: State,
  w: Writer,
  next: MarkupContent | undefined,
  after?: string,
) {
  const target = sanitizeLabel(node.target)

  // Typst drops trailing `.` and `:` from a reference (`see @fig.`)
  let fallback = /[.:]$/.test(target)
  if (!fallback) {
    if (next && next.type === 'text') {
      const v = Array.from(normalizeText(next.value))
      let j = 0
      while (j < v.length && (v[j] === '.' || v[j] === ':')) j++
      // `@a.b` would be the reference `a.b`, `@a. b` is fine
      fallback = isIdContinue(j < v.length ? v[j] : after)
    } else if (!node.supplement) {
      fallback = isLabelChar(next ? firstChar(next) : after) || firstChar(next) === '['
    }
  }

  if (!fallback) {
    w.write('@' + target)
    if (node.supplement) w.write(contentBlock(node.supplement.children, st))
    return
  }
  const args = [`<${target}>`]
  if (node.supplement) args.push(`supplement: ${contentBlock(node.supplement.children, st)}`)
  w.write(`#ref(${args.join(', ')})`, { hash: true })
}

/** Can these nodes be written on a single line (a heading's or term's body)? */
function fitsOnALine(nodes: MarkupContent[]): boolean {
  return !nodes.some(
    (n) =>
      n.type === 'parbreak' ||
      LINE_NODES.has(n.type) ||
      (n.type === 'raw' && n.block) ||
      (n.type === 'comment' && !n.block),
  )
}

function writeHeading(node: Heading, st: State, w: Writer) {
  const depth = Math.max(1, Math.floor(node.depth || 1))
  if (!fitsOnALine(node.children)) {
    const args = depth === 1 ? '' : `(depth: ${depth})`
    w.write(`#heading${args}${contentBlock(node.children, st)}`, { hash: true })
    return
  }
  // after `= ` we are not at the start of a line: `= - x` is a heading "- x"
  const body = markup(
    node.children,
    { ...st, singleLine: true },
    {
      atLineStart: false,
      lastChar: ' ',
    },
  ).trim()
  w.write('='.repeat(depth) + (body ? ' ' + body : ''))
}

function writeItem(node: ListItem | EnumItem, st: State, w: Writer) {
  const marker =
    node.type === 'listItem' ? '-' : node.number !== undefined ? `${node.number}.` : '+'
  // continuation lines line up with the content
  const body = indentRest(itemBody(node.children, st), ' '.repeat(marker.length + 1))
  w.write(marker + ' ' + body)
}

/** The content of a list item or term description, after the marker. */
function itemBody(children: MarkupContent[], st: State): string {
  // the content after a list marker is at the start of a line: `- = x` is a heading
  const out = trimEnd(markup(children, { ...st, singleLine: false }, { atLineStart: true }))
  // an empty item followed by `]` would not be an item at all
  return out.replace(/^[ \t]+/, '') || '#[]'
}

function writeTerm(node: TermItem, st: State, w: Writer) {
  const term = fitsOnALine(node.term)
    ? markup(
        node.term,
        { ...st, singleLine: true, escapeColon: true },
        { atLineStart: true },
      ).trim()
    : `#[${markup(node.term, st)}]`
  w.write(`/ ${term}: ${indentRest(itemBody(node.children, st), st.indent)}`)
}

function writeComment(node: Comment, st: State, w: Writer) {
  if (node.block || st.singleLine) {
    // `//*` would be a line comment, `*/*` the end of a block comment
    if (w.endsWithUnescaped('/') || w.endsWithUnescaped('*')) w.write('#[]')
    let value = normalizeNewlines(node.value)
    if (st.singleLine) value = value.replace(/\n/g, ' ')
    // a comment is trivia: what follows it is still at the start of the line, if it was
    const atLineStart = w.atLineStart
    w.write(`/*${escapeBlockComment(value)}*/`)
    w.atLineStart = atLineStart
    return
  }
  if (w.lastChar !== undefined && !/\s/.test(w.lastChar)) w.write(' ')
  w.write('//' + normalizeNewlines(node.value).replace(/\n/g, ' '))
}

// ---------------------------------------------------------------------------
// Content blocks
// ---------------------------------------------------------------------------

/**
 * `[…]`: markup, at the start of a line. Content that starts on a line of its own (`[⏎…⏎]`) is
 * indented.
 */
function contentBlock(children: MarkupContent[], st: State): string {
  const inner: State = {
    ...st,
    inStrong: false,
    inEmph: false,
    escapeColon: false,
    singleLine: false,
  }
  const out = markup(children, inner, { atLineStart: true, endChar: ']' })
  return `[${out.startsWith('\n') ? indentRest(out, st.indent) : out}]`
}

// ---------------------------------------------------------------------------
// Math
// ---------------------------------------------------------------------------

const MATH_SHORTHANDS: Record<string, string> = {
  '…': '...',
  '−': '-',
  '∗': '*',
  '∼': '~',
  '≠': '!=',
  '≔': ':=',
  '⩴': '::=',
  '≕': '=:',
  '≪': '<<',
  '⋘': '<<<',
  '≫': '>>',
  '⋙': '>>>',
  '≤': '<=',
  '≥': '>=',
  '→': '->',
  '⟶': '-->',
  '↦': '|->',
  '↣': '>->',
  '↠': '->>',
  '←': '<-',
  '⟵': '<--',
  '↢': '<-<',
  '↞': '<<-',
  '↔': '<->',
  '⟷': '<-->',
  '⇝': '~>',
  '⟿': '~~>',
  '⇜': '<~',
  '⬳': '<~~',
  '⇒': '=>',
  '⤇': '|=>',
  '⟹': '==>',
  '⟸': '<==',
  '⇔': '<=>',
  '⟺': '<==>',
  '⟦': '[|',
  '⟧': '|]',
  '‖': '||',
}

function equation(node: Equation, st: State): string {
  let body = math(node.children, st)
  if (!node.block || st.singleLine) body = body.replace(/\s*\n\s*/g, ' ')
  if (node.block) return body ? `$ ${body} $` : '$ $'
  // `$ x$` would be a block equation
  return `$${body.trim()}$`
}

function math(nodes: MathContent[], st: State): string {
  let out = ''
  nodes.forEach((node, i) => {
    const s = mathNode(node, st)
    // `#x` followed by math that would continue the expression
    const prev = nodes[i - 1]
    if (prev && prev.type !== 'str' && codeTypes.has(prev.type) && /^[([.\p{L}\d_-]/u.test(s)) {
      out += ';'
    }
    out += s
  })
  return out
}

function mathNode(node: MathContent, st: State): string {
  switch (node.type) {
    case 'math': {
      const inner = math(node.children, st)
      return node.deparenthesized ? `(${inner})` : inner
    }
    case 'mathText':
      return node.value
    case 'mathIdent':
      return node.name
    case 'mathFieldAccess':
      return `${mathNode(node.target, st)}.${node.field}`
    case 'mathShorthand':
      return MATH_SHORTHANDS[node.value] ?? node.value
    case 'mathAlignPoint':
      return '&'
    case 'mathCall':
      return `${mathNode(node.callee, st)}(${mathArgs(node.args, st)})`
    case 'mathDelimited':
      return mathNode(node.open, st) + math(node.children, st) + mathNode(node.close, st)
    case 'mathAttach':
      return mathAttach(node, st)
    case 'mathPrimes':
      return "'".repeat(node.count)
    case 'mathFrac':
      return `${operand(node.num, st)}/${operand(node.denom, st)}`
    case 'mathRoot':
      return (node.index === 4 ? '∜' : node.index === 3 ? '∛' : '√') + operand(node.radicand, st)
    case 'text':
      return escapeString(node.value)
    case 'space':
      return hasNewline(node.value) ? '\n' : ' '
    case 'linebreak':
      return '\\'
    case 'escape':
      return escapeChar(node.value)
    case 'equation':
      return equation(node, st)
    case 'comment':
      return node.block
        ? `/*${normalizeNewlines(escapeBlockComment(node.value))}*/`
        : `//${node.value}\n`
    case 'error':
    case 'typst':
      return keepNewlines(node.value)
    case 'str':
      return escapeString(node.value)
    default:
      return hashed(node as Expr, st)
  }
}

function mathAttach(node: MathAttach, st: State): string {
  let out = mathNode(node.base, st)
  if (node.primes) out += "'".repeat(node.primes)
  if (node.bottom) out += '_' + operand(node.bottom, st)
  if (node.top) out += '^' + operand(node.top, st)
  return out
}

/** An attachment, numerator, … : a group of several nodes needs parentheses. */
function operand(node: MathContent, st: State): string {
  if (node.type === 'math' && !node.deparenthesized && node.children.length > 1) {
    return `(${math(node.children, st)})`
  }
  return mathNode(node, st)
}

function endsInCode(node: MathContent): boolean {
  if (node.type === 'math') {
    const last = node.children[node.children.length - 1]
    return !!last && endsInCode(last)
  }
  return node.type !== 'str' && codeTypes.has(node.type)
}

function mathArgs(args: MathArg[], st: State): string {
  return args
    .map((arg, i) => {
      const value =
        arg.type === 'named'
          ? `${arg.name}: ${mathNode(arg.expr as MathContent, st)}`
          : arg.type === 'spread'
            ? `..${arg.expr ? mathNode(arg.expr as MathContent, st) : ''}`
            : mathNode(arg as MathContent, st)
      // a `;` right after `#code` ends the code: a row separator then needs a second one
      const sep = arg.semicolon
        ? endsInCode(arg as MathContent)
          ? ';;'
          : ';'
        : i < args.length - 1
          ? ','
          : ''
      return value + sep
    })
    .join(' ')
}

// ---------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------

const BINARY_PRECEDENCE: Record<BinOp, number> = {
  '*': 6,
  '/': 6,
  '+': 5,
  '-': 5,
  '==': 4,
  '!=': 4,
  '<': 4,
  '<=': 4,
  '>': 4,
  '>=': 4,
  in: 4,
  'not in': 4,
  and: 3,
  or: 2,
  '=': 1,
  '+=': 1,
  '-=': 1,
  '*=': 1,
  '/=': 1,
}

const RIGHT_ASSOCIATIVE = new Set<BinOp>(['=', '+=', '-=', '*=', '/='])

/**
 * Precedence of an expression as an operand: atoms (including `if`/`for`/`while`, whose bodies
 * are delimited) bind tightest, statements and closures loosest.
 */
function precedence(node: Expr): number {
  switch (node.type) {
    case 'binary':
      return BINARY_PRECEDENCE[node.op]
    case 'unary':
      return node.op === 'not' ? 4 : 7
    case 'closure':
    case 'letBinding':
    case 'destructAssignment':
    case 'setRule':
    case 'showRule':
    case 'contextual':
    case 'moduleImport':
    case 'moduleInclude':
    case 'funcReturn':
      return 0
    default:
      return 8
  }
}

function codeAt(node: Expr, st: State, min: number, rhs = false): string {
  const out = code(node, st)
  // `x = it => it`, `a + context b`: a closure or context expression extends to the end anyway
  if (rhs && (node.type === 'closure' || node.type === 'contextual')) return out
  return precedence(node) < min ? `(${out})` : out
}

/** An expression that is called or has a field accessed: it must be an atom. */
function postfixTarget(node: Expr, st: State): string {
  const atomic =
    node.type === 'ident' ||
    node.type === 'funcCall' ||
    node.type === 'fieldAccess' ||
    node.type === 'parenthesized' ||
    node.type === 'array' ||
    node.type === 'dict' ||
    node.type === 'str' ||
    node.type === 'codeBlock' ||
    node.type === 'contentBlock' ||
    node.type === 'raw' ||
    node.type === 'equation' ||
    node.type === 'label' ||
    node.type === 'numeric' ||
    node.type === 'bool' ||
    node.type === 'none' ||
    node.type === 'auto' ||
    node.type === 'conditional' ||
    node.type === 'whileLoop' ||
    node.type === 'forLoop' ||
    node.type === 'typst'
  const out = code(node, st)
  return atomic ? out : `(${out})`
}

function number(value: number): string {
  if (Number.isFinite(value)) return String(value)
  return value > 0 ? 'float.inf' : value < 0 ? '-float.inf' : 'float.nan'
}

function code(node: TypastNode, st: State): string {
  switch (node.type) {
    case 'ident':
      return node.name
    case 'none':
      return 'none'
    case 'auto':
      return 'auto'
    case 'bool':
      return String(node.value)
    case 'int':
      return String(Math.trunc(node.value))
    case 'float': {
      const s = number(node.value)
      return /^-?\d+$/.test(s) ? s + '.0' : s
    }
    case 'numeric':
      return number(node.value) + node.unit
    case 'str':
      return escapeString(node.value)
    case 'codeBlock':
      return codeBlock(node.children as TypastNode[], st)
    case 'contentBlock':
      return contentBlock(node.children, st)
    case 'parenthesized':
      return `(${code(node.expr, st)})`
    case 'array':
      return list(
        node.items.map((i) => code(i, st)),
        st,
        { singleTrailing: true },
      )
    case 'dict':
      if (!node.items.length) return '(:)'
      return list(
        node.items.map((i) => code(i, st)),
        st,
      )
    case 'named':
      // (a dictionary key that is not an identifier must be a string)
      return `${isIdentifier(node.name) ? node.name : escapeString(node.name)}: ${code(node.expr, st)}`
    case 'keyed':
      return `${code(node.key, st)}: ${code(node.expr, st)}`
    case 'spread':
      return '..' + (node.sink ?? (node.expr ? codeAt(node.expr, st, 8) : ''))
    case 'unary': {
      const p = node.op === 'not' ? 4 : 7
      return (node.op === 'not' ? 'not ' : node.op) + codeAt(node.expr, st, p, true)
    }
    case 'binary': {
      const p = BINARY_PRECEDENCE[node.op]
      const right = RIGHT_ASSOCIATIVE.has(node.op)
      return `${codeAt(node.lhs, st, right ? p + 1 : p)} ${node.op} ${codeAt(node.rhs, st, right ? p : p + 1, true)}`
    }
    case 'fieldAccess':
      return `${postfixTarget(node.target, st)}.${node.field}`
    case 'funcCall':
      return funcCall(node, st)
    case 'closure':
      return closure(node, st)
    case 'underscore':
      return '_'
    case 'destructuring':
      return list(
        node.items.map((i) => code(i, st)),
        st,
        { singleTrailing: true },
      )
    case 'letBinding': {
      const init = node.init
      if (
        init?.type === 'closure' &&
        init.name !== undefined &&
        node.pattern.type === 'ident' &&
        node.pattern.name === init.name
      ) {
        return `let ${init.name}${params(init, st)} = ${code(init.body, st)}`
      }
      return `let ${code(node.pattern, st)}` + (init ? ` = ${code(init, st)}` : '')
    }
    case 'destructAssignment':
      return `${code(node.pattern, st)} = ${code(node.value, st)}`
    case 'setRule':
      return (
        `set ${postfixTarget(node.target, st)}${argList(node.args, st)}` +
        (node.condition ? ` if ${code(node.condition, st)}` : '')
      )
    case 'showRule':
      return node.selector
        ? `show ${code(node.selector, st)}: ${code(node.transform, st)}`
        : `show: ${code(node.transform, st)}`
    case 'contextual':
      return `context ${code(node.body, st)}`
    case 'conditional': {
      let out = `if ${code(node.condition, st)} ${block(node.ifBody, st)}`
      if (node.elseBody) {
        out +=
          node.elseBody.type === 'conditional'
            ? ` else ${code(node.elseBody, st)}`
            : ` else ${block(node.elseBody, st)}`
      }
      return out
    }
    case 'whileLoop':
      return `while ${code(node.condition, st)} ${block(node.body, st)}`
    case 'forLoop':
      return `for ${code(node.pattern, st)} in ${code(node.iterable, st)} ${block(node.body, st)}`
    case 'moduleImport': {
      let out = `import ${code(node.source, st)}`
      if (node.newName) out += ` as ${node.newName}`
      if (node.imports === '*') out += ': *'
      else if (node.imports?.length) out += ': ' + node.imports.map(importItem).join(', ')
      return out
    }
    case 'importItem':
      return importItem(node)
    case 'moduleInclude':
      return `include ${code(node.source, st)}`
    case 'loopBreak':
      return 'break'
    case 'loopContinue':
      return 'continue'
    case 'funcReturn':
      return node.body ? `return ${code(node.body, st)}` : 'return'
    case 'comment':
      return node.block
        ? `/*${normalizeNewlines(escapeBlockComment(node.value))}*/`
        : `//${node.value}`
    case 'typst':
    case 'error':
      return keepNewlines(node.value)
    case 'root':
      return codeBlock(node.children as TypastNode[], st)
        .slice(1, -1)
        .trim()
    // markup that is also an expression in code
    case 'label':
      return `<${sanitizeLabel(node.name)}>`
    case 'equation':
      return equation(node, st)
    case 'raw':
      return markup([node], st)
    default:
      // markup or math in code: wrap it in a content block
      return contentBlock([node as MarkupContent], st)
  }
}

function importItem(node: ImportItem): string {
  return node.path.join('.') + (node.newName ? ` as ${node.newName}` : '')
}

/** A conditional's or loop's body must be a block. */
function block(node: Expr, st: State): string {
  if (node.type === 'codeBlock' || node.type === 'contentBlock') return code(node, st)
  return `{ ${code(node, st)} }`
}

function codeBlock(children: TypastNode[], st: State): string {
  if (!children.length) return '{}'
  const parts = children.map((c) => code(c, st))
  const single = parts.length === 1 && !parts[0].includes('\n') && children[0].type !== 'comment'
  if (single && parts[0].length + 4 <= st.lineWidth) return `{ ${parts[0]} }`
  return `{\n${indentAll(parts.join('\n'), st.indent)}\n}`
}

function closure(node: Closure, st: State): string {
  const only = node.params.length === 1 ? node.params[0] : undefined
  const head = only?.type === 'ident' ? only.name : params(node, st)
  return `${head} => ${code(node.body, st)}`
}

function params(node: Closure, st: State): string {
  return list(
    node.params.map((p) => code(p, st)),
    st,
  )
}

function funcCall(node: FuncCall, st: State): string {
  // trailing content blocks: `f(a)[b][c]`
  let split = node.args.length
  const min = node.trailing === undefined ? 0 : Math.max(0, node.args.length - node.trailing)
  while (split > min && node.args[split - 1].type === 'contentBlock') split--
  const inner = node.args.slice(0, split)
  const trailing = node.args.slice(split) as ContentBlock[]
  let out = postfixTarget(node.callee, st)
  if (inner.length || !trailing.length) out += argList(inner, st)
  return out + trailing.map((b) => contentBlock(b.children, st)).join('')
}

function argList(args: Arg[], st: State): string {
  return list(
    args.map((a) => code(a, st)),
    st,
  )
}

/** `(a, b)`, broken over several lines when long. */
function list(parts: string[], st: State, { singleTrailing = false } = {}): string {
  if (!parts.length) return '()'
  const oneLine = parts.join(', ')
  const trailing = singleTrailing && parts.length === 1 ? ',' : ''
  if (!oneLine.includes('\n') && oneLine.length <= st.lineWidth) {
    return `(${oneLine}${trailing})`
  }
  return `(\n${parts.map((p) => indentAll(p, st.indent) + ',').join('\n')}\n)`
}

/** Is this a valid identifier (for `named.name` / dictionary keys)? */
export { isIdentifier }

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function indentAll(s: string, indent: string): string {
  return s
    .split('\n')
    .map((l) => (l ? indent + l : l))
    .join('\n')
}

function indentRest(s: string, indent: string): string {
  const [first, ...rest] = s.split('\n')
  return [first, ...rest.map((l) => (l ? indent + l : l))].join('\n')
}

/** Trim trailing whitespace, unless that would turn a linebreak (`\ `) into an escape. */
function trimEnd(s: string): string {
  const trimmed = s.replace(/[ \t\n]+$/, '')
  if (trimmed === s) return s
  const backslashes = trimmed.match(/\\+$/)?.[0].length ?? 0
  if (backslashes % 2 === 1) return trimmed + ' '
  return trimmed
}
