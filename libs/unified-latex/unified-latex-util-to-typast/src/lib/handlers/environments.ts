import type * as Ast from '@unified-latex/unified-latex-types'
import type { Content, List, ListItem } from 'typast'
import { arg, asBlock, call, code, content, math, named, raw, str, text } from '../build.js'
import { texToTypstMath } from '../math.js'
import type { State } from '../state.js'
import type { EnvironmentHandler } from '../types.js'
import {
  args,
  convertLength,
  envArgs,
  envName,
  labelName,
  parseKeyVals,
  plainText,
  printRaw,
  rawText,
  trimNodes,
} from '../util.js'
import { fontSizes } from '../symbols.js'
import { figureEnvironments } from './figures.js'
import { tableEnvironments } from './tables.js'

// ---------------------------------------------------------------------------
// Lists
// ---------------------------------------------------------------------------

interface RawItem {
  label: Ast.Node[] | null
  body: Ast.Node[]
}

/** Split list content on `\item`. unified-latex puts an item's body in its last argument. */
function items(nodes: Ast.Node[]): RawItem[] {
  const out: RawItem[] = []
  for (const node of nodes) {
    if (node.type === 'macro' && node.content === 'item') {
      const label = (node.args ?? []).find((a) => a.openMark === '[')?.content ?? null
      const last = node.args?.[node.args.length - 1]
      const body = last && last.openMark === '' ? last.content : []
      out.push({ label, body: [...body] })
    } else if (out.length > 0) {
      out[out.length - 1].body.push(node)
    }
  }
  return out
}

/** enumitem `label=` for enumerate → Typst numbering pattern */
function numberingPattern(nodes: Ast.Node[]): string | undefined {
  const raw = printRaw(nodes)
  const counters: Record<string, string> = {
    '\\arabic*': '1',
    '\\alph*': 'a',
    '\\Alph*': 'A',
    '\\roman*': 'i',
    '\\Roman*': 'I',
  }
  let found = false
  const pattern = raw.replace(
    /\\(arabic|alph|Alph|roman|Roman)(\{\*\}|\s*\*)?/g,
    (_m, name: string) => {
      found = true
      return counters[`\\${name}*`] ?? '1'
    },
  )
  if (!found) return undefined
  return pattern
    .replace(/[{}]/g, '')
    .replace(/\\[a-zA-Z]+/g, '')
    .trim()
}

