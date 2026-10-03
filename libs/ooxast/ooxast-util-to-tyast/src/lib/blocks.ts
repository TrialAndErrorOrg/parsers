/**
 * Block level conversion: paragraphs → headings, lists, figures, tables, boxes, quotes.
 *
 * Works in two passes. `toItems` converts every paragraph/table in document order (inline
 * conversion has side effects: footnotes, citation keys, fields spanning paragraphs). `group`
 * then looks at the converted items together to recognise structures that span several
 * paragraphs: lists, "Figure 1" + title + image (+ note), "Table 1" + title + table, "Box 1" +
 * single-cell table, and the reference list.
 */
import type { Element } from 'xast'
import type {
  Argument,
  BlockContent,
  ContentBlock,
  FunctionCall,
  Heading,
  Label,
  List,
  ListItem,
  Math,
  Paragraph,
  PhrasingContent,
  Value,
} from 'tyast'
import type { State, Where } from './types.js'
import { pAlign, pStyleId, resolveStyle, type ResolvedStyle } from './styles.js'
import { listInfo, type ListInfo } from './numbering.js'
import { inlineContent, isImage, unwrapFull, type ImageData } from './inline.js'
import { attr, child, kids, plainText, slug, text, trimInline } from './util.js'
import { tableItem, tableBlocks, type TableItem } from './table.js'

export interface ParaItem {
  kind: 'p'
  el: Element
  style: ResolvedStyle
  /** plain text, trimmed */
  text: string
  content: PhrasingContent[]
  list?: ListInfo
  align?: string
  /** set when the paragraph contains nothing but images */
  images?: FunctionCall[]
  /** a paragraph that is entirely bold (or a heading style) */
  bold: boolean
}

export interface BlocksItem {
  kind: 'blocks'
  nodes: BlockContent[]
}

export type Item = ParaItem | TableItem | BlocksItem

/** Convert block elements (paragraphs, tables) all the way to tyast. */
export function blocks(state: State, elements: Element[], where: Where): BlockContent[] {
  return group(state, toItems(state, elements, where), where)
}

// ---------------------------------------------------------------------------------------------
// Pass 1
// ---------------------------------------------------------------------------------------------

export function toItems(state: State, elements: Element[], where: Where): Item[] {
  const items: Item[] = []
  for (const el of elements) {
    switch (el.name) {
      case 'w:p':
        items.push(...paragraphItems(state, el, where))
        break
      case 'w:tbl': {
        const table = tableItem(state, el)
        // `#table(columns: 0)` does not compile
        if (!table.rows.some((row) => row.cells.length)) {
          state.warn('Skipped an empty table (it has no cells)')
          break
        }
        items.push(table)
        break
      }
      case 'w:sdt':
        items.push(...toItems(state, kids(child(el, 'w:sdtContent')), where))
        break
      case 'w:customXml':
      case 'w:ins':
      case 'w:moveTo':
        items.push(...toItems(state, kids(el), where))
        break
      case 'm:oMathPara':
        items.push({ kind: 'blocks', nodes: [mathBlock(el, state)] })
        break
      default:
        // w:sectPr, w:bookmarkStart, w:del, …
        break
    }
  }
  return items
}

function mathBlock(el: Element, state: State): Math {
  const wrapper: Element = { type: 'element', name: 'w:p', attributes: {}, children: [el] }
  const content = inlineContent(state, wrapper)
  return (
    (content.find((n) => n.type === 'math') as Math) ?? { type: 'math', value: '', block: true }
  )
}

