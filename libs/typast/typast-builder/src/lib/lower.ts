/**
 * Lower the document model (`./doc.ts`) to typast: decide the layout (blank lines between
 * blocks, list markers or `#enum(…)`, where labels go) and turn calls by name and code source
 * into expressions.
 */
import type {
  Arg,
  Comment as TComment,
  Expr,
  FuncCall,
  MarkupContent,
  Root as TRoot,
  SetRule as TSetRule,
  ShowRule as TShowRule,
  ModuleImport,
  LetBinding,
} from 'typast'

import * as b from './build.js'
import type {
  Argument,
  Content,
  FunctionCall,
  Heading,
  Import,
  Let,
  List,
  ListItem,
  Root,
  SetRule,
  ShowRule,
  TermItem,
  Value,
} from './doc.js'

/** Lower a document (or a list of document nodes, laid out like a content block's body). */
export function lower(tree: Root): TRoot
export function lower(tree: Content[]): MarkupContent[]
export function lower(tree: Root | Content[]): TRoot | MarkupContent[] {
  if (Array.isArray(tree)) return lowerContent(tree, { trim: true })
  return b.root(...layoutBlocks(tree.children))
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
  if (node.type === 'text') return node.value.trim() !== ''
  return TEXTY.has(node.type)
}

function isDisplay(node: Content): boolean {
  return (node.type === 'raw' || node.type === 'math') && !!node.block
}

/**
 * Should these nodes be laid out as blocks (separated by blank lines) rather than as one run of
 * inline markup? Yes if there is any block-only node, or if display raw/math sits among other
 * nodes without any running text.
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

function unwrapParagraph(nodes: Content[]): Content[] {
  if (nodes.length === 1 && nodes[0].type === 'paragraph') return nodes[0].children
  return nodes
}

/** Lay nodes out the way a content block holds them: as blocks, or as one run of markup. */
function lowerContent(nodes: Content[], { trim = false } = {}): MarkupContent[] {
  if (isBlockMode(nodes)) {
    const blocks = layoutBlocks(nodes)
    // `[⏎ blocks ⏎]` in a content block (the newlines are spaces at the edges of blocks)
    return trim || !blocks.length ? blocks : [b.space(true), ...blocks, b.space(true)]
  }
  const inline = lowerInline(unwrapParagraph(nodes))
  return trim ? trimInline(inline) : inline
}

// ---------------------------------------------------------------------------
// Blocks
// ---------------------------------------------------------------------------

type BlockKind = 'block' | 'statement' | 'term' | 'list' | 'comment'

interface Block {
  kind: BlockKind
  nodes: MarkupContent[]
}

function endsInLineComment(nodes: MarkupContent[]): boolean {
  const last = nodes[nodes.length - 1]
  return !!last && last.type === 'comment' && !(last as TComment).block
}

/**
 * Lay out block-level content: paragraphs separated by blank lines, statements and terms on
 * consecutive lines. Runs of inline nodes become a paragraph.
 */
