/**
 * Paragraph content (runs, fields, hyperlinks, notes, images, math) → typast phrasing content.
 */
import type { Element } from 'xast'
import type { FunctionCall, Math, PhrasingContent, Text } from 'typast'
import type { Field, FormattingHandler, State } from './types.js'
import { attr, child, find, isEl, kids, ownText, plainText, text, emuToPt, isOn } from './util.js'
import { classifyField, citationNodes, hyperlinkTarget } from './citations.js'
import { ommlToTypst } from './math.js'
import { noteContent } from './notes.js'

/** Image placeholder data, finalized by the block layer (figure vs. inline). */
export interface ImageData {
  path: string
  /** natural size in pt, from the drawing extent */
  width?: number
  height?: number
  alt?: string
  /** floating (`wp:anchor`) rather than inline */
  anchored?: boolean
}

export function isImage(
  node: PhrasingContent,
): node is FunctionCall & { data: { image: ImageData } } {
  return (
    node.type === 'call' && node.name === 'image' && !!(node.data as { image?: ImageData })?.image
  )
}

export const defaultFormattingHandlers: Record<string, FormattingHandler> = {
  b: (content) => [{ type: 'strong', children: content }],
  i: (content) => [{ type: 'emphasis', children: content }],
  u: (content, prop) => (attr(prop, 'w:val') === 'none' ? content : [call('underline', content)]),
  strike: (content) => [call('strike', content)],
  dstrike: (content) => [call('strike', content)],
  vertAlign: (content, prop) => {
    const val = attr(prop, 'w:val')
    if (val === 'superscript') return [call('super', content)]
    if (val === 'subscript') return [call('sub', content)]
    return content
  },
  smallCaps: (content) => [call('smallcaps', content)],
  caps: (content) => [call('upper', content)],
}

/** Order in which run properties wrap the text: first = innermost */
const FORMAT_ORDER = [
  'vertAlign',
  'smallCaps',
  'caps',
  'highlight',
  'color',
  'u',
  'strike',
  'dstrike',
  'i',
  'b',
]

function call(name: string, content: PhrasingContent[]): FunctionCall {
  return { type: 'call', name, args: [], body: [content] }
}

/**
 * Convert the inline content of a paragraph (or any run container). Output lands in
 * `state.out`, except while a capturing field is open.
 */
export function inlineContent(state: State, container: Element): PhrasingContent[] {
  const previous = state.out
  const out: PhrasingContent[] = []
  state.out = out
  walk(state, container)
  state.out = previous
  return normalizeInline(out)
}

/** The array content should currently be written to. */
function sink(state: State): PhrasingContent[] {
  for (let i = state.fields.length - 1; i >= 0; i--) {
    const field = state.fields[i]
    if (field.phase === 'instr') return field.result // dropped anyway
    if (field.kind === 'pass') continue
    return field.result
  }
  return state.out
}

function emit(state: State, ...nodes: PhrasingContent[]) {
  sink(state).push(...nodes)
}

function walk(state: State, node: Element) {
  for (const k of kids(node)) {
    switch (k.name) {
      case 'w:pPr':
      case 'w:rPr':
      case 'w:del':
      case 'w:moveFrom':
      case 'w:proofErr':
      case 'w:bookmarkStart':
      case 'w:bookmarkEnd':
      case 'w:commentRangeStart':
      case 'w:commentRangeEnd':
      case 'w:permStart':
      case 'w:permEnd':
      case 'w:sectPr':
        break
      case 'w:r':
        run(state, k)
        break
      case 'w:hyperlink':
        hyperlink(state, k)
        break
      case 'w:fldSimple':
        fldSimple(state, k)
        break
      case 'm:oMathPara':
        emit(state, mathPara(k))
        break
      case 'm:oMath':
        emit(state, { type: 'math', value: ommlToTypst(k), block: false })
        break
      default:
        // w:ins, w:smartTag, w:customXml, w:sdt/w:sdtContent, w:moveTo, w:dir, w:bdo, …
        walk(state, k)
    }
  }
}

function mathPara(el: Element): Math {
  const lines = kids(el)
    .filter((k) => k.name === 'm:oMath')
    .map((m) => ommlToTypst(m))
  return { type: 'math', value: lines.join(' \\ '), block: true }
}