function paragraphItems(state: State, p: Element, where: Where): Item[] {
  const style = resolveStyle(pStyleId(p), state.styles)
  const content = trimInline(inlineContent(state, p))
  const textValue = plainText(p).replace(/\s+/g, ' ').trim()

  for (const { matcher, handler } of state.paragraphHandlers) {
    if (!matches(matcher, p, style)) continue
    const result = handler(state, p, { style, text: textValue, content, where })
    if (result) return [{ kind: 'blocks', nodes: result }]
  }

  const item: ParaItem = {
    kind: 'p',
    el: p,
    style,
    text: textValue,
    content,
    align: pAlign(p),
    bold: isAllBold(content),
  }
  if (style.role !== 'heading' && style.role !== 'title') item.list = listInfo(p, state.numbering)

  const meaningful = content.filter(
    (n) => !(n.type === 'text' && !n.value.trim()) && n.type !== 'linebreak',
  )
  if (meaningful.length && meaningful.every(isImage)) item.images = meaningful as FunctionCall[]

  // display math splits a paragraph
  if (content.some((n) => n.type === 'math' && n.block)) {
    const out: Item[] = []
    let current: PhrasingContent[] = []
    const flush = () => {
      const trimmed = trimInline(current)
      if (trimmed.length)
        out.push({ ...item, content: trimmed, images: undefined, list: undefined })
      current = []
    }
    for (const n of content) {
      if (n.type === 'math' && n.block) {
        flush()
        out.push({ kind: 'blocks', nodes: [n] })
      } else current.push(n)
    }
    flush()
    return out
  }
  return [item]
}

function matches(
  matcher: State['paragraphHandlers'][number]['matcher'],
  p: Element,
  style: ResolvedStyle,
) {
  if (typeof matcher === 'string') return matcher === style.name || matcher === style.id
  if (Array.isArray(matcher))
    return matcher.includes(style.name) || (!!style.id && matcher.includes(style.id))
  return !!matcher(p, style)
}

function isAllBold(content: PhrasingContent[]): boolean {
  const meaningful = content.filter((n) => !(n.type === 'text' && !n.value.trim()))
  return meaningful.length > 0 && meaningful.every((n) => n.type === 'strong')
}

// ---------------------------------------------------------------------------------------------
// Pass 2
// ---------------------------------------------------------------------------------------------

const LABEL_RE =
  // eslint-disable-next-line regexp/no-super-linear-backtracking -- short paragraph text only
  /^(Figure|Fig\.|Table|Box|Abbildung|Abb\.|Tabelle|Tab\.)\s+([A-Z]?\d+[a-z]?)(\s*[.:—–-]\s*|\s+|$)(.*)$/is

const KIND: Record<string, 'figure' | 'table' | 'box'> = {
  figure: 'figure',
  'fig.': 'figure',
  abbildung: 'figure',
  'abb.': 'figure',
  table: 'table',
  tabelle: 'table',
  'tab.': 'table',
  box: 'box',
}

const REFERENCE_HEADINGS = new Set([
  'references',
  'reference list',
  'bibliography',
  'literature',
  'literature cited',
  'works cited',
  'literatur',
  'literaturverzeichnis',
])

const isEmptyPara = (item: Item) => item.kind === 'p' && !item.content.length && !item.images

export function group(state: State, allItems: Item[], where: Where): BlockContent[] {
  const items = allItems.filter((it) => !isEmptyPara(it))
  const out: BlockContent[] = []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (item.kind === 'blocks') {
      out.push(...item.nodes)
      continue
    }

    if (item.kind === 'table') {
      out.push(...tableBlocks(state, item, { where }))
      continue
    }

    // captioned figures, tables, boxes
    if (where === 'body' || where === 'box') {
      const captioned = captionedObject(state, items, i, where)
      if (captioned) {
        out.push(...captioned.nodes)
        i = captioned.end
        continue
      }
      if (item.images) {
        out.push(...figure(state, [item.images], undefined, undefined, undefined))
        continue
      }
    }

    // headings
    if (
      item.style.role === 'heading' ||
      item.style.role === 'title' ||
      item.style.role === 'subtitle'
    ) {
      if (where !== 'body') {
        // a heading inside a cell/box/note: bold text (keep its own formatting if it has any)
        const formatted = unwrapFull(item.content) !== item.content
        out.push(paragraph(formatted ? item.content : [{ type: 'strong', children: item.content }]))
        continue
      }
      const name = item.text.toLowerCase().replace(/[.:]$/, '').trim()
      if (REFERENCE_HEADINGS.has(name)) {
        const end = referenceList(state, items, i, out)
        i = end
        continue
      }
      out.push(heading(state, item))
      continue
    }

    // lists
    if (item.list) {
      const run: ParaItem[] = []
      let j = i
      while (j < items.length) {
        const candidate = items[j]
        if (candidate.kind !== 'p' || !candidate.list) break
        run.push(candidate)
        j++
      }
      out.push(...buildLists(state, run))
      i = j - 1
      continue
    }

    if (item.style.role === 'quote') {
      out.push({
        type: 'call',
        name: 'quote',
        args: [{ type: 'argument', name: 'block', value: { type: 'code', value: 'true' } }],
        body: [item.content],
      })
      continue
    }

    if (item.style.role === 'bibliography' && where === 'body') {
      // reference entries without a "References" heading
      const end = referenceList(state, items, i - 1, out, true)
      i = end
      continue
    }

    out.push(paragraph(item.content))
  }
  return out
}

