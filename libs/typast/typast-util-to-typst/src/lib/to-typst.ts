import type {
  Argument,
  Comment,
  Content,
  ContentBlock,
  Emphasis,
  FunctionCall,
  Heading,
  Import,
  Let,
  List,
  ListItem,
  Math,
  Raw,
  Ref,
  Root,
  SetRule,
  ShowRule,
  Strong,
  TermItem,
  TypastNode,
  Value,
} from 'typast'

import {
  escapeBlockComment,
  escapeMarkup,
  escapeString,
  isAlnum,
  isIdContinue,
  isIdStart,
  isIdentifier,
  isLabelChar,
  normalizeNewlines,
  normalizeText,
  hasNewline,
  sanitizeLabel,
} from './escape.js'

export interface Options {
  /**
   * One level of indentation, used inside multi-line content blocks, argument
   * lists and list items.
   * @default '  '
   */
  indent?: string
  /**
   * Argument lists (and arrays/dictionaries) longer than this are broken over
   * several lines, one argument per line.
   * @default 80
   */
  lineWidth?: number
}

interface Context {
  indent: string
  lineWidth: number
  /** Inside a heading or term: a newline would end the element */
  singleLine: boolean
  /** Inside a term list's term: `:` ends the term */
  escapeColon: boolean
  /** Inside `*…*` */
  inStrong: boolean
  /** Inside `_…_` */
  inEmph: boolean
}

/**
 * Serialize a `typast` tree (or any node of one) to Typst source.
 *
 * Text is escaped so that it renders literally, no matter what characters it
 * contains. Calls get a leading `#` in markup and none in code.
 */
export function toTypst(
  tree: Root | Content | TypastNode | TypastNode[],
  options: Options = {},
): string {
  const ctx: Context = {
    indent: options.indent ?? '  ',
    lineWidth: options.lineWidth ?? 80,
    singleLine: false,
    escapeColon: false,
    inStrong: false,
    inEmph: false,
  }

  if (Array.isArray(tree)) {
    return renderContent(tree as Content[], ctx)
  }

  switch (tree.type) {
    case 'root': {
      const out = renderBlocks((tree as Root).children, ctx)
      return out ? out + '\n' : ''
    }
    case 'argument':
      return renderArgument(tree as Argument, ctx)
    case 'contentBlock':
    case 'string':
    case 'code':
    case 'array':
    case 'dict':
      return renderValue(tree as Value, ctx)
    default:
      return renderContent([tree as Content], ctx)
  }
}

// ---------------------------------------------------------------------------
// Classification
// ---------------------------------------------------------------------------

/** Nodes that can only live at block level (on their own line(s)). */
const BLOCK_ONLY = new Set([
  'paragraph',
  'heading',
  'list',
  'listItem',
  'termItem',
  'set',
  'show',
  'import',
  'let',
])

/** Nodes that make an implicit run of inline nodes a paragraph. */
const TEXTY = new Set(['text', 'strong', 'emphasis', 'ref', 'linebreak'])

function isTexty(node: Content): boolean {
  if (node.type === 'text') return normalizeText(node.value).trim() !== ''
  return TEXTY.has(node.type)
}

function isDisplay(node: Content): boolean {
  return (node.type === 'raw' || node.type === 'math') && !!node.block
}

/**
 * Should these nodes be laid out as blocks (on their own lines, separated by
 * blank lines) rather than as one run of inline markup? Yes if there is any
 * block-only node, or if display raw/math sits among other nodes without any
 * running text.
 */
function isBlockMode(nodes: Content[]): boolean {
  if (nodes.length === 1 && nodes[0].type === 'paragraph') return false
  if (nodes.some((n) => BLOCK_ONLY.has(n.type))) return true
  if (nodes.some(isTexty) || !nodes.some(isDisplay)) return false
  const significant = nodes.filter(
    (n) => n.type !== 'label' && n.type !== 'comment' && !(n.type === 'text' && !isTexty(n)),
  )
  return significant.length > 1
}