function layoutBlocks(nodes: Content[], { inItem = false } = {}): MarkupContent[] {
  const blocks: Block[] = []
  let run: Content[] = []

  const attachLabel = (name: string) => {
    const prev = blocks[blocks.length - 1]
    if (!prev || prev.kind === 'comment') {
      blocks.push({ kind: 'block', nodes: [b.label(name)] })
      return
    }
    // after `a // c` the label would be part of the comment: put it on the next line, where it
    // still attaches to what precedes it
    prev.nodes.push(b.space(endsInLineComment(prev.nodes)), b.label(name))
  }

  const flush = () => {
    if (!run.length) return
    if (run.some(isTexty)) {
      const nodes = trimInline(lowerInline(run))
      if (nodes.length) blocks.push({ kind: 'block', nodes })
    } else {
      for (const node of run) {
        if (node.type === 'label') {
          attachLabel(node.name)
          continue
        }
        if (node.type === 'text' && !node.value.trim()) continue
        const nodes = trimInline(lowerInline([node]))
        if (nodes.length)
          blocks.push({ kind: node.type === 'comment' ? 'comment' : 'block', nodes })
      }
    }
    run = []
  }

  for (const node of nodes) {
    switch (node.type) {
      case 'paragraph': {
        flush()
        const inline = trimInline(lowerInline(node.children))
        if (inline.length) blocks.push({ kind: 'block', nodes: inline })
        break
      }
      case 'heading':
        flush()
        blocks.push({ kind: 'block', nodes: lowerHeading(node) })
        break
      case 'list':
        flush()
        blocks.push({ kind: 'list', nodes: lowerList(node) })
        break
      case 'listItem':
        flush()
        blocks.push({
          kind: 'list',
          nodes: lowerList({ type: 'list', ordered: false, children: [node] }),
        })
        break
      case 'termItem':
        flush()
        blocks.push({ kind: 'term', nodes: [lowerTerm(node)] })
        break
      case 'set':
      case 'show':
      case 'import':
      case 'let':
        flush()
        blocks.push({ kind: 'statement', nodes: [lowerStatement(node)] })
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

  const out: MarkupContent[] = []
  blocks.forEach((block, i) => {
    if (i > 0) {
      const prev = blocks[i - 1]
      const tight =
        (prev.kind === block.kind && (block.kind === 'statement' || block.kind === 'term')) ||
        prev.kind === 'comment' ||
        (inItem && (prev.kind === 'list' || block.kind === 'list'))
      out.push(tight ? b.space(true) : b.parbreak())
    }
    out.push(...block.nodes)
  })
  return out
}

function lowerHeading(node: Heading): MarkupContent[] {
  const depth = Math.max(1, Math.floor(node.depth || 1))
  const label = node.label ? [b.space(), b.label(node.label)] : []
  if (node.numbered === false) {
    return [
      b.call(
        'heading',
        [depth !== 1 && b.named('depth', b.int(depth)), b.named('numbering', b.none())],
        lowerContent(node.children),
      ),
      ...label,
    ]
  }
  return [b.heading(depth, ...trimInline(lowerInline(unwrapParagraph(node.children)))), ...label]
}

function lowerList(node: List): MarkupContent[] {
  const tight = node.tight !== false
  const start = node.start
  const useFunction =
    node.ordered &&
    (node.numbering !== undefined ||
      (start !== undefined && (!Number.isInteger(start) || start < 0)))

  if (useFunction) {
    return [
      b.call(
        'enum',
        [
          node.numbering !== undefined && b.named('numbering', b.str(node.numbering)),
          start !== undefined && start !== 1 && b.named('start', b.value(start)),
          !tight && b.named('tight', b.bool(false)),
        ],
        ...node.children.map((item) => lowerContent(item.children)),
      ),
    ]
  }

  const items = node.children.map((item, i): MarkupContent => {
    const body = itemContent(item)
    if (!node.ordered) return b.listItem(...body)
    return b.enumItem(body, i === 0 && start !== undefined && start !== 1 ? start : undefined)
  })
  return tight ? b.lines(...items) : b.blocks(...items)
}

/** The content of a list item / term description. */
function itemContent(item: ListItem | { children: Content[] }): MarkupContent[] {
  const children = item.children
  if (isBlockMode(children)) return layoutBlocks(children, { inItem: true })
  return trimInline(lowerInline(unwrapParagraph(children)))
}

function lowerTerm(node: TermItem): MarkupContent {
  return b.termItem(trimInline(lowerInline(unwrapParagraph(node.term))), ...itemContent(node))
}

function lowerStatement(
  node: SetRule | ShowRule | Import | Let,
): TSetRule | TShowRule | ModuleImport | LetBinding {
  switch (node.type) {
    case 'set':
      return b.set(node.name, node.args.map(lowerArg))
    case 'show': {
      const transform =
        typeof node.transform === 'string' ? b.code(node.transform) : lowerCall(node.transform)
      return b.show(node.selector ? b.code(node.selector) : undefined, transform)
    }
    case 'import':
      return b.moduleImport(node.source, node.items)
    case 'let':
      return b.letBinding(node.name, lowerValue(node.value))
  }
}

// ---------------------------------------------------------------------------
// Inline
// ---------------------------------------------------------------------------

function lowerInline(nodes: Content[]): MarkupContent[] {
  return nodes.flatMap((node, i): MarkupContent[] => {
    switch (node.type) {
      case 'text':
        return [b.text(node.value)]
      case 'strong':
        return [b.strong(...lowerInline(unwrapParagraph(node.children)))]
      case 'emphasis':
        return [b.emph(...lowerInline(unwrapParagraph(node.children)))]
      case 'linebreak':
        // continue on the next line
        return i < nodes.length - 1 ? [b.linebreak(), b.space(true)] : [b.linebreak()]
      case 'raw':
        return [b.raw(node.value, { lang: node.lang, block: !!node.block })]
      case 'math':
        return [b.equation(node.value.trim(), !!node.block)]
      case 'label':
        return [b.label(node.name)]
      case 'ref':
        return [b.ref(node.target, node.supplement && lowerContent(node.supplement))]
      case 'comment':
        if (node.block) return [b.comment(` ${node.value} `, true)]
        // one `//` line per line
        return b.lines(
          ...node.value
            .split(/\r\n|[\n\v\f\r\u0085\u2028\u2029]/)
            .map((line) => b.comment(line ? ` ${line}` : '')),
        )
      case 'typst':
        return [{ ...b.typst(node.value), ...(node.data ? { data: node.data } : {}) }]
      case 'call':
        return [lowerCall(node)]
      case 'set':
      case 'show':
      case 'import':
      case 'let':
        return [lowerStatement(node)]
      case 'paragraph':
        return lowerInline(node.children)
      case 'heading':
        return [
          b.call(
            'heading',
            [
              b.named('depth', b.int(Math.max(1, node.depth || 1))),
              node.numbered === false && b.named('numbering', b.none()),
            ],
            lowerContent(node.children),
          ),
          ...(node.label ? [b.space(), b.label(node.label)] : []),
        ]
      case 'list':
      case 'listItem': {
        const list: List =
          node.type === 'list' ? node : { type: 'list', ordered: false, children: [node] }
        return [
          b.call(
            list.ordered ? 'enum' : 'list',
            [
              list.ordered &&
                list.numbering !== undefined &&
                b.named('numbering', b.str(list.numbering)),
              list.ordered &&
                list.start !== undefined &&
                list.start !== 1 &&
                b.named('start', b.value(list.start)),
              list.tight === false && b.named('tight', b.bool(false)),
            ],
            ...list.children.map((item) => lowerContent(item.children)),
          ),
        ]
      }
      case 'termItem':
        return [
          b.call('terms', [
            b.call('terms.item', [
              b.content(...lowerContent(node.term)),
              b.content(...lowerContent(node.children)),
            ]),
          ]),
        ]
    }
  })
}

/** Spaces, tabs and everything Typst counts as a newline. */
const EDGE_SPACE = /^[ \t\n\v\f\r\u0085\u2028\u2029]+|[ \t\n\v\f\r\u0085\u2028\u2029]+$/g

/** Trim whitespace at the edges of a paragraph's text. */
function trimInline(nodes: MarkupContent[]): MarkupContent[] {
  const out = [...nodes]
  const blank = (n: MarkupContent | undefined) =>
    n?.type === 'space' || (n?.type === 'text' && !n.value.replace(EDGE_SPACE, ''))
  // (after a comment at the start of a line, Typst measures the indentation: `/* c */ b` right
  // after a list item continues the item)
  let start = 0
  for (;;) {
    while (blank(out[start])) out.splice(start, 1)
    if (out[start]?.type !== 'comment') break
    start++
  }
  while (out.length && blank(out[out.length - 1])) out.pop()
  const first = out[start]
  if (first?.type === 'text') {
    out[start] = { ...first, value: first.value.replace(/^\s+/, (m) => m.replace(EDGE_SPACE, '')) }
  }
  const last = out[out.length - 1]
  if (last?.type === 'text') {
    out[out.length - 1] = {
      ...last,
      value: last.value.replace(/\s+$/, (m) => m.replace(EDGE_SPACE, '')),
    }
  }
  return out
}

// ---------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------

export function lowerCall(node: FunctionCall): FuncCall {
  return b.call(
    node.name,
    node.args.map(lowerArg),
    ...(node.body ?? []).map((body) => lowerContent(body)),
  )
}

function lowerArg(node: Argument): Arg {
  const value = lowerValue(node.value)
  return node.name ? b.named(node.name, value) : value
}

export function lowerValue(value: Value): Expr {
  switch (value.type) {
    case 'string':
      return b.str(value.value)
    case 'code':
      return value.value.trim() ? b.code(value.value) : b.none()
    case 'array':
      return b.array(...value.items.map(lowerValue))
    case 'dict':
      return b.dict(
        value.entries.map((e) =>
          b.isIdentifierLike(e.key)
            ? b.named(e.key, lowerValue(e.value))
            : b.keyed(b.str(e.key), lowerValue(e.value)),
        ),
      )
    case 'contentBlock':
      return b.content(...lowerContent(value.children))
    case 'call':
      return lowerCall(value)
  }
}