export function paragraph(children: PhrasingContent[]): Paragraph {
  return { type: 'paragraph', children }
}

function heading(state: State, item: ParaItem): Heading {
  const depth = Math.min(6, Math.max(1, (item.style.level ?? 1) + state.options.headingOffset))
  const content = unwrapFull(item.content)
  // a manual number ("1. Introduction", "2.3 Methods"): JOTE headings are unnumbered
  const first = content[0]
  if (first?.type === 'text') {
    const stripped = first.value.replace(/^\s*(\d+(\.\d+)*\.?|[IVX]+\.)\s+(?=\S)/, '')
    if (stripped !== first.value) content[0] = { ...first, value: stripped }
  }
  return { type: 'heading', depth, children: content }
}

// ---------------------------------------------------------------------------------------------
// References
// ---------------------------------------------------------------------------------------------

/**
 * A "References" heading and the entries below it. When citations were found the generated
 * bibliography replaces the list; otherwise the entries are kept with a hanging indent.
 * Returns the index of the last consumed item.
 */
function referenceList(
  state: State,
  items: Item[],
  headingIndex: number,
  out: BlockContent[],
  noHeading = false,
): number {
  const head = noHeading ? undefined : (items[headingIndex] as ParaItem)
  const level = head?.style.level ?? 1
  const entries: ParaItem[] = []
  let j = headingIndex + 1
  for (; j < items.length; j++) {
    const it = items[j]
    if (it.kind !== 'p') break
    if (
      (it.style.role === 'heading' && (it.style.level ?? 1) <= level) ||
      it.style.role === 'title'
    )
      break
    if (it.style.role === 'heading' && !it.text) continue
    entries.push(it)
  }

  const replace = state.citations.size > 0 || !state.options.keepReferenceList
  if (!replace && entries.length) {
    if (head) out.push(heading(state, head))
    out.push({
      type: 'call',
      name: 'block',
      args: [],
      body: [
        [
          {
            type: 'set',
            name: 'par',
            args: [
              { type: 'argument', name: 'hanging-indent', value: { type: 'code', value: '1.5em' } },
              {
                type: 'argument',
                name: 'first-line-indent',
                value: { type: 'code', value: '0pt' },
              },
              { type: 'argument', name: 'justify', value: { type: 'code', value: 'false' } },
            ],
          },
          {
            type: 'set',
            name: 'text',
            args: [{ type: 'argument', name: 'size', value: { type: 'code', value: '0.9em' } }],
          },
          ...entries.map((e) => paragraph(e.content)),
        ] as never,
      ],
    })
  } else if (!replace && head) {
    out.push(heading(state, head))
  } else if (entries.length && state.citations.size === 0) {
    state.warn('Dropped the reference list (keepReferenceList: false)')
  }
  return j - 1
}

// ---------------------------------------------------------------------------------------------
// Lists
// ---------------------------------------------------------------------------------------------