/** Render a list of nodes the way a content block would hold them. */
function renderContent(nodes: Content[], ctx: Context): string {
  if (isBlockMode(nodes)) return renderBlocks(nodes, ctx)
  const w = new Writer({ atLineStart: true })
  renderInline(unwrapParagraph(nodes), ctx, w)
  return trimStartSpaces(trimEndSafe(w.out))
}

function unwrapParagraph(nodes: Content[]): Content[] {
  if (nodes.length === 1 && nodes[0].type === 'paragraph') return nodes[0].children
  return nodes
}

// ---------------------------------------------------------------------------
// Writer for inline markup
// ---------------------------------------------------------------------------

/**
 * Accumulates inline markup and tracks the state needed to escape correctly
 * at node boundaries: whether we're at the start of a line (block markers are
 * live) and whether the last thing written was a `#expression` (which
 * would swallow a following `(`, `[` or `.field`).
 */
class Writer {
  out = ''
  atLineStart: boolean
  afterHash = false
  /** the last thing written was a line comment (`// …⏎`), maybe followed by whitespace */
  endsInLineComment = false
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

  /**
   * @param hash `s` is a `#expression`
   * @param nextChar what will be written after `s`, if known
   * @param trivia `s` is a comment: Typst treats it like whitespace
   * @param lineComment `s` is a line comment
   */
  write(
    s: string,
    {
      hash = false,
      nextChar,
      trivia = false,
      lineComment = false,
    }: { hash?: boolean; nextChar?: string; trivia?: boolean; lineComment?: boolean } = {},
  ) {
    if (!s) return
    if (this.afterHash && startsExpressionContinuation(s, nextChar)) {
      // `#emph[x];(y)` — the semicolon ends the embedded expression and is swallowed
      this.out += ';'
    }
    this.out += s
    // a comment also ends an embedded expression
    this.afterHash = hash

    if (trivia) this.endsInLineComment = lineComment
    else if (/\S/.test(s)) this.endsInLineComment = false

    if (trivia) {
      // a comment spanning lines puts what follows at the start of a line
      if (s.includes('\n')) this.atLineStart = true
      return
    }

    const nl = s.lastIndexOf('\n')
    const tail = nl >= 0 ? s.slice(nl + 1) : s
    if (/\S/.test(tail)) this.atLineStart = false
    else if (nl >= 0) this.atLineStart = true
  }
}

/**
 * Would `s`, written right after a `#expr`, continue that expression?
 * Typst parses `#f()(…)`, `#f()[…]` as further calls and `#f().x` as field
 * access; a leading `;` would also be swallowed as the expression terminator.
 */
function startsExpressionContinuation(s: string, nextChar?: string): boolean {
  const c = s[0]
  if (c === '(' || c === '[' || c === ';') return true
  if (c === '.') return isIdStart(s.length > 1 ? Array.from(s.slice(1))[0] : nextChar)
  return false
}

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

type BlockKind = 'block' | 'statement' | 'term' | 'list' | 'comment'

interface Block {
  kind: BlockKind
  text: string
  /** the text ends in a line comment (whose newline was trimmed) */
  lineComment?: boolean
}

/**
 * Render block-level content: paragraphs separated by blank lines, statements
 * and terms on consecutive lines. Runs of inline nodes become a paragraph.
 */
