import type * as Ast from '@unified-latex/unified-latex-types'
import type { Content, Heading, Paragraph, Text } from 'typast'
import type { VFile } from 'vfile'
import {
  arg,
  asBlock,
  call,
  code,
  isBlockNode,
  isNoindentMarker,
  paragraph,
  text,
} from './build.js'
import { fontSizes } from './symbols.js'
import type {
  EnvironmentHandler,
  HandlerResult,
  LabelKind,
  MacroHandler,
  Options,
} from './types.js'
import { envName, plainText, typstColor } from './util.js'

/** Marker for a paragraph break in a flat node stream. */
export const PARBREAK = Symbol('parbreak')
type Item = Content | typeof PARBREAK

export interface Metadata {
  documentOptions: string[]
  fields: Map<string, Ast.Node[]>
  authors: { name: string; orcid?: string; affiliations: number[] }[]
  affiliations: Map<number, Ast.Node[]>
  bibResources: string[]
  abstractEnv?: Ast.Node[]
  hasCitations: boolean
  hasPrintBibliography: boolean
}

/** Font/shape declarations that act until the end of the current group. */
const DECLARATIONS = new Set([
  'bfseries',
  'itshape',
  'em',
  'slshape',
  'scshape',
  'ttfamily',
  'upshape',
  'mdseries',
  'normalfont',
  'rmfamily',
  'sffamily',
  'bf',
  'it',
  'sc',
  'tt',
  ...Object.keys(fontSizes),
])