/** Nest list paragraphs by their indentation (which is what the reader sees), not `ilvl`. */
function buildLists(state: State, run: ParaItem[]): BlockContent[] {
  const roots: List[] = []
  const stack: Array<{ indent: number; list: List; numId: string }> = []

  for (const item of run) {
    const info = item.list!
    while (stack.length && stack[stack.length - 1].indent > info.indent) stack.pop()
    let top = stack[stack.length - 1]
    const li: ListItem = { type: 'listItem', children: [paragraph(item.content)] }

    const key = `${info.numId}:${info.ilvl}`
    const counter = info.ordered
      ? (state.listCounters.get(key) ?? (info.level?.start ?? 1) - 1) + 1
      : 0
    if (info.ordered) state.listCounters.set(key, counter)

    if (
      top &&
      top.indent === info.indent &&
      top.list.ordered === info.ordered &&
      (!info.ordered || top.numId === info.numId)
    ) {
      top.list.children.push(li)
      continue
    }
    if (top && top.indent === info.indent) {
      stack.pop()
      top = stack[stack.length - 1]
    }
    const list: List = { type: 'list', ordered: info.ordered, tight: true, children: [li] }
    if (info.ordered) {
      if (counter !== 1) list.start = counter
      if (info.pattern && info.pattern !== '1.') list.numbering = info.pattern
    }
    if (top) {
      const lastItem = top.list.children[top.list.children.length - 1]
      lastItem.children.push(list)
    } else {
      roots.push(list)
    }
    stack.push({ indent: info.indent, list, numId: info.numId })
  }
  return roots
}

// ---------------------------------------------------------------------------------------------
// Figures, captioned tables, boxes
// ---------------------------------------------------------------------------------------------

interface Caption {
  kind: 'figure' | 'table' | 'box'
  number: string
  /** caption text after the label, if on the same paragraph */
  rest: PhrasingContent[]
  hasRest: boolean
}

/** "Figure 1", "Table 2: Title", "Box 3." */
function captionLabel(item: Item): Caption | undefined {
  if (item.kind !== 'p' || item.images || item.list) return undefined
  if (item.text.length > 2500) return undefined
  const m = item.text.match(LABEL_RE)
  if (!m) return undefined
  const kind = KIND[m[1].toLowerCase()]
  if (!kind) return undefined
  const rest = m[4].trim()
  return {
    kind,
    number: m[2],
    rest: rest ? stripLabel(item.content) : [],
    hasRest: !!rest,
  }
}

const LABEL_PREFIX_RE =
  /^\s*(Figure|Fig\.|Table|Box|Abbildung|Abb\.|Tabelle|Tab\.)\s+([A-Z]?\d+[a-z]?)\s*[.:—–-]?\s*/i

/** Remove the "Figure 1." label from the start of inline content. */
function stripLabel(content: PhrasingContent[]): PhrasingContent[] {
  const flat = unwrapFirstStrong(content)
  let acc = ''
  let k = 0
  while (k < flat.length && flat[k].type === 'text') {
    acc += (flat[k] as { value: string }).value
    k++
    const m = acc.match(LABEL_PREFIX_RE)
    if (m && m[0].length < acc.length) break
  }
  const m = acc.match(LABEL_PREFIX_RE)
  if (!m) return content
  return trimInline([text(acc.slice(m[0].length)), ...flat.slice(k)])
}

/** The label is usually bold: flatten a leading strong so it can be cut. */
function unwrapFirstStrong(content: PhrasingContent[]): PhrasingContent[] {
  const out: PhrasingContent[] = []
  let done = false
  for (const node of content) {
    if (!done && (node.type === 'strong' || node.type === 'emphasis')) {
      out.push(...(node.children as PhrasingContent[]))
      done = true
    } else {
      if (node.type !== 'text' || node.value.trim()) done = true
      out.push(node)
    }
  }
  return out
}

const NOTE_RE = /^(?:Notes?|Source|Sources|Anmerkungen?|Quelle)\s*[.:]/i

function nextIndex(items: Item[], from: number): number {
  return from < items.length ? from : -1
}