function renderBlocks(nodes: Content[], ctx: Context, { inItem = false } = {}): string {
  const blocks: Block[] = []
  let run: Content[] = []

  const attachLabel = (name: string) => {
    const label = `<${sanitizeLabel(name)}>`
    const prev = blocks[blocks.length - 1]
    if (!prev || prev.kind === 'comment') {
      blocks.push({ kind: 'block', text: label })
      return
    }
    // after `a // c` the label would be part of the comment: put it on the next line, where it
    // still attaches to what precedes it
    const lineComment =
      prev.lineComment ?? (prev.kind !== 'block' && /(?:^|\s)\/\/[^\n]*$/.test(prev.text))
    prev.text += (lineComment ? '\n' : ' ') + label
    prev.lineComment = false
  }

  const flush = () => {
    if (!run.length) return
    if (run.some(isTexty)) {
      const block = renderParagraphBlock(run, ctx)
      if (block) blocks.push(block)
    } else {
      for (const node of run) {
        if (node.type === 'label') {
          attachLabel(node.name)
          continue
        }
        if (node.type === 'text' && !node.value.trim()) continue
        const text = renderParagraph([node], ctx)
        if (text) blocks.push({ kind: node.type === 'comment' ? 'comment' : 'block', text })
      }
    }
    run = []
  }

  for (const node of nodes) {
    switch (node.type) {
      case 'paragraph': {
        flush()
        const block = renderParagraphBlock(node.children, ctx)
        if (block) blocks.push(block)
        break
      }
      case 'heading':
        flush()
        blocks.push({ kind: 'block', text: renderHeading(node, ctx) })
        break
      case 'list':
        flush()
        blocks.push({ kind: 'list', text: renderList(node, ctx) })
        break
      case 'listItem':
        flush()
        blocks.push({
          kind: 'list',
          text: renderList({ type: 'list', ordered: false, children: [node] }, ctx),
        })
        break
      case 'termItem':
        flush()
        blocks.push({ kind: 'term', text: renderTerm(node, ctx) })
        break
      case 'set':
      case 'show':
      case 'import':
      case 'let':
        flush()
        blocks.push({ kind: 'statement', text: '#' + statement(node, ctx) })
        break
      case 'label':
        if (run.length) run.push(node)
        else attachLabel(node.name)
        break
      default:
        run.push(node)
    }
  }
  flush()

  let out = ''
  blocks.forEach((block, i) => {
    if (i > 0) {
      const prev = blocks[i - 1]
      const tight =
        (prev.kind === block.kind && (block.kind === 'statement' || block.kind === 'term')) ||
        prev.kind === 'comment' ||
        (inItem && (prev.kind === 'list' || block.kind === 'list'))
      out += tight ? '\n' : '\n\n'
    }
    out += block.text
  })
  return out
}

function renderParagraph(nodes: Content[], ctx: Context): string {
  return renderParagraphBlock(nodes, ctx)?.text ?? ''
}

function renderParagraphBlock(nodes: Content[], ctx: Context): Block | undefined {
  const w = new Writer({ atLineStart: true })
  renderInline(nodes, ctx, w)
  const text = trimStartSpaces(trimEndSafe(w.out))
  return text ? { kind: 'block', text, lineComment: w.endsInLineComment } : undefined
}

function renderHeading(node: Heading, ctx: Context): string {
  const depth = Math.max(1, Math.floor(node.depth || 1))
  const label = node.label ? ` <${sanitizeLabel(node.label)}>` : ''

  if (node.numbered === false) {
    const args: Argument[] = []
    if (depth !== 1) args.push(arg('depth', { type: 'code', value: String(depth) }))
    args.push(arg('numbering', { type: 'code', value: 'none' }))
    return (
      '#' + renderCall({ type: 'call', name: 'heading', args, body: [node.children] }, ctx) + label
    )
  }

  // after `= ` we are not at the start of a line: `= - x` is a heading "- x"
  const w = new Writer({ atLineStart: false, lastChar: ' ' })
  renderInline(unwrapParagraph(node.children), { ...ctx, singleLine: true }, w)
  const body = trimStartSpaces(trimEndSafe(w.out))
  return '='.repeat(depth) + (body ? ' ' + body : '') + label
}

