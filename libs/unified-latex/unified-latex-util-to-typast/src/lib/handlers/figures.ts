import type * as Ast from '@unified-latex/unified-latex-types'
import type { Content, FunctionCall, Value } from 'typast'
import { arg, asBlock, call, code, content, named, str, text } from '../build.js'
import type { State } from '../state.js'
import type { EnvironmentHandler, LabelKind, MacroHandler } from '../types.js'
import {
  args,
  convertLength,
  isStarred,
  envArgs,
  envName,
  labelName,
  lastArg,
  parseKeyVals,
  plainText,
  rawText,
} from '../util.js'

// ---------------------------------------------------------------------------
// \includegraphics
// ---------------------------------------------------------------------------

function defaultResolve(path: string): string {
  return /\.[a-z\d]+$/i.test(path) ? path : `${path}.png`
}

/** `trim=l b r t` lengths (default unit bp) as Typst lengths. */
function trimLengths(raw: string): string[] | undefined {
  const parts = raw.trim().split(/\s+/)
  if (parts.length !== 4) return undefined
  const out = parts.map((p) => (/^-?[\d.]+$/.test(p) ? `${Number(p)}pt` : convertLength(p)))
  return out.every(Boolean) ? (out as string[]) : undefined
}

export const includegraphics: MacroHandler = (node, state) => {
  const a = args(node)
  const opts = parseKeyVals(a[1])
  const rawPath = plainText(lastArg(node)).trim()
  const path = (state.options.resolveImage ?? defaultResolve)(rawPath)
  const width = opts.has('width') ? convertLength(rawText(opts.get('width'))) : undefined
  const height = opts.has('height') ? convertLength(rawText(opts.get('height'))) : undefined
  const alt = opts.has('alt') ? plainText(opts.get('alt')).replace(/\s+/g, ' ').trim() : undefined
  if (opts.has('width') && !width)
    state.warn(`Could not convert image width \`${rawText(opts.get('width'))}\``, node)
  if (opts.has('height') && !height)
    state.warn(`Could not convert image height \`${rawText(opts.get('height'))}\``, node)

  const trimRaw = opts.get('trim') ?? opts.get('viewport')
  if (trimRaw && opts.has('clip') && opts.has('trim')) {
    const trim = trimLengths(rawText(trimRaw))
    if (trim) return cropped(path, trim, width, alt)
    state.warn(`Could not convert image trim \`${rawText(trimRaw)}\``, node)
  }

  // with keepaspectratio, LaTeX scales to fit inside width × height
  const both = width && height
  let image: FunctionCall = call('image', [
    arg(str(path)),
    named('width', width ? code(width) : undefined),
    named('height', height ? code(height) : undefined),
    both && opts.has('keepaspectratio') ? named('fit', str('contain')) : undefined,
    named('alt', alt ? str(alt) : undefined),
  ])
  if (opts.has('scale') && !width && !height) {
    const factor = Number(rawText(opts.get('scale')))
    if (Number.isFinite(factor)) {
      image = call('scale', [
        arg(code(`${Math.round(factor * 1000) / 10}%`)),
        arg(code('true'), 'reflow'),
        arg(image),
      ])
    }
  }
  if (opts.has('angle')) {
    const angle = Number(rawText(opts.get('angle')))
    if (Number.isFinite(angle) && angle !== 0) {
      // LaTeX rotates counter-clockwise, Typst clockwise
      image = call('rotate', [arg(code(`${-angle}deg`)), arg(code('true'), 'reflow'), arg(image)])
    }
  }
  return image
}

/** An image with LaTeX-style `trim=… , clip`: measured at layout time and clipped in a box. */
function cropped(
  path: string,
  [l, b, r, t]: string[],
  width: string | undefined,
  alt: string | undefined,
) {
  const w = !width
    ? `nat.width - ${l} - ${r}`
    : width.endsWith('%')
      ? `size.width * ${Number(width.slice(0, -1)) / 100}`
      : width
  const p = JSON.stringify(path)
  const altArg = alt ? `, alt: ${JSON.stringify(alt)}` : ''
  const expr =
    `layout(size => { let nat = measure(image(${p})); let w = ${w}; ` +
    `let s = w / (nat.width - ${l} - ${r}); ` +
    `box(clip: true, width: w, height: (nat.height - ${t} - ${b}) * s, ` +
    `place(top + left, dx: -${l} * s, dy: -${t} * s, image(${p}, width: nat.width * s, height: nat.height * s${altArg}))) })`
  return call('box', [arg(code(expr))])
}