function captionedObject(
  state: State,
  items: Item[],
  i: number,
  where: Where,
): { nodes: BlockContent[]; end: number } | undefined {
  const item = items[i]

  // caption below an image/table: [object] [Figure 1: Title]
  if (item.kind === 'p' && item.images) {
    const next = items[i + 1]
    const label = next && captionLabel(next)
    if (
      label &&
      label.kind === 'figure' &&
      (label.hasRest || (next as ParaItem).style.role === 'caption')
    ) {
      return {
        nodes: figure(state, [item.images], label.rest, label.number, undefined),
        end: i + 1,
      }
    }
    return undefined
  }

  const label = captionLabel(item)
  if (!label) return undefined
  const isCaptionStyle = item.kind === 'p' && item.style.role === 'caption'
  if (
    label.hasRest &&
    !isCaptionStyle &&
    !/[.:—–-]/.test((item as ParaItem).text.match(LABEL_RE)?.[3] ?? '')
  ) {
    // "Figure 1 shows …" is a sentence, not a caption
    return undefined
  }

  let j = i + 1
  let title = label.rest
  if (!label.hasRest) {
    const candidate = items[j]
    if (
      candidate &&
      candidate.kind === 'p' &&
      !candidate.images &&
      !captionLabel(candidate) &&
      candidate.text.length < 500
    ) {
      title = unwrapFull(candidate.content)
      j++
    }
  } else {
    title = unwrapFull(title)
  }

  const object = items[nextIndex(items, j)]
  if (!object) return undefined

  if (label.kind === 'figure') {
    const images: FunctionCall[][] = []
    while (j < items.length) {
      const it = items[j]
      if (it.kind === 'p' && it.images) {
        images.push(it.images)
        j++
        continue
      }
      break
    }
    if (!images.length) {
      // caption below a table labelled "Figure"? give up
      return undefined
    }
    const note = noteAt(items, j)
    if (note) j++
    return { nodes: figure(state, images, title, label.number, note?.content), end: j - 1 }
  }

  if (object.kind !== 'table') return undefined
  j++
  const note = noteAt(items, j)
  if (note) j++

  if (label.kind === 'box') {
    return {
      nodes: tableBlocks(state, object, {
        where,
        box: { title: [text(`Box ${label.number}`)], subtitle: title, note: note?.content },
      }),
      end: j - 1,
    }
  }

  return {
    nodes: tableBlocks(state, object, {
      where,
      caption: { title, number: label.number, note: note?.content },
    }),
    end: j - 1,
  }
}

function noteAt(items: Item[], j: number): ParaItem | undefined {
  const it = items[j]
  if (it && it.kind === 'p' && NOTE_RE.test(it.text)) return it
  return undefined
}

/**
 * Build a `figure(…)` (or `wide-figure`) around images. `rows` holds one entry per Word
 * paragraph: images in the same paragraph sit side by side, paragraphs are stacked.
 */
export function figure(
  state: State,
  rows: FunctionCall[][],
  caption: PhrasingContent[] | undefined,
  number: string | undefined,
  note: PhrasingContent[] | undefined,
): BlockContent[] {
  const data = (img: FunctionCall) => (img.data as { image: ImageData }).image
  const rowWidth = (row: FunctionCall[]) => row.reduce((a, img) => a + (data(img).width ?? 0), 0)
  const maxWidth = Math.max(0, ...rows.map(rowWidth))
  const wide =
    state.options.wideFigures === 'always' ||
    (state.options.wideFigures === 'auto' && maxWidth > Math.min(300, state.textWidth * 0.6))

  // scale down if the figure would not fit on a page
  const targetWidth = wide ? FULL_WIDTH : COLUMN_WIDTH
  const rowHeight = (row: FunctionCall[]) =>
    Math.max(
      0,
      ...row.map((img) => {
        const d = data(img)
        return d.height && d.width ? (d.height / d.width) * (targetWidth / row.length) : 0
      }),
    )
  const totalHeight = rows.reduce((a, row) => a + rowHeight(row), 0)
  const scale = totalHeight > MAX_FIGURE_HEIGHT ? MAX_FIGURE_HEIGHT / totalHeight : 1

  const rowValues: Value[] = rows.map((row) => {
    if (row.length === 1) return sizedImage(row[0], data(row[0]), scale)
    // side by side, each in its own grid cell
    return {
      type: 'call',
      name: 'grid',
      args: [
        { type: 'argument', name: 'columns', value: { type: 'code', value: String(row.length) } },
        { type: 'argument', name: 'gutter', value: { type: 'code', value: '0.5em' } },
        ...row.map(
          (img) => ({ type: 'argument', value: sizedImage(img, data(img), scale) } as Argument),
        ),
      ],
    }
  })
  const imageBody: Value =
    rowValues.length === 1
      ? rowValues[0]
      : {
          type: 'call',
          name: 'stack',
          args: [
            { type: 'argument', name: 'spacing', value: { type: 'code', value: '0.5em' } },
            ...rowValues.map((s) => ({ type: 'argument', value: s } as Argument)),
          ],
        }

  const body: Value = note
    ? {
        type: 'contentBlock',
        children: [imageBody as FunctionCall, noteBlock(note)],
      }
    : imageBody

  if (!caption?.length && !number) {
    // an uncaptioned image: not a numbered figure
    const align: FunctionCall = {
      type: 'call',
      name: 'align',
      args: [
        { type: 'argument', value: { type: 'code', value: 'center' } },
        { type: 'argument', value: body },
      ],
    }
    return [align]
  }

  state.counters.figure++
  const args: Argument[] = [{ type: 'argument', value: body }]
  if (caption?.length) {
    args.push({
      type: 'argument',
      name: 'caption',
      value: { type: 'contentBlock', children: caption },
    })
  }
  if (number && number !== String(state.counters.figure)) {
    args.push({
      type: 'argument',
      name: 'numbering',
      value: { type: 'code', value: `(..) => ${JSON.stringify(number)}` },
    })
  }
  const call: FunctionCall = { type: 'call', name: wide ? 'wide-figure' : 'figure', args }
  const nodes: BlockContent[] = [call]
  if (number) nodes.push(labelNode(`fig:${number}`) as never)
  return nodes
}