function run(state: State, r: Element) {
  const rPr = child(r, 'w:rPr')
  let pieces: PhrasingContent[] = []
  const flush = () => {
    if (!pieces.length) return
    emit(state, ...format(state, pieces, rPr))
    pieces = []
  }

  for (const k of kids(r)) {
    switch (k.name) {
      case 'w:rPr':
        break
      case 'w:t':
        pieces.push(text(ownText(k)))
        break
      case 'w:tab':
      case 'w:ptab':
        pieces.push(text(' '))
        break
      case 'w:br': {
        const type = attr(k, 'w:type')
        if (type === 'page' || type === 'column') break
        pieces.push({ type: 'linebreak' })
        break
      }
      case 'w:cr':
        pieces.push({ type: 'linebreak' })
        break
      case 'w:noBreakHyphen':
        pieces.push(text('‑'))
        break
      case 'w:softHyphen':
        pieces.push(text('­'))
        break
      case 'w:sym': {
        const char = symbolChar(k)
        if (char) pieces.push(text(char))
        break
      }
      case 'w:fldChar':
        flush()
        fldChar(state, k)
        break
      case 'w:instrText': {
        const top = state.fields[state.fields.length - 1]
        if (top && top.phase === 'instr') top.instr += ownText(k)
        break
      }
      case 'w:footnoteReference':
      case 'w:endnoteReference': {
        flush()
        const note = noteContent(
          state,
          k.name === 'w:footnoteReference' ? 'footnotes' : 'endnotes',
          attr(k, 'w:id'),
        )
        if (note) emit(state, note)
        break
      }
      case 'w:drawing':
      case 'w:pict':
      case 'w:object': {
        flush()
        const img = image(state, k)
        if (img) emit(state, img)
        break
      }
      case 'mc:AlternateContent': {
        flush()
        // prefer the fallback (usually a VML picture) only if the choice has no picture
        const choice = child(k, 'mc:Choice')
        const fallback = child(k, 'mc:Fallback')
        const img = (choice && image(state, choice)) || (fallback && image(state, fallback))
        if (img) emit(state, img)
        break
      }
      default:
        // w:footnoteRef/w:endnoteRef (the mark inside the note), w:delText, w:lastRenderedPageBreak, …
        break
    }
  }
  flush()
}

/** Apply run formatting to converted text. */
function format(
  state: State,
  content: PhrasingContent[],
  rPr: Element | undefined,
): PhrasingContent[] {
  const props = new Map<string, Element>()
  // character style (e.g. "Strong", "Emphasis")
  const rStyle = attr(child(rPr, 'w:rStyle'), 'w:val')
  if (rStyle) {
    const style = state.styles.get(rStyle)
    const name = (style?.name ?? rStyle).toLowerCase()
    if (style?.bold || name === 'strong')
      props.set('b', { type: 'element', name: 'w:b', attributes: {}, children: [] })
    if (style?.italic || name === 'emphasis')
      props.set('i', { type: 'element', name: 'w:i', attributes: {}, children: [] })
  }
  for (const prop of kids(rPr)) {
    props.set(prop.name.replace(/^\w+:/, ''), prop)
  }
  if (!content.some((n) => n.type !== 'text' || n.value !== '')) return []

  const names = [...props.keys()].sort((a, b) => order(a) - order(b))
  let result = content
  for (const name of names) {
    const prop = props.get(name)!
    const handler = state.formattingHandlers[name]
    if (!handler) continue
    if (['b', 'i', 'strike', 'dstrike', 'smallCaps', 'caps'].includes(name) && !isOn(prop)) continue
    result = handler(result, prop, state)
  }
  return result
}

function order(name: string) {
  const i = FORMAT_ORDER.indexOf(name)
  return i < 0 ? -1 : i
}

function symbolChar(sym: Element): string | undefined {
  const code = attr(sym, 'w:char')
  if (!code) return undefined
  let n = parseInt(code, 16)
  if (Number.isNaN(n)) return undefined
  const font = (attr(sym, 'w:font') ?? '').toLowerCase()
  if (n >= 0xf000) n -= 0xf000
  if (font.includes('symbol')) {
    const greek = 'ΑΒΧΔΕΦΓΗΙϑΚΛΜΝΟΠΘΡΣΤΥςΩΞΨΖ'
    const lower = 'αβχδεφγηιϕκλμνοπθρστυϖωξψζ'
    if (n >= 0x41 && n <= 0x5a) return greek[n - 0x41]
    if (n >= 0x61 && n <= 0x7a) return lower[n - 0x61]
    const extra: Record<number, string> = {
      0xb1: '±',
      0xb4: '×',
      0xb8: '÷',
      0xa3: '≤',
      0xb3: '≥',
      0xb9: '≠',
      0xbb: '≈',
      0xae: '→',
      0xac: '←',
      0xb7: '•',
      0xa5: '∞',
      0xb6: '∂',
      0xd6: '√',
      0xe5: '∑',
      0xf2: '∫',
      0xb0: '°',
      0xd7: '·',
      0xc5: '⊕',
      0xc4: '⊗',
      0xce: '∈',
      0xcf: '∉',
      0xc7: '∩',
      0xc8: '∪',
    }
    return extra[n] ?? String.fromCharCode(n)
  }
  if (font.includes('wingdings')) {
    const wing: Record<number, string> = {
      0x6c: '●',
      0xa7: '▪',
      0xfc: '✓',
      0xfb: '✗',
      0xa8: '☐',
      0xfe: '☑',
      0xe0: '→',
      0xd8: '➢',
    }
    return wing[n] ?? '•'
  }
  return String.fromCharCode(n)
}