/** Ligatures TeX applies to runs of characters. */
function ligatures(s: string): string {
  return s
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/`/g, '‘')
    .replace(/!‘/g, '¡')
    .replace(/\?‘/g, '¿')
    .replace(/~/g, '\u00A0')
}

/** Primitive registers that are set with `\name=value` / `\name value`. */
const REGISTERS = new Set([
  'hyphenpenalty',
  'exhyphenpenalty',
  'interfootnotelinepenalty',
  'tolerance',
  'emergencystretch',
  'parindent',
  'parskip',
  'hsize',
  'clubpenalty',
  'widowpenalty',
  'displaywidowpenalty',
  'pretolerance',
  'hbadness',
  'vbadness',
  'hfuzz',
  'vfuzz',
  'arraystretch',
  'tabcolsep',
  'skip',
  'footins',
  'baselinestretch',
  'looseness',
])

/** Formatting macros whose (trimmed) argument becomes the content of a call. */
const EDGE_SPACE_MACROS = new Set([
  'emph',
  'textit',
  'textsl',
  'textbf',
  'textsc',
  'underline',
  'uline',
  'sout',
  'hl',
  'textcolor',
  'href',
])

/** Whether the last argument of a macro starts or ends with whitespace. */
function argumentEdgeSpace(node: Ast.Macro): { lead: boolean; trail: boolean } {
  const content = node.args?.[node.args.length - 1]?.content ?? []
  const isSpace = (n: Ast.Node | undefined) => n?.type === 'whitespace'
  return {
    lead: isSpace(content[0]),
    trail: content.length > 0 && isSpace(content[content.length - 1]),
  }
}

export class State {
  file: VFile
  options: Options
  macros: Record<string, MacroHandler>
  environments: Record<string, EnvironmentHandler>
  meta: Metadata = {
    documentOptions: [],
    fields: new Map(),
    authors: [],
    affiliations: new Map(),
    bibResources: [],
    hasCitations: false,
    hasPrintBibliography: false,
  }
  /** `\newcolumntype` definitions */
  columnTypes = new Map<string, { args: number; def: Ast.Node[] }>()
  /** label name → what it labels, plus heading text for refs to unnumbered headings */
  labels = new Map<string, { kind: LabelKind; text?: Content[] }>()
  /** What a `\label` currently refers to */
  labelContext: LabelKind[] = []
  /** Inside the preamble: collect metadata, emit nothing, don't warn */
  inPreamble = false
  /** Inside a landscape environment: floats are not floated */
  inLandscape = 0
  /** Inside a `table`/`table*` environment, where the class sets \arrayrulewidth to 1pt */
  inTableEnv = 0
  /** Nesting depth of the list being converted (1 = outermost) */
  listDepth = 0
  private unknown = new Map<string, { count: number; node: Ast.Node }>()

  constructor(
    file: VFile,
    options: Options,
    macros: Record<string, MacroHandler>,
    environments: Record<string, EnvironmentHandler>,
  ) {
    this.file = file
    this.options = options
    this.macros = { ...macros, ...options.macros }
    this.environments = { ...environments, ...options.environments }
  }

  warn(reason: string, node?: Ast.Node) {
    if (this.inPreamble) return
    const message = this.file.message(
      reason,
      node?.position as never,
      'unified-latex-util-to-typast',
    )
    message.fatal = false
  }

  /** Record an unknown macro/environment; reported once per name by {@link reportUnknown}. */
  unknownCommand(name: string, node: Ast.Node) {
    if (this.inPreamble) return
    const entry = this.unknown.get(name)
    if (entry) entry.count++
    else this.unknown.set(name, { count: 1, node })
  }

  reportUnknown() {
    for (const [name, { count, node }] of this.unknown) {
      this.warn(`Unknown ${name}${count > 1 ? ` (${count}×)` : ''}: kept its text content`, node)
    }
  }

  // -------------------------------------------------------------------------
  // Conversion entry points
  // -------------------------------------------------------------------------

  /** Block-level conversion: groups phrasing content into paragraphs. */
  flow(nodes: Ast.Node[]): Content[] {
    return group(this.items(nodes))
  }

  /**
   * Content for a content block (`[…]`): like {@link flow}, but a single paragraph is unwrapped
   * into its phrasing content.
   */
  body(nodes: Ast.Node[]): Content[] {
    const blocks = this.flow(nodes)
    if (blocks.length === 1 && blocks[0].type === 'paragraph') return blocks[0].children
    return blocks
  }

  /** Phrasing conversion: paragraph breaks become spaces, whitespace is trimmed. */
  inline(nodes: Ast.Node[]): Content[] {
    const items = this.items(nodes).map((i) => (i === PARBREAK ? text(' ') : i))
    return trimPhrasing(mergeText(items))
  }

  /** Flat conversion of a node list into typast nodes and paragraph-break markers. */
  items(nodes: Ast.Node[]): Item[] {
    const out: Item[] = []
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      switch (node.type) {
        case 'string': {
          let value = node.content
          while (nodes[i + 1]?.type === 'string') value += (nodes[++i] as Ast.String).content
          out.push(text(ligatures(value)))
          break
        }
        case 'whitespace':
          out.push(text(' '))
          break
        case 'parbreak':
          out.push(PARBREAK)
          break
        case 'comment':
          // a comment at the end of a line eats the newline; one on its own line is invisible
          break
        case 'group':
          out.push(...this.items(node.content))
          break
        case 'macro': {
          if (node.content === 'par') {
            out.push(PARBREAK)
            break
          }
          if (node.content === 'color' && node.args?.length) {
            // `\color{name}` colours the rest of the group
            const color = typstColor(plainText(node.args[node.args.length - 1].content))
            const rest = this.items(nodes.slice(i + 1))
            i = nodes.length
            if (!color) {
              out.push(...rest)
            } else if (rest.includes(PARBREAK)) {
              out.push(asBlock(call('text', [arg(code(color), 'fill')], [group(rest)])))
            } else {
              out.push(
                call(
                  'text',
                  [arg(code(color), 'fill')],
                  [trimLeadingSpace(mergeText(rest as Content[]))],
                ),
              )
            }
            break
          }
          if (DECLARATIONS.has(node.content)) {
            out.push(...this.declaration(node.content, nodes.slice(i + 1)))
            i = nodes.length
            break
          }
          if (REGISTERS.has(node.content)) {
            i = skipRegisterValue(nodes, i)
            break
          }
          {
            // `\textsc{data }to`: the space inside the argument is trimmed from the call's
            // content, so put it outside
            const edges = EDGE_SPACE_MACROS.has(node.content) ? argumentEdgeSpace(node) : undefined
            if (edges?.lead) out.push(text(' '))
            out.push(...this.macro(node))
            if (edges?.trail) out.push(text(' '))
          }
          // TeX swallows the space after a control word without arguments
          if (
            /^[a-zA-Z]+$/.test(node.content) &&
            (!node.args || node.args.every((a) => a.content.length === 0 && a.openMark === '')) &&
            nodes[i + 1]?.type === 'whitespace'
          ) {
            i++
          }
          break
        }
        case 'environment':
        case 'mathenv':
          out.push(...this.environment(node))
          break
        case 'inlinemath':
        case 'displaymath':
        case 'verbatim':
        case 'verb':
          out.push(...this.special(node))
          break
        default:
          this.warn(`Unhandled node type ${(node as Ast.Node).type}`, node)
      }
    }
    return out
  }

  macro(node: Ast.Macro): Content[] {
    const handler = this.macros[node.content]
    if (handler) return normalize(handler(node, this))
    return normalize(this.macros['*']?.(node, this))
  }

  environment(node: Ast.Environment): Content[] {
    const name = envName(node)
    const handler = this.environments[name]
    if (handler) return normalize(handler(node, this))
    return normalize(this.environments['*']?.(node, this))
  }

  special(node: Ast.Node): Content[] {
    const handler = this.environments[`#${node.type}`]
    return handler ? normalize(handler(node as Ast.Environment, this)) : []
  }

  /** `{\bfseries text}`, `\footnotesize …` — the declaration applies to the rest of the group. */
  declaration(name: string, rest: Ast.Node[]): Item[] {
    const items = this.items(rest)
    const hasBreak = items.includes(PARBREAK)
    const children: Content[] = hasBreak
      ? group(items)
      : trimLeadingSpace(mergeText(items as Content[]))
    if (children.length === 0) return []
    const wrap = (fn: string, args: Parameters<typeof call>[1] = []) => {
      const node = call(fn, args, [children])
      return hasBreak ? asBlock(node) : node
    }
    switch (name) {
      case 'bfseries':
      case 'bf':
        return [hasBreak ? wrap('strong') : { type: 'strong', children }]
      case 'itshape':
      case 'em':
      case 'it':
      case 'slshape':
        return [hasBreak ? wrap('emph') : { type: 'emphasis', children }]
      case 'scshape':
      case 'sc':
        return [wrap('smallcaps')]
      case 'ttfamily':
      case 'tt':
        return [
          wrap('text', [
            {
              type: 'argument',
              name: 'font',
              value: { type: 'string', value: 'DejaVu Sans Mono' },
            },
          ]),
        ]
      default:
        if (fontSizes[name] && name !== 'normalsize') {
          return [
            wrap('text', [
              { type: 'argument', name: 'size', value: { type: 'code', value: fontSizes[name] } },
            ]),
          ]
        }
        return hasBreak ? (children as Item[]) : children
    }
  }
}