export function labelNode(name: string): Label {
  return { type: 'label', name: slug(name) }
}

/** Approximate JOTE text/column widths and the tallest figure that fits a page (pt) */
const FULL_WIDTH = 470
const COLUMN_WIDTH = 230
const MAX_FIGURE_HEIGHT = 560

function sizedImage(img: FunctionCall, data: ImageData, scale: number): FunctionCall {
  const args: Argument[] = [img.args[0]]
  args.push({
    type: 'argument',
    name: 'width',
    value: { type: 'code', value: `${Math.max(10, Math.round(scale * 100))}%` },
  })
  if (data.alt)
    args.push({ type: 'argument', name: 'alt', value: { type: 'string', value: data.alt } })
  return { type: 'call', name: 'image', args }
}

export function noteBlock(note: PhrasingContent[]): FunctionCall {
  return {
    type: 'call',
    name: 'block',
    args: [{ type: 'argument', name: 'width', value: { type: 'code', value: '100%' } }],
    body: [
      [
        {
          type: 'call',
          name: 'align',
          args: [{ type: 'argument', value: { type: 'code', value: 'left' } }],
          body: [
            [
              {
                type: 'call',
                name: 'text',
                args: [
                  { type: 'argument', name: 'size', value: { type: 'code', value: '0.85em' } },
                ],
                body: [note],
              },
            ],
          ],
        },
      ],
    ],
  }
}

/** Finalize images that sit inside running text: `box(image(…, height: …))`. */
export function inlineImages(nodes: PhrasingContent[]): PhrasingContent[] {
  return nodes.map((n) => {
    if (isImage(n)) {
      const data = (n.data as { image: ImageData }).image
      const height = data.height ? Math.min(data.height, 40) : 12
      return {
        type: 'call',
        name: 'box',
        args: [
          {
            type: 'argument',
            value: {
              type: 'call',
              name: 'image',
              args: [
                n.args[0],
                {
                  type: 'argument',
                  name: 'height',
                  value: { type: 'code', value: `${Math.round(height * 10) / 10}pt` },
                },
              ],
            },
          },
        ],
      } as FunctionCall
    }
    if ((n.type === 'strong' || n.type === 'emphasis') && n.children) {
      return { ...n, children: inlineImages(n.children as PhrasingContent[]) }
    }
    if (n.type === 'call' && n.body) {
      return { ...n, body: n.body.map((b) => inlineImages(b as PhrasingContent[])) }
    }
    return n
  })
}

export type { ContentBlock, ImageData }
export { attr }