const list =
  (ordered: boolean): EnvironmentHandler =>
  (node, state) => {
    const [optArg] = envArgs(node, 'o')
    const opts = parseKeyVals(optArg)
    const raws = items(node.content)
    const depth = state.listDepth + 1
    const convertItem = (item: RawItem): Content[] => {
      state.listDepth = depth
      try {
        return state.body(trimNodes(item.body))
      } finally {
        state.listDepth = depth - 1
      }
    }

    let numbering: string | undefined
    let marker: Content[] | undefined
    const labelOpt = opts.get('label')
    if (labelOpt) {
      if (ordered) numbering = numberingPattern(labelOpt)
      else marker = state.inline(labelOpt)
      if (ordered && !numbering) marker = state.inline(labelOpt)
    }
    const start = opts.has('start') ? Number(rawText(opts.get('start'))) : undefined

    // Typst has no per-item markers: group consecutive items by their custom label
    const segments: { label: Ast.Node[] | null; items: RawItem[] }[] = []
    for (const item of raws) {
      const key = item.label ? printRaw(item.label) : null
      const last = segments[segments.length - 1]
      if (last && (last.label ? printRaw(last.label) : null) === key) last.items.push(item)
      else segments.push({ label: item.label, items: [item] })
    }

    // enumitem `leftmargin=<length>`: the item text starts that far in. With align=left and
    // labelwidth=* (the class' settings) the label ends a label separation before the text.
    const leftmarginRaw = opts.has('leftmargin') ? rawText(opts.get('leftmargin')) : ''
    const leftmargin =
      leftmarginRaw && leftmarginRaw !== '*' ? convertLength(leftmarginRaw) : undefined
    const labelsep = '0.5em'

    const out: Content[] = []
    for (const segment of segments) {
      const plainMarker = segment.label ? state.inline(segment.label) : marker
      // the class sets all list labels in bold (`\setlist{font=\bfseries}`)
      const segMarker =
        plainMarker && plainMarker.length > 0
          ? [{ type: 'strong' as const, children: plainMarker }]
          : plainMarker
      if (segMarker !== undefined) {
        const isEnum = ordered && !segment.label
        const sized = !isEnum && leftmargin !== undefined && !leftmargin.endsWith('%')
        // an outer list's text starts at \leftmargin = \parindent (10pt), whatever the label's
        // width (the class: `\setlist[1]{leftmargin=\parindent, labelsep=*, labelwidth=*}`, so
        // the label sits at the left edge); deeper lists are `leftmargin=*`: the label's own width
        const outer = !isEnum && !sized && depth === 1
        const markerValue = sized
          ? call('box', [
              arg(code(`${leftmargin} - ${labelsep}`), 'width'),
              arg(call('align', [arg(code('right')), arg(content(segMarker))])),
            ])
          : outer
          ? call('box', [arg(code(`10pt - ${labelsep}`), 'width'), arg(content(segMarker))])
          : content(segMarker)
        out.push(
          asBlock(
            call(isEnum ? 'enum' : 'list', [
              isEnum ? undefined : named('marker', markerValue),
              sized || outer ? named('indent', code('0pt')) : undefined,
              sized || outer ? named('body-indent', code(labelsep)) : undefined,
              ...segment.items.map((item) => arg(content(convertItem(item)))),
            ]),
          ),
        )
        continue
      }
      const listNode: List = {
        type: 'list',
        ordered,
        tight: true,
        children: segment.items.map(
          (item): ListItem => ({ type: 'listItem', children: convertItem(item) }),
        ),
      }
      if (numbering) listNode.numbering = numbering
      if (start && start !== 1) listNode.start = start
      out.push(listNode)
    }
    // the parts of a list split on custom labels are one list in LaTeX, without the space
    // around a list between them: the template closes up a list labelled so with the next one
    for (const part of out.slice(0, -1)) {
      if (part.type === 'call')
        ((part as { data?: Record<string, unknown> }).data ??= {}).label = 'jote-list-continues'
    }
    // enumitem `topsep=0pt` / `nosep`: no extra space around the list, so it sits on the line
    // grid like a paragraph. A plain block has the paragraph spacing; the list's own spacing is
    // dropped at the edges of the block.
    if (opts.has('nosep') || (opts.has('topsep') && isZeroLength(rawText(opts.get('topsep'))))) {
      return asBlock(call('block', [], [out]))
    }
    return out
  }

function isZeroLength(raw: string): boolean {
  const n = Number.parseFloat(raw.trim())
  return n === 0
}

const description: EnvironmentHandler = (node, state) => {
  envArgs(node, 'o')
  return items(node.content).map((item) => ({
    type: 'termItem' as const,
    term: item.label ? state.inline(item.label) : [],
    children: state.body(trimNodes(item.body)),
  }))
}

// ---------------------------------------------------------------------------
// Math
// ---------------------------------------------------------------------------

function findLabels(nodes: Ast.Node[]): string[] {
  const out: string[] = []
  for (const n of nodes) {
    if (n.type === 'macro' && n.content === 'label') {
      const last = n.args?.[n.args.length - 1]
      if (last) out.push(labelName(plainText(last.content)))
    } else if ('content' in n && Array.isArray(n.content)) {
      out.push(...findLabels(n.content as Ast.Node[]))
    }
  }
  return out
}

function mathFrom(tex: string, block: boolean, node: Ast.Node, state: State): Content {
  const result = texToTypstMath(tex)
  if (!result.ok) {
    state.warn(`Could not convert math \`${tex}\`: ${result.error}`, node)
    return call('raw', [arg(str(tex))])
  }
  if (result.unknown.length)
    state.warn(`Unknown math command(s) ${result.unknown.map((u) => `\\${u}`).join(', ')}`, node)
  return math(result.value, block)
}

const ALIGNED: Record<string, string> = {
  align: 'aligned',
  'align*': 'aligned',
  flalign: 'aligned',
  'flalign*': 'aligned',
  alignat: 'aligned',
  'alignat*': 'aligned',
  eqnarray: 'aligned',
  'eqnarray*': 'aligned',
  gather: 'aligned',
  'gather*': 'aligned',
  multline: 'aligned',
  'multline*': 'aligned',
}