// ---------------------------------------------------------------------------
// Floats
// ---------------------------------------------------------------------------

/** Wrappers whose content is part of the float body as-is */
const TRANSPARENT_ENVS = new Set([
  'center',
  'adjustbox',
  'fullwidth',
  'threeparttable',
  'minipage',
  'flushleft',
  'flushright',
  'small',
  'footnotesize',
])
const TRANSPARENT_MACROS = new Set(['resizebox', 'scalebox', 'adjustbox'])
const HOISTED_MACROS = new Set([
  'section',
  'subsection',
  'subsubsection',
  'paragraph',
  'renewcommand',
  'newpage',
  'clearpage',
])
const IGNORED_MACROS = new Set([
  'centering',
  'raggedright',
  'RaggedRight',
  'raggedleft',
  'noindent',
  'FloatBarrier',
  'hfill',
  'par',
])

interface Collected {
  caption?: Ast.Node[]
  captionKind?: string
  labels: string[]
  body: Ast.Node[]
  hoisted: Ast.Node[]
  subfigures: Ast.Environment[]
  /** number of tabular-like environments found */
  tables: number
  images: number
  /** the caption comes before any graphics/table (it is set above them) */
  captionFirst?: boolean
  /** the float's content is in the class' `fullwidth` environment */
  fullwidth?: boolean
}

const TABULARS = new Set(['tabular', 'tabular*', 'tabularx', 'tabulary', 'longtable', 'longtabu'])

function collect(nodes: Ast.Node[], acc: Collected) {
  for (const node of nodes) {
    if (node.type === 'macro') {
      const name = node.content
      // \caption* is an unnumbered caption: in practice a note under the table/figure
      if (name === 'caption' && isStarred(node)) {
        acc.body.push(node)
        continue
      }
      if ((name === 'caption' || name === 'captionof') && !acc.caption) {
        acc.caption = lastArg(node)
        acc.captionFirst = acc.images === 0 && acc.tables === 0 && acc.subfigures.length === 0
        if (name === 'captionof') acc.captionKind = plainText(args(node)[1]).trim()
        continue
      }
      if (name === 'label') {
        const l = labelName(plainText(lastArg(node)))
        if (l) acc.labels.push(l)
        continue
      }
      if (HOISTED_MACROS.has(name)) {
        acc.hoisted.push(node)
        continue
      }
      if (IGNORED_MACROS.has(name)) continue
      if (TRANSPARENT_MACROS.has(name)) {
        collect(lastArg(node), acc)
        continue
      }
      if (name === 'includegraphics') acc.images++
      acc.body.push(node)
      continue
    }
    if (node.type === 'environment') {
      const name = envName(node)
      if (name === 'subfigure' || name === 'subtable') {
        acc.subfigures.push(node)
        continue
      }
      // a minipage of plain text (a table note) keeps its own, justified paragraphs
      if (name === 'minipage' && isTextOnly(node.content)) {
        acc.body.push(node)
        continue
      }
      if (TRANSPARENT_ENVS.has(name)) {
        if (name === 'fullwidth') acc.fullwidth = true
        if (name === 'adjustbox') envArgs(node, 'm')
        if (name === 'minipage') envArgs(node, 'o o o m')
        if (name === 'threeparttable') envArgs(node, 'o')
        collect(node.content, acc)
        continue
      }
      if (TABULARS.has(name)) acc.tables++
      acc.body.push(node)
      continue
    }
    if (node.type === 'group') {
      collect(node.content, acc)
      continue
    }
    acc.body.push(node)
  }
}