// ---------------------------------------------------------------------------------------------
// Fields
// ---------------------------------------------------------------------------------------------

function fldChar(state: State, el: Element) {
  const type = attr(el, 'w:fldCharType')
  if (type === 'begin') {
    state.fields.push({ instr: '', phase: 'instr', result: [] })
    return
  }
  const top = state.fields[state.fields.length - 1]
  if (!top) return
  if (type === 'separate') {
    top.phase = 'result'
    top.kind = resolveKind(state, top.instr)
    return
  }
  if (type === 'end') {
    state.fields.pop()
    finishField(state, top)
  }
}

function resolveKind(state: State, instr: string): Field['kind'] {
  const kind = classifyField(instr)
  // a bibliography field is replaced by the generated bibliography, but only if there is one
  if (kind === 'bibliography' && state.citations.size === 0) return 'pass'
  return kind
}

function finishField(state: State, field: Field) {
  if (field.phase === 'instr') {
    // no result part: nothing was displayed
    return
  }
  switch (field.kind) {
    case 'citation': {
      const displayed = field.result.map(stringify).join('')
      const nodes = citationNodes(state, field.instr, displayed)
      emit(state, ...(nodes ?? field.result))
      return
    }
    case 'hyperlink': {
      const url = hyperlinkTarget(field.instr)
      const result = url ? link(url, normalizeInline(field.result)) : undefined
      if (result) emit(state, result)
      else if (!url) emit(state, ...field.result)
      return
    }
    case 'bibliography':
      return
    default:
      return
  }
}

function fldSimple(state: State, el: Element) {
  const instr = attr(el, 'w:instr') ?? ''
  const field: Field = { instr, phase: 'result', kind: resolveKind(state, instr), result: [] }
  state.fields.push(field)
  walk(state, el)
  state.fields.pop()
  finishField(state, field)
}

/** Text of converted inline content (for comparing citation display text). */
export function stringify(node: PhrasingContent): string {
  if (node.type === 'text') return node.value
  if ('children' in node && Array.isArray(node.children))
    return (node.children as PhrasingContent[]).map(stringify).join('')
  if (node.type === 'call')
    return (node.body ?? [])
      .flat()
      .map((n) => stringify(n as PhrasingContent))
      .join('')
  return ''
}

// ---------------------------------------------------------------------------------------------
// Hyperlinks
// ---------------------------------------------------------------------------------------------

function hyperlink(state: State, el: Element) {
  const rId = attr(el, 'r:id')
  const url = rId ? state.relations[rId] : undefined
  const previous = state.out
  const fields = state.fields
  const content: PhrasingContent[] = []
  state.out = content
  state.fields = []
  walk(state, el)
  state.out = previous
  state.fields = fields
  const normalized = normalizeInline(content)
  if (!url) {
    emit(state, ...normalized)
    return
  }
  const result = link(url, normalized)
  if (result) emit(state, result)
}

/**
 * `#link("url")[content]`, or `#link("url")` when the content is just the URL. Returns nothing
 * for a link without any content (Word leaves those behind, e.g. Zotero's Google Docs link).
 */