function renderList(node: List, ctx: Context): string {
  const tight = node.tight !== false
  const start = node.start

  const useFunction =
    node.ordered &&
    (node.numbering !== undefined ||
      (start !== undefined && (!Number.isInteger(start) || start < 0)))

  if (useFunction) {
    const args: Argument[] = []
    if (node.numbering !== undefined)
      args.push(arg('numbering', { type: 'string', value: node.numbering }))
    if (start !== undefined && start !== 1)
      args.push(arg('start', { type: 'code', value: String(start) }))
    if (!tight) args.push(arg('tight', { type: 'code', value: 'false' }))
    return (
      '#' +
      renderCall(
        { type: 'call', name: 'enum', args, body: node.children.map((i) => i.children) },
        ctx,
      )
    )
  }

  const items = node.children.map((item, i) => {
    const marker = node.ordered
      ? i === 0 && start !== undefined && start !== 1
        ? `${start}.`
        : '+'
      : '-'
    // continuation lines line up with the content: a nested `- x` after `12. `
    // must sit right of the outer marker
    return marker + ' ' + indentRest(renderItemContent(item, ctx), ' '.repeat(marker.length + 1))
  })
  return items.join(tight ? '\n' : '\n\n')
}

/** The content of a list item / term description, after the marker. */
function renderItemContent(item: ListItem | { children: Content[] }, ctx: Context): string {
  const children = item.children
  let out: string
  if (isBlockMode(children)) {
    out = renderBlocks(children, ctx, { inItem: true })
  } else {
    // the content after a list marker is at the start of a line: `- = x` is a heading
    const w = new Writer({ atLineStart: true })
    renderInline(unwrapParagraph(children), ctx, w)
    out = trimStartSpaces(trimEndSafe(w.out))
  }
  // an empty item followed by `]` would not be an item at all
  return out || '#[]'
}

function renderTerm(node: TermItem, ctx: Context): string {
  const w = new Writer({ atLineStart: true })
  renderInline(unwrapParagraph(node.term), { ...ctx, singleLine: true, escapeColon: true }, w)
  const term = trimStartSpaces(trimEndSafe(w.out))
  const desc = indentRest(renderItemContent(node, ctx), ctx.indent)
  return `/ ${term}: ${desc}`
}

function statement(node: SetRule | ShowRule | Import | Let, ctx: Context): string {
  switch (node.type) {
    case 'set':
      return `set ${node.name}${renderArgList(
        node.args.map((a) => renderArgument(a, ctx)),
        ctx,
      )}`
    case 'show': {
      const transform =
        typeof node.transform === 'string' ? node.transform : renderCall(node.transform, ctx)
      return node.selector ? `show ${node.selector}: ${transform}` : `show: ${transform}`
    }
    case 'import': {
      const items =
        node.items === '*'
          ? ': *'
          : node.items && node.items.length
            ? `: ${node.items.join(', ')}`
            : ''
      return `import ${escapeString(node.source)}${items}`
    }
    case 'let':
      return `let ${node.name} = ${renderValue(node.value, ctx)}`
  }
}

// ---------------------------------------------------------------------------
// Inline
// ---------------------------------------------------------------------------