function normalize(result: HandlerResult): Content[] {
  if (!result) return []
  return Array.isArray(result) ? result : [result]
}

function skipRegisterValue(nodes: Ast.Node[], i: number): number {
  let j = i + 1
  while (nodes[j]?.type === 'whitespace') j++
  if (nodes[j]?.type === 'string' && (nodes[j] as Ast.String).content === '=') j++
  while (nodes[j]?.type === 'whitespace') j++
  // a register as the value (`\skip\footins`) or a number with optional unit and factor
  let consumed = false
  while (j < nodes.length) {
    const n = nodes[j]
    if (
      n.type === 'string' &&
      /^[-+\d.]+[a-z]*$|^(?:pt|em|ex|cm|mm|in|bp|plus|minus|fil+)$/.test(n.content)
    ) {
      j++
      consumed = true
      continue
    }
    if (n.type === 'macro' && !consumed && REGISTERS.has(n.content)) {
      j++
      continue
    }
    if (
      n.type === 'macro' &&
      consumed &&
      /^(?:hsize|linewidth|textwidth|baselineskip|p@)$/.test(n.content)
    ) {
      j++
      break
    }
    break
  }
  return j - 1
}

// ---------------------------------------------------------------------------
// Paragraph grouping and whitespace normalisation
// ---------------------------------------------------------------------------