/** Turn converted body content into a single figure argument value. */
function bodyValue(blocks: Content[]): Value {
  if (blocks.length === 1) {
    const only = blocks[0]
    if (only.type === 'call') return only
    if (
      only.type === 'paragraph' &&
      only.children.length === 1 &&
      only.children[0].type === 'call'
    ) {
      return only.children[0]
    }
  }
  return content(blocks)
}

function registerLabels(
  state: State,
  labels: string[],
  kind: LabelKind,
  node: Ast.Node,
): string | undefined {
  const [first, ...rest] = labels
  for (const l of labels)
    if (!state.labels.has(l)) state.labels.set(l, { kind: l === first ? kind : 'other' })
  if (rest.length) state.warn(`Float has several labels; only <${first}> is attached`, node)
  return first
}

function subfigure(
  env: Ast.Environment,
  index: number,
  state: State,
): { call: FunctionCall; width?: number } {
  const a = envArgs(env, 'o o o m')
  const width = convertLength(rawText(a[3]))
  const acc: Collected = { labels: [], body: [], hoisted: [], subfigures: [], tables: 0, images: 0 }
  collect(env.content, acc)
  const letter = `(${String.fromCharCode(97 + (index % 26))})`
  const caption = acc.caption ? state.inline(acc.caption) : []
  for (const l of acc.labels) state.labels.set(l, { kind: 'subfigure', text: [text(letter)] })
  // not a nested figure: Typst would count it, and caption show rules expect numbering
  const fig = call('stack', [
    arg(code('0.5em'), 'spacing'),
    arg(bodyValue(state.flow(acc.body))),
    arg(
      call('align', [
        arg(code('center')),
        arg(
          content([call('text', [arg(code('0.9em'), 'size')], [[text(`${letter} `), ...caption]])]),
        ),
      ]),
    ),
  ])
  const pct = width?.endsWith('%') ? Number(width.slice(0, -1)) : undefined
  return { call: fig, width: pct }
}

interface FloatOptions {
  kind: 'image' | 'table'
  wide: boolean
  /** whether the float may move (`placement: auto`) */
  floating: boolean
}

function buildFloat(nodes: Ast.Node[], env: Ast.Node, opts: FloatOptions, state: State): Content[] {
  const acc: Collected = { labels: [], body: [], hoisted: [], subfigures: [], tables: 0, images: 0 }
  collect(nodes, acc)
  let kind = opts.kind
  if (acc.captionKind === 'table') kind = 'table'
  if (acc.captionKind === 'figure') kind = 'image'
  if (kind === 'image' && acc.tables > 0 && acc.images === 0 && acc.subfigures.length === 0)
    kind = 'table'

  const hoisted = state.flow(acc.hoisted)

  state.labelContext.push(kind === 'table' ? 'table' : 'figure')
  let value: Value
  if (acc.subfigures.length > 0) {
    const subs = acc.subfigures.map((s, i) => subfigure(s, i, state))
    const widest = Math.max(...subs.map((s) => s.width ?? 50))
    const columns = Math.max(1, Math.min(subs.length, Math.floor(100 / Math.max(widest, 1))))
    value = call('grid', [
      arg(code(String(columns)), 'columns'),
      arg(code('1em'), 'gutter'),
      ...subs.map((s) => arg(s.call)),
    ])
  } else {
    value = bodyValue(state.flow(acc.body))
  }
  const caption = acc.caption ? state.inline(acc.caption) : undefined
  state.labelContext.pop()

  const label = registerLabels(state, acc.labels, kind === 'table' ? 'table' : 'figure', env)
  // captions go where they are in the source: Typst (and the template) put figure captions
  // below and table captions above by default
  const defaultTop = kind === 'table'
  const captionValue: Value | undefined = !caption
    ? undefined
    : acc.captionFirst === defaultTop
      ? content(caption)
      : call(
          'figure.caption',
          [arg(code(acc.captionFirst ? 'top' : 'bottom'), 'position')],
          [caption],
        )
  const figure = asBlock(
    call(opts.wide ? 'wide-figure' : 'figure', [
      arg(value),
      named('caption', captionValue),
      kind === 'table' ? named('kind', code('table')) : undefined,
      !caption ? named('numbering', code('none')) : undefined,
      // the template floats figures by default; a \captionof figure stays in the text flow
      !opts.wide && state.inLandscape === 0
        ? named('placement', code(opts.floating ? 'auto' : 'none'))
        : undefined,
    ]),
  )
  if (label) (figure.data as Record<string, unknown>).label = label
  // `fullwidth`: the framed box reaching into the left margin. An in-flow float goes in it
  // with its caption; a floating one keeps the box inside the figure.
  if (acc.fullwidth) {
    if (!opts.floating) return [...hoisted, asBlock(call('fullwidth', [], [[figure]]))]
    const args = figure.args
    args[0] = arg(call('fullwidth', [], [[valueToContent(args[0].value)]]))
  }
  return [...hoisted, figure]
}