export function link(url: string, content: PhrasingContent[]): FunctionCall | undefined {
  const shown = content.map(stringify).join('').trim()
  const hasOther = content.some((n) => n.type !== 'text' && n.type !== 'linebreak')
  const args: FunctionCall['args'] = [{ type: 'argument', value: { type: 'string', value: url } }]
  if (!shown && !hasOther) return undefined
  if (
    !hasOther &&
    (shown === url || `mailto:${shown}` === url || shown === url.replace(/^https?:\/\//, ''))
  ) {
    return { type: 'call', name: 'link', args }
  }
  return { type: 'call', name: 'link', args, body: [content] }
}

// ---------------------------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------------------------

/** Formats Typst 0.15 reads (checked: EMF works, TIFF/BMP do not) */
export const TYPST_IMAGE = /\.(?:png|jpe?g|gif|svg|webp|pdf|emf)$/i

function image(state: State, el: Element): FunctionCall | undefined {
  const blip = find(el, 'a:blip')
  const imagedata = find(el, 'v:imagedata')
  const rId = attr(blip, 'r:embed') ?? attr(blip, 'r:link') ?? attr(imagedata, 'r:id')
  if (!rId) {
    if (find(el, (e) => e.name === 'c:chart' || e.name === 'wps:wsp' || e.name === 'wpg:wgp')) {
      state.warn('Skipped a chart or drawing shape without an image')
    }
    return undefined
  }
  const target = state.relations[rId]
  if (!target) {
    state.warn(`Image relation ${rId} not found`)
    return undefined
  }
  if (/^https?:/.test(target)) {
    state.warn(`Linked (not embedded) image ${target} skipped`)
    return undefined
  }

  const source = resolveTarget(target)
  const name = source.split('/').pop() ?? source
  // `docx-to-vfile` puts the docx's images on `file.data.media`; a relation pointing at a file
  // that is not in the archive would make the Typst build fail, so drop it. (An empty object
  // means the docx was read with `withoutMedia`; then nothing can be checked.)
  const available = state.file?.data.media as Record<string, unknown> | undefined
  if (available && Object.keys(available).length > 0 && !(source in available)) {
    state.warn(`Image ${source} is missing from the docx; skipped`)
    return undefined
  }
  const path = `${state.options.mediaDir}/${name}`
  if (!state.media.has(source)) state.media.set(source, { source, path })
  if (!TYPST_IMAGE.test(name)) {
    state.warn(
      `Image ${name} has a format Typst cannot read; a placeholder is shown until it is converted to PNG or SVG`,
    )
  }

  const extent = find(el, 'wp:extent')
  const cx = parseInt(attr(extent, 'cx') ?? '', 10)
  const cy = parseInt(attr(extent, 'cy') ?? '', 10)
  const docPr = find(el, 'wp:docPr')
  const alt = attr(docPr, 'descr') || undefined
  const data: ImageData = {
    path,
    width: Number.isFinite(cx) ? emuToPt(cx) : vmlSize(find(el, 'v:shape'), 'width'),
    height: Number.isFinite(cy) ? emuToPt(cy) : vmlSize(find(el, 'v:shape'), 'height'),
    alt,
    anchored: !!find(el, 'wp:anchor'),
  }
  return {
    type: 'call',
    name: 'image',
    args: [{ type: 'argument', value: { type: 'string', value: path } }],
    data: { image: data },
  }
}

function vmlSize(shape: Element | undefined, prop: 'width' | 'height'): number | undefined {
  const style = attr(shape, 'style')
  const m = style?.match(new RegExp(`${prop}:\\s*([\\d.]+)(pt|in|px)?`))
  if (!m) return undefined
  const n = parseFloat(m[1])
  return m[2] === 'in' ? n * 72 : m[2] === 'px' ? n * 0.75 : n
}

/** `media/image1.png` / `../media/x.png` / `/word/media/x.png` → `word/media/x.png` */
function resolveTarget(target: string): string {
  if (target.startsWith('/')) return target.slice(1)
  const parts = ['word', ...target.split('/')]
  const out: string[] = []
  for (const p of parts) {
    if (p === '..') out.pop()
    else if (p && p !== '.') out.push(p)
  }
  return out.join('/')
}

// ---------------------------------------------------------------------------------------------
// Normalization
// ---------------------------------------------------------------------------------------------

const MERGEABLE_CALLS = new Set([
  'super',
  'sub',
  'underline',
  'strike',
  'smallcaps',
  'upper',
  'highlight',
])

/**
 * Tidy converted inline content: merge adjacent text and identically formatted runs (Word
 * splits runs at every edit), move edge whitespace out of formatting, drop empty formatting.
 */
export function normalizeInline(nodes: PhrasingContent[]): PhrasingContent[] {
  let out: PhrasingContent[] = []
  for (const original of nodes) {
    let node = original
    if (node.type === 'strong' || node.type === 'emphasis') {
      node = { ...node, children: normalizeInline(node.children as PhrasingContent[]) }
    } else if (node.type === 'call' && MERGEABLE_CALLS.has(node.name) && node.body?.length === 1) {
      node = { ...node, body: [normalizeInline(node.body[0] as PhrasingContent[])] }
    }
    out.push(...hoistWhitespace(node))
  }

  // merge neighbours
  const merged: PhrasingContent[] = []
  for (let i = 0; i < out.length; i++) {
    const node = out[i]
    const prev = merged[merged.length - 1]
    if (prev && node.type === 'text' && prev.type === 'text') {
      merged[merged.length - 1] = { ...prev, value: prev.value + node.value }
      continue
    }
    if (prev && sameWrapper(prev, node)) {
      merged[merged.length - 1] = mergeWrappers(prev, node, [])
      continue
    }
    // wrapper, whitespace, same wrapper → one wrapper
    const next = out[i + 1]
    if (
      prev &&
      next &&
      node.type === 'text' &&
      !node.value.trim() &&
      node.value.length > 0 &&
      sameWrapper(prev, next)
    ) {
      merged[merged.length - 1] = mergeWrappers(prev, next, [node])
      i++
      continue
    }
    merged.push(node)
  }
  out = merged
  return out.filter((n) => !(n.type === 'text' && n.value === '') && !isEmptyWrapper(n))
}

function wrapperChildren(node: PhrasingContent): PhrasingContent[] | undefined {
  if (node.type === 'strong' || node.type === 'emphasis') return node.children as PhrasingContent[]
  if (node.type === 'call' && MERGEABLE_CALLS.has(node.name) && node.body?.length === 1) {
    return node.body[0] as PhrasingContent[]
  }
  return undefined
}

function sameWrapper(a: PhrasingContent, b: PhrasingContent): boolean {
  if (a.type !== b.type) return false
  if (a.type === 'strong' || a.type === 'emphasis') return true
  if (a.type === 'call' && b.type === 'call') {
    return (
      a.name === b.name &&
      MERGEABLE_CALLS.has(a.name) &&
      a.body?.length === 1 &&
      b.body?.length === 1 &&
      JSON.stringify(a.args) === JSON.stringify(b.args)
    )
  }
  return false
}

function mergeWrappers(
  a: PhrasingContent,
  b: PhrasingContent,
  between: PhrasingContent[],
): PhrasingContent {
  const children = normalizeInline([...wrapperChildren(a)!, ...between, ...wrapperChildren(b)!])
  if (a.type === 'call') return { ...a, body: [children] }
  return { ...(a as { type: 'strong' }), children } as PhrasingContent
}

function isEmptyWrapper(node: PhrasingContent): boolean {
  const children = wrapperChildren(node)
  return !!children && children.length === 0
}

/** `*␣bold␣*` → `␣*bold*␣` */
function hoistWhitespace(node: PhrasingContent): PhrasingContent[] {
  const children = wrapperChildren(node)
  if (!children || !children.length) return [node]
  const inner = [...children]
  let lead = ''
  let trail = ''
  const first = inner[0]
  if (first.type === 'text') {
    const m = first.value.match(/^\s+/)
    if (m) {
      lead = m[0]
      inner[0] = { ...first, value: first.value.slice(lead.length) }
    }
  }
  const lastIndex = inner.length - 1
  const last = inner[lastIndex]
  if (last.type === 'text') {
    const m = last.value.match(/\s+$/)
    if (m && m[0].length < last.value.length) {
      trail = m[0]
      inner[lastIndex] = { ...last, value: last.value.slice(0, -trail.length) }
    } else if (m && lastIndex > 0) {
      trail = m[0]
      inner[lastIndex] = { ...last, value: '' }
    }
  }
  const cleaned = inner.filter((n) => !(n.type === 'text' && n.value === ''))
  const wrapped: PhrasingContent =
    node.type === 'call'
      ? { ...node, body: [cleaned] }
      : ({ ...node, children: cleaned } as PhrasingContent)
  const out: PhrasingContent[] = []
  if (lead) out.push(text(lead) as Text)
  if (cleaned.length) out.push(wrapped)
  if (trail) out.push(text(trail) as Text)
  return out
}

/** Remove formatting that covers a whole paragraph (bold headings, italic captions). */
export function unwrapFull(
  nodes: PhrasingContent[],
  types: Array<'strong' | 'emphasis'> = ['strong', 'emphasis'],
): PhrasingContent[] {
  let current = nodes
  for (;;) {
    const meaningful = current.filter((n) => !(n.type === 'text' && !n.value.trim()))
    if (meaningful.length !== 1) return current
    const only = meaningful[0]
    if ((only.type === 'strong' || only.type === 'emphasis') && types.includes(only.type)) {
      current = only.children as PhrasingContent[]
      continue
    }
    return current
  }
}

export { isEl, plainText }