const displayMath: EnvironmentHandler = (node, state) => {
  const name = envName(node)
  let tex = printRaw(node.content)
  if (ALIGNED[name]) tex = `\\begin{${ALIGNED[name]}}${tex}\\end{${ALIGNED[name]}}`
  const labels = findLabels(node.content)
  const numbered = !name.endsWith('*') && name !== 'displaymath'
  const eq = mathFrom(tex, true, node, state)
  if (eq.type !== 'math') return asBlock(eq)
  for (const l of labels)
    if (!state.labels.has(l)) state.labels.set(l, { kind: numbered ? 'equation' : 'other' })
  if (!numbered) {
    if (labels[0]) (eq as { data?: Record<string, unknown> }).data = { label: labels[0] }
    return eq
  }
  // numbered: scope an equation numbering to this one equation
  const label = labels[0] ? ` <${labels[0]}>` : ''
  return asBlock(raw(`#[#set math.equation(numbering: "(1)")\n$ ${eq.value} $${label}\n]`))
}

// ---------------------------------------------------------------------------
// Boxes and floats from the class
// ---------------------------------------------------------------------------

const box =
  (width: 'column' | 'wide' | 'full'): EnvironmentHandler =>
  (node, state) => {
    const [title] = envArgs(node, 'o')
    const titleContent = title && plainText(title).trim() ? state.inline(title) : undefined
    return asBlock(
      call(
        'jote-box',
        [
          named('title', titleContent ? content(titleContent) : undefined),
          arg(str(width), 'width'),
        ],
        [state.flow(node.content)],
      ),
    )
  }

const wrapEnv =
  (name: string, args: Parameters<typeof call>[1] = []): EnvironmentHandler =>
  (node, state) =>
    asBlock(call(name, args, [state.flow(node.content)]))

const transparent: EnvironmentHandler = (node, state) => state.flow(node.content)

const drop: EnvironmentHandler = () => undefined