/** Merge adjacent text nodes and drop empty ones, so text boundaries are real boundaries. */
function mergeText(nodes: Content[]): Content[] {
  const out: Content[] = []
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

/**
 * Best guess at the first character a node will emit. Only used for
 * escaping decisions at node boundaries, so it errs on the side of
 * "dangerous" characters.
 */
function firstChar(node: Content | undefined): string | undefined {
  if (!node) return undefined
  switch (node.type) {
    case 'text':
      return Array.from(normalizeText(node.value))[0]
    case 'strong':
      return '*'
    case 'emphasis':
      return '_'
    case 'linebreak':
      return '\\'
    case 'raw':
      return '`'
    case 'math':
      return '$'
    case 'label':
      return '<'
    case 'ref':
      return '@'
    case 'comment':
      return '/'
    case 'typst':
      return Array.from(node.value)[0]
    case 'paragraph':
      return firstChar(node.children[0])
    default:
      return '#'
  }
}

function renderInline(nodes: Content[], ctx: Context, w: Writer, endChar?: string) {
  const list = mergeText(nodes)
  list.forEach((node, i) => {
    const next = list[i + 1]
    const nextChar = next ? firstChar(next) : endChar
    const isLast = i === list.length - 1

    switch (node.type) {
      case 'text':
        w.write(
          escapeMarkup(node.value, {
            atLineStart: w.atLineStart,
            prevChar: w.lastChar,
            nextChar,
            escapeColon: ctx.escapeColon,
          }),
          { nextChar },
        )
        return
      case 'strong':
      case 'emphasis':
        renderDelimited(node, ctx, w, nextChar)
        return
      case 'linebreak':
        if (isLast) w.write('#linebreak()', { hash: true })
        else w.write(ctx.singleLine ? '\\ ' : '\\\n')
        return
      case 'raw':
        renderRaw(node, ctx, w)
        return
      case 'math':
        w.write(renderMath(node, ctx))
        return
      case 'label':
        w.write(`<${sanitizeLabel(node.name)}>`)
        return
      case 'ref':
        renderRef(node, ctx, w, next, list[i + 2] ? firstChar(list[i + 2]) : endChar)
        return
      case 'comment':
        renderComment(node, ctx, w)
        return
      case 'typst':
        w.write(node.value, { hash: node.value.startsWith('#') })
        return
      case 'call':
        w.write('#' + renderCall(node, ctx), { hash: true })
        return
      case 'set':
      case 'show':
      case 'import':
      case 'let':
        // statements run until the end of the line unless terminated
        w.write('#' + statement(node, ctx) + ';')
        return
      case 'paragraph':
        renderInline(node.children, ctx, w, isLast ? endChar : nextChar)
        return
      case 'heading':
        w.write('#' + renderCall(headingAsCall(node), ctx), { hash: true })
        if (node.label) w.write(` <${sanitizeLabel(node.label)}>`)
        return
      case 'list':
        w.write('#' + renderCall(listAsCall(node), ctx), { hash: true })
        return
      case 'listItem':
        w.write(
          '#' + renderCall(listAsCall({ type: 'list', ordered: false, children: [node] }), ctx),
          {
            hash: true,
          },
        )
        return
      case 'termItem':
        w.write('#' + renderCall(termAsCall(node), ctx), { hash: true })
        return
    }
  })
}

function renderDelimited(node: Strong | Emphasis, ctx: Context, w: Writer, nextChar?: string) {
  const strong = node.type === 'strong'
  const delimiter = strong ? '*' : '_'
  const nested = strong ? ctx.inStrong : ctx.inEmph

  const children = node.children
  const canDelimit =
    !nested &&
    children.length > 0 &&
    !isAlnum(w.lastChar) &&
    !isAlnum(nextChar) &&
    !isBlockMode(children) &&
    !hasLineBreakingNode(children) &&
    hasVisibleText(children)

  if (canDelimit) {
    w.write(delimiter)
    renderInline(
      unwrapParagraph(children),
      { ...ctx, inStrong: ctx.inStrong || strong, inEmph: ctx.inEmph || !strong },
      w,
      delimiter,
    )
    w.write(delimiter)
    return
  }

  w.write('#' + (strong ? 'strong' : 'emph') + bracket(children, ctx), { hash: true })
}

function hasLineBreakingNode(nodes: Content[]): boolean {
  return nodes.some(
    (n) =>
      n.type === 'linebreak' ||
      n.type === 'comment' ||
      (n.type === 'raw' && !!n.block) ||
      ('children' in n &&
        Array.isArray(n.children) &&
        hasLineBreakingNode(n.children as Content[])),
  )
}

function hasVisibleText(nodes: Content[]): boolean {
  return nodes.some((n) => {
    if (n.type === 'text') return normalizeText(n.value).trim() !== ''
    if ('children' in n && Array.isArray(n.children)) return hasVisibleText(n.children as Content[])
    return n.type !== 'label' && n.type !== 'comment'
  })
}

function renderRaw(node: Raw, ctx: Context, w: Writer) {
  const value = node.value
  const lang = node.lang
  const validLang = lang === undefined || /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(lang)

  if (!node.block) {
    if (!lang && value && !value.includes('`') && !hasNewline(value)) {
      w.write('`' + value + '`')
      return
    }
    const args = [escapeString(value)]
    if (lang) args.push(`lang: ${escapeString(lang)}`)
    w.write(`#raw(${args.join(', ')})`, { hash: true })
    return
  }

  if (ctx.singleLine || !validLang) {
    const args = [escapeString(value), 'block: true']
    if (lang) args.push(`lang: ${escapeString(lang)}`)
    w.write(`#raw(${args.join(', ')})`, { hash: true })
    return
  }

  const longest = Math.max(0, ...(value.match(/`+/g) ?? []).map((m) => m.length))
  const fence = '`'.repeat(Math.max(3, longest + 1))
  w.write(`${fence}${lang ?? ''}\n${normalizeNewlines(value)}\n${fence}`)
}

function renderMath(node: Math, ctx: Context): string {
  let value = normalizeNewlines(node.value).trim()
  if (!node.block || ctx.singleLine) value = value.replace(/\s*\n\s*/g, ' ')
  if (!value) return node.block ? '$ $' : '$$'
  return node.block ? `$ ${value} $` : `$${value}$`
}

/**
 * `@target`, unless the following characters would be read as part of the
 * target, in which case `#ref(<target>)`.
 *
 * @param after first character after `next` (or after the sequence)
 */
function renderRef(node: Ref, ctx: Context, w: Writer, next: Content | undefined, after?: string) {
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
    } else {
      fallback = isLabelChar(next ? firstChar(next) : after)
    }
  }

  if (!fallback) {
    w.write('@' + target)
    if (node.supplement) w.write(bracket(node.supplement, ctx))
    return
  }

  const args = [`<${target}>`]
  if (node.supplement) args.push(`supplement: ${bracket(node.supplement, ctx)}`)
  w.write(`#ref(${args.join(', ')})`, { hash: true })
}

function renderComment(node: Comment, ctx: Context, w: Writer) {
  const last = w.lastChar
  if (node.block || ctx.singleLine) {
    // `//*` would be a line comment, `*/*` the end of a block comment:
    // separate them with an empty content block (a space would show)
    // At the start of a line, Typst would measure the line's indentation
    // after the comment (`- a⏎/* c */ b` continues the list item), so start
    // the line with an empty content block instead.
    if (w.endsWithUnescaped('/') || w.endsWithUnescaped('*') || w.atLineStart) w.write('#[]')
    let value = normalizeNewlines(node.value)
    if (ctx.singleLine) value = value.replace(/\n/g, ' ')
    w.write(`/* ${escapeBlockComment(value)} */`, { trivia: true })
    return
  }
  if (last !== undefined && !/\s/.test(last)) w.write(' ')
  const lines = normalizeNewlines(node.value).split('\n')
  w.write(lines.map((l) => ('// ' + l).trimEnd()).join('\n') + '\n', {
    trivia: true,
    lineComment: true,
  })
}

// ---------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------

function arg(name: string | undefined, value: Value): Argument {
  return name === undefined ? { type: 'argument', value } : { type: 'argument', name, value }
}

function headingAsCall(node: Heading): FunctionCall {
  const args: Argument[] = [
    arg('depth', { type: 'code', value: String(Math.max(1, node.depth || 1)) }),
  ]
  if (node.numbered === false) args.push(arg('numbering', { type: 'code', value: 'none' }))
  return { type: 'call', name: 'heading', args, body: [node.children] }
}

function listAsCall(node: List): FunctionCall {
  const args: Argument[] = []
  if (node.ordered && node.numbering !== undefined)
    args.push(arg('numbering', { type: 'string', value: node.numbering }))
  if (node.ordered && node.start !== undefined && node.start !== 1)
    args.push(arg('start', { type: 'code', value: String(node.start) }))
  if (node.tight === false) args.push(arg('tight', { type: 'code', value: 'false' }))
  return {
    type: 'call',
    name: node.ordered ? 'enum' : 'list',
    args,
    body: node.children.map((i) => i.children),
  }
}

function termAsCall(node: TermItem): FunctionCall {
  return {
    type: 'call',
    name: 'terms',
    args: [
      arg(undefined, {
        type: 'call',
        name: 'terms.item',
        args: [
          arg(undefined, { type: 'contentBlock', children: node.term }),
          arg(undefined, { type: 'contentBlock', children: node.children }),
        ],
      }),
    ],
  }
}

/** `name(args)[body]…` without the leading `#`. */
function renderCall(node: FunctionCall, ctx: Context): string {
  const args = node.args.map((a) => renderArgument(a, ctx))
  const bodies = (node.body ?? []).map((b) => bracket(b, ctx))
  let out = node.name
  if (args.length || !bodies.length) out += renderArgList(args, ctx)
  return out + bodies.join('')
}

function renderArgument(node: Argument, ctx: Context): string {
  const value = renderValue(node.value, ctx)
  return node.name ? `${node.name}: ${value}` : value
}

function renderArgList(parts: string[], ctx: Context, { array = false } = {}): string {
  if (!parts.length) return '()'
  const oneLine = parts.join(', ')
  const trailing = array && parts.length === 1 ? ',' : ''
  if (!oneLine.includes('\n') && oneLine.length <= ctx.lineWidth) {
    return `(${oneLine}${trailing})`
  }
  return `(\n${parts.map((p) => indentAll(p, ctx.indent) + ',').join('\n')}\n)`
}

function renderValue(value: Value, ctx: Context): string {
  switch (value.type) {
    case 'string':
      return escapeString(value.value)
    case 'code':
      return value.value.trim() || 'none'
    case 'array':
      return renderArgList(
        value.items.map((v) => renderValue(v, ctx)),
        ctx,
        { array: true },
      )
    case 'dict':
      if (!value.entries.length) return '(:)'
      return renderArgList(
        value.entries.map(
          (e) =>
            `${isIdentifier(e.key) ? e.key : escapeString(e.key)}: ${renderValue(e.value, ctx)}`,
        ),
        ctx,
      )
    case 'contentBlock':
      return bracket(value.children, ctx)
    case 'call':
      return renderCall(value, ctx)
  }
}

/** A content block `[…]`: back to markup mode, at the start of a line. */
function bracket(children: Content[], ctx: Context): string {
  const inner: Context = { ...ctx, inStrong: false, inEmph: false, escapeColon: false }
  if (isBlockMode(children)) {
    const out = renderBlocks(children, { ...inner, singleLine: false })
    return out ? `[\n${indentAll(out, ctx.indent)}\n]` : '[]'
  }
  const w = new Writer({ atLineStart: true })
  renderInline(unwrapParagraph(children), inner, w, ']')
  // no trimming: `#emph[a ]b` and `#emph[a]b` differ
  return `[${w.out}]`
}

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

function trimStartSpaces(s: string): string {
  return s.replace(/^[ \t]+/, '')
}

/**
 * Trim trailing spaces and newlines, unless that would turn a linebreak
 * (`\ `) into an escape. Only used where a newline or the end of the output
 * follows, so a trailing line comment stays terminated.
 */
function trimEndSafe(s: string): string {
  const trimmed = s.replace(/[ \t\n]+$/, '')
  if (trimmed === s) return s
  const backslashes = trimmed.match(/\\+$/)?.[0].length ?? 0
  // keep `\ ` a linebreak (a space, not a newline, so no blank line appears)
  if (backslashes % 2 === 1) return trimmed + ' '
  return trimmed
}