export function mergeText(nodes: Content[]): Content[] {
  const out: Content[] = []
  for (const node of nodes) {
    const prev = out[out.length - 1]
    if (node.type === 'text' && prev?.type === 'text') {
      out[out.length - 1] = text(prev.value + node.value)
    } else {
      out.push(node.type === 'text' ? text(node.value) : node)
    }
  }
  return out.map((n) => (n.type === 'text' ? text(n.value.replace(/[ \t\n\r]+/g, ' ')) : n))
}

function trimLeadingSpace(nodes: Content[]): Content[] {
  if (nodes[0]?.type === 'text') {
    const value = nodes[0].value.replace(/^[ \t\n\r]+/, '')
    return value ? [text(value), ...nodes.slice(1)] : nodes.slice(1)
  }
  return nodes
}

export function trimPhrasing(nodes: Content[]): Content[] {
  let out = trimLeadingSpace(nodes)
  const last = out[out.length - 1]
  if (last?.type === 'text') {
    const value = last.value.replace(/[ \t\n\r]+$/, '')
    out = value ? [...out.slice(0, -1), text(value)] : out.slice(0, -1)
  }
  return out
}

function isEmptyPhrasing(nodes: Content[]): boolean {
  return nodes.every((n) => n.type === 'text' && /^[ \t\n\r]*$/.test((n as Text).value))
}

/** Group a flat item stream into blocks; phrasing runs become paragraphs. */
export function group(items: Item[]): Content[] {
  const blocks: Content[] = []
  let run: Content[] = []
  const flush = () => {
    const noindent = run.some(isNoindentMarker)
    const children = trimPhrasing(mergeText(run.filter((n) => !isNoindentMarker(n))))
    run = []
    if (children.length === 0 || isEmptyPhrasing(children)) return
    // a label directly after a block labels that block
    if (children[0].type === 'label' && blocks.length > 0) {
      const target = blocks[blocks.length - 1]
      if (attachLabel(target, children[0].name)) {
        const rest = trimPhrasing(children.slice(1))
        if (rest.length > 0 && !isEmptyPhrasing(rest)) blocks.push(paragraph(rest))
        return
      }
    }
    // `\noindent` only matters where Typst would indent: after another paragraph (vertical
    // space in between does not stop Typst from indenting)
    if (noindent && followsParagraph(blocks)) {
      blocks.push(asBlock(call('par', [arg(code('0pt'), 'first-line-indent')], [children])))
      return
    }
    blocks.push(paragraph(children))
  }
  for (const item of items) {
    if (item === PARBREAK) {
      flush()
    } else if (isBlockNode(item)) {
      flush()
      blocks.push(item)
    } else {
      run.push(item)
    }
  }
  flush()
  return blocks
}

/** Whether Typst would indent a paragraph appended to `blocks`. */
function followsParagraph(blocks: Content[]): boolean {
  for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i]
    if (b.type === 'call' && b.name === 'v') continue
    return b.type === 'paragraph' || (b.type === 'call' && b.name === 'par')
  }
  return false
}

/** Attach a label to a block node, if it can carry one. */
export function attachLabel(node: Content, name: string): boolean {
  if (node.type === 'heading') {
    if (!node.label) (node as Heading).label = name
    return true
  }
  if (node.type === 'call' || node.type === 'math' || node.type === 'typst') {
    const data = ((node as { data?: Record<string, unknown> }).data ??= {})
    if (!data.label) data.label = name
    return true
  }
  if (node.type === 'paragraph') {
    const last = (node as Paragraph).children[(node as Paragraph).children.length - 1]
    return !!last && attachLabel(last, name)
  }
  return false
}