export const environmentHandlers: Record<string, EnvironmentHandler> = {
  ...figureEnvironments,
  ...tableEnvironments,

  document: transparent,
  frontmatter: (node, state) => {
    // only metadata/abstract live here; convert for side effects
    state.flow(node.content)
    return undefined
  },
  abstract: (node, state) => {
    const meaningful = trimNodes(node.content).filter(
      (n) =>
        !(n.type === 'macro' && (n.content === 'printabstracttext' || n.content === 'noindent')),
    )
    if (
      meaningful.some(
        (n) => n.type !== 'whitespace' && n.type !== 'parbreak' && n.type !== 'comment',
      )
    ) {
      state.meta.abstractEnv = node.content
    }
    return undefined
  },

  itemize: list(false),
  tabitemize: list(false),
  compactitem: list(false),
  enumerate: list(true),
  compactenum: list(true),
  description: description,

  quote: wrapEnv('quote', [arg(code('true'), 'block')]),
  quotation: wrapEnv('quote', [arg(code('true'), 'block')]),
  quoting: wrapEnv('quote', [arg(code('true'), 'block')]),
  verse: wrapEnv('quote', [arg(code('true'), 'block')]),
  epigraph: (node, state) => {
    const [source] = envArgs(node, 'm')
    return asBlock(
      call('epigraph', [arg(content(state.inline(source ?? [])))], [state.flow(node.content)]),
    )
  },
  center: wrapEnv('align', [arg(code('center'))]),
  flushleft: wrapEnv('align', [arg(code('left'))]),
  flushright: wrapEnv('align', [arg(code('right'))]),
  landscape: (node, state) => {
    state.inLandscape++
    const blocks = state.flow(node.content)
    state.inLandscape--
    return asBlock(call('landscape', [], [blocks]))
  },
  adjustbox: (node, state) => {
    envArgs(node, 'm')
    return state.flow(node.content)
  },
  // the class' framed box that reaches into the left margin (template `fullwidth`)
  fullwidth: (node, state) => asBlock(call('fullwidth', [], [state.flow(node.content)])),
  small: (node, state) =>
    asBlock(call('text', [arg(code(fontSizes.small), 'size')], [state.flow(node.content)])),
  footnotesize: (node, state) =>
    asBlock(call('text', [arg(code(fontSizes.footnotesize), 'size')], [state.flow(node.content)])),
  multicols: (node, state) => {
    const [n] = envArgs(node, 'm')
    const count = Number(plainText(n)) || 2
    return asBlock(call('columns', [arg(code(String(count)))], [state.flow(node.content)]))
  },

  rightWide: box('wide'),
  leftWide: box('wide'),
  fullWide: box('full'),
  jotebox: box('column'),
  takeHomeMessage: wrapEnv('take-home'),
  originalPurpose: wrapEnv('original-purpose'),
  companion: wrapEnv('companion'),
  invitation: wrapEnv('invitation'),
  reviewend: (node, state) => {
    const [title] = envArgs(node, 'm')
    state.warn('Peer-review boxes are rendered as plain jote-box', node)
    return asBlock(
      call(
        'jote-box',
        [arg(content([text('Reviewer: '), ...state.inline(title ?? [])]), 'title')],
        [state.flow(node.content)],
      ),
    )
  },

  tikzpicture: (node, state) => {
    const overlay = pageOverlay(node, state)
    if (overlay) return overlay
    state.warn('tikzpicture is not supported and was dropped', node)
    return undefined
  },
  comment: drop,

  equation: displayMath,
  'equation*': displayMath,
  align: displayMath,
  'align*': displayMath,
  flalign: displayMath,
  'flalign*': displayMath,
  alignat: displayMath,
  'alignat*': displayMath,
  gather: displayMath,
  'gather*': displayMath,
  multline: displayMath,
  'multline*': displayMath,
  eqnarray: displayMath,
  'eqnarray*': displayMath,
  displaymath: displayMath,
  math: (node, state) => mathFrom(printRaw(node.content), false, node, state),

  verbatim: (node) => ({ type: 'raw', value: printRaw(node.content), block: true }),
  lstlisting: (node) => ({ type: 'raw', value: printRaw(node.content), block: true }),
  minted: (node) => ({ type: 'raw', value: printRaw(node.content), block: true }),

  // special (non-environment) nodes, dispatched by State.special
  '#inlinemath': (node, state) => mathFrom(printRaw(node.content), false, node, state),
  '#displaymath': (node, state) => {
    const eq = mathFrom(printRaw(node.content), true, node, state)
    return eq.type === 'math' ? eq : asBlock(eq)
  },
  '#verbatim': (node) => ({
    type: 'raw',
    value: (node as unknown as Ast.VerbatimEnvironment).content,
    block: true,
  }),
  '#verb': (node) => ({ type: 'raw', value: (node as unknown as Ast.Verb).content }),

  // unknown environment: keep content, warn
  '*': (node, state) => {
    state.unknownCommand(`environment ${envName(node)}`, node)
    return state.flow(node.content)
  },
}

export { convertLength, args }

/**
 * The one kind of tikzpicture JOTE articles use: a `remember picture, overlay` picture with a
 * single `\node[anchor=north west] at ([xshift=…, yshift=…]current page.north west) {…}`,
 * e.g. a correction notice at the top of the first page. It becomes text placed at that
 * position of the page.
 */
function pageOverlay(node: Ast.Environment, state: State): Content[] | undefined {
  const source = printRaw(node.content)
  if (!/overlay/.test(printRaw(node.args ?? []) + source)) return undefined
  const at = source.match(
    /\\node\s*\[([^\]]*)\]\s*at\s*\(\s*\[([^\]]*)\]\s*current page\.north west\s*\)/,
  )
  if (!at || !/anchor\s*=\s*north west/.test(at[1])) return undefined
  const shift = (key: string) => at[2].match(new RegExp(`${key}\\s*=\\s*([^,]+)`))?.[1] ?? '0pt'
  const dx = convertLength(shift('xshift'))
  const dy = convertLength(shift('yshift'))
  const body = [...node.content].reverse().find((n): n is Ast.Group => n.type === 'group')
  if (!dx || !dy || !body) return undefined
  // a `place` without vertical alignment sits at the current position, so offset it from there
  // to the page position (TikZ's y axis points up)
  return [
    asBlock(
      raw(`#context { let p = here().position(); place(dx: ${dx} - p.x, dy: -(${dy}) - p.y)[`),
    ),
    ...state.flow(body.content),
    asBlock(raw('] }')),
  ]
}