function valueToContent(value: Value): Content {
  if (value.type === 'contentBlock') return asBlock(call('block', [], [value.children]))
  return value as Content
}

const floatEnv =
  (kind: 'image' | 'table', wide: boolean): EnvironmentHandler =>
  (node, state) => {
    const a = envArgs(node, 'o')
    const placement = plainText(a[0])
    const floating = !/^[h]!?$/i.test(placement.trim())
    if (kind === 'table') state.inTableEnv++
    try {
      return buildFloat(node.content, node, { kind, wide, floating }, state)
    } finally {
      if (kind === 'table') state.inTableEnv--
    }
  }

function containsCaptionof(nodes: Ast.Node[]): boolean {
  return nodes.some(
    (n) =>
      (n.type === 'macro' && n.content === 'captionof') ||
      (n.type === 'environment' &&
        TRANSPARENT_ENVS.has(envName(n)) &&
        containsCaptionof(n.content)),
  )
}

/** No captions, labels, graphics, tables or nested floats: just paragraphs. */
function isTextOnly(nodes: Ast.Node[]): boolean {
  return nodes.every((n) => {
    if (n.type === 'macro')
      return !['caption', 'captionof', 'label', 'includegraphics'].includes(n.content)
    if (n.type === 'environment') {
      const name = envName(n)
      if (TABULARS.has(name) || name === 'subfigure' || name === 'subtable' || name === 'minipage')
        return false
      return isTextOnly(n.content)
    }
    if (n.type === 'group') return isTextOnly(n.content)
    return true
  })
}

export const minipage: EnvironmentHandler = (node, state) => {
  const a = envArgs(node, 'o o o m')
  if (containsCaptionof(node.content)) {
    return buildFloat(node.content, node, { kind: 'image', wide: false, floating: false }, state)
  }
  const width = convertLength(rawText(a[3]))
  const blocks = state.flow(node.content)
  if (state.labelContext.length === 0 && (!width || width === '100%')) return blocks
  // a minipage resets the paragraph shape (\@parboxrestore): justified text, even inside a
  // \centering float, while the box itself is centered there
  const body: Content[] =
    state.labelContext.length > 0
      ? [{ type: 'set', name: 'align', args: [arg(code('left'))] }, ...blocks]
      : blocks
  return asBlock(
    call('block', [width && width !== '100%' ? arg(code(width), 'width') : undefined], [body]),
  )
}

export const captionof: MacroHandler = (node, state) => {
  state.warn('\\captionof outside of a minipage: emitted as an uncounted caption', node)
  return asBlock({ type: 'paragraph', children: state.inline(lastArg(node)) })
}

export const figureEnvironments: Record<string, EnvironmentHandler> = {
  figure: floatEnv('image', false),
  'figure*': floatEnv('image', true),
  table: floatEnv('table', false),
  'table*': floatEnv('table', true),
  wrapfigure: (node, state) => {
    envArgs(node, 'o m o m')
    return buildFloat(node.content, node, { kind: 'image', wide: false, floating: true }, state)
  },
  minipage,
  subfigure: (node, state) => {
    envArgs(node, 'o o o m')
    return buildFloat(node.content, node, { kind: 'image', wide: false, floating: false }, state)
  },
}
