/**
 * Recognise the front matter of a manuscript — title page and abstract, typically APA style:
 *
 *   Title
 *   Author One¹, Author Two², …
 *   ¹ Affiliation one … ² Affiliation two …
 *   Author Note   (ORCID iDs, funding, correspondence, acknowledgments)
 *   Abstract
 *   Keywords: a, b, c
 *
 * Recognised paragraphs are removed from the body and turned into template arguments;
 * acknowledgments and other author-note text move to an "Acknowledgments" section at the end.
 * Anything not recognised stays where it is.
 */
import type { BlockContent, PhrasingContent } from 'typast-builder/doc'
import type { Item, ParaItem } from './blocks.js'
import { paragraph } from './blocks.js'
import { stringify, unwrapFull } from './inline.js'
import { type JoteArticleMeta, type JoteAuthor, runningAuthorFor } from './meta.js'
import type { State } from './types.js'
import { text, trimInline } from './util.js'

const KEYWORD_HEADINGS: Record<
  string,
  'authornote' | 'abstract' | 'acknowledgments' | 'funding' | 'other'
> = {
  'author note': 'authornote',
  'author notes': 'authornote',
  "authors' note": 'authornote',
  'authors note': 'authornote',
  abstract: 'abstract',
  summary: 'abstract',
  acknowledgments: 'acknowledgments',
  acknowledgements: 'acknowledgments',
  acknowledgment: 'acknowledgments',
  acknowledgement: 'acknowledgments',
  funding: 'funding',
  'conflict of interest': 'other',
  'conflicts of interest': 'other',
  'competing interests': 'other',
}

export interface FrontMatter {
  meta: JoteArticleMeta
  /** body items with the front matter removed */
  items: Item[]
}

const SUP_DIGITS: Record<string, string> = {
  '⁰': '0',
  '¹': '1',
  '²': '2',
  '³': '3',
  '⁴': '4',
  '⁵': '5',
  '⁶': '6',
  '⁷': '7',
  '⁸': '8',
  '⁹': '9',
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.:]+$/, '')
    .replace(/\s+/g, ' ')
    .trim()

/**
 * Headings that open the body of a paper. A manuscript that starts with one of these has no
 * title page, so the heading must stay where it is.
 */
const SECTION_NAMES = new Set([
  'introduction',
  'general introduction',
  'background',
  'theoretical background',
  'background and motivation',
  'motivation',
  'overview',
  'context',
  'preface',
  'foreword',
  'prologue',
  'abstract',
  'summary',
  'executive summary',
  'introduction and background',
  'literature review',
  'related work',
  'theory',
  'theoretical framework',
  'the present study',
  'present study',
  'current study',
  'the current study',
  'aims',
  'aim',
  'objectives',
  'purpose',
  'hypotheses',
  'research questions',
  'method',
  'methods',
  'methodology',
  'materials and methods',
  'methods and materials',
  'participants',
  'results',
  'findings',
  'results and discussion',
  'discussion',
  'general discussion',
  'limitations',
  'conclusion',
  'conclusions',
  'concluding remarks',
  'references',
  'bibliography',
  'appendix',
  'acknowledgments',
  'acknowledgements',
  'original purpose',
  'what went wrong',
  'lessons learned',
  'take-home message',
  'take home message',
])

/** `1. Introduction`, `I Introduction`, `A. Methods` → `introduction`, `methods` */
const sectionName = (s: string) =>
  norm(s)
    .replace(/^(?:\d+(?:\.\d+)*|[ivx]+|[a-h])[.):]?\s+/, '')
    .trim()

export const isSectionName = (s: string) => SECTION_NAMES.has(sectionName(s))

/** Words of a title for comparing it with the title given in the metadata. */
const titleWords = (s: string) =>
  fold(s)
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .split(' ')
    .filter((w) => w.length > 2)

/** Whether the document's title is (roughly) the one given in the metadata. */
function similarTitle(a: string, b: string): boolean {
  const wa = titleWords(a)
  const wb = titleWords(b)
  if (!wa.length || !wb.length) return false
  const ja = wa.join(' ')
  const jb = wb.join(' ')
  if (ja.includes(jb) || jb.includes(ja)) return true
  const sb = new Set(wb)
  const shared = new Set(wa.filter((w) => sb.has(w))).size
  return shared / new Set([...wa, ...wb]).size >= 0.6
}

/** Plain text of rich metadata (a string or inline content). */
function richText(value: unknown): string {
  if (typeof value === 'string') return value
  if (!Array.isArray(value)) return ''
  return value.map((n) => stringify(n as PhrasingContent)).join('')
}

/** An affiliation without markers: a short line naming an institution, not a sentence. */
const INSTITUTION_RE =
  /\b(?:universit|institut|department|dept\b|faculty|college|school|cent(?:er|re)|hospital|clinic|laborator|lab\b|academy|foundation|council|ministry|agency|hochschule|fakult|klinik|inc\b|ltd\b|gmbh|llc\b|corporation|company|research|consortium|independent researcher)/i
const looksLikeAffiliation = (s: string) =>
  s.length < 300 && (INSTITUTION_RE.test(s) || (s.length < 150 && !/[.!?]$/.test(s.trim())))

const isPara = (it: Item | undefined): it is ParaItem => !!it && it.kind === 'p'
const isEmpty = (it: Item) => isPara(it) && !it.content.length && !it.images

export function extractFrontMatter(state: State, items: Item[]): FrontMatter {
  const meta: JoteArticleMeta = {}
  const consumed = new Set<number>()
  const back: ParaItem[] = []

  // the front matter ends at the first "real" heading or table
  let titleIndex = -1
  let end = Math.min(items.length, 120)
  for (let i = 0; i < Math.min(items.length, 120); i++) {
    const it = items[i]
    if (it.kind === 'table') {
      end = i
      break
    }
    if (!isPara(it) || isEmpty(it)) continue
    if (titleIndex < 0) {
      titleIndex = i
      continue
    }
    if (
      it.style.role === 'heading' &&
      !KEYWORD_HEADINGS[norm(it.text)] &&
      !/^key\s?words?\b/i.test(it.text)
    ) {
      end = i
      break
    }
  }
  if (titleIndex < 0) return { meta, items }

  // --- title -------------------------------------------------------------------------------
  const first = items[titleIndex] as ParaItem
  // a manuscript that starts with "Introduction" or the like has no title page at all
  if (
    first.style.role === 'heading' &&
    isSectionName(first.text) &&
    !KEYWORD_HEADINGS[norm(first.text)]
  )
    return { meta, items }
  const givenTitle = richText(state.options.meta?.title)
  const looksLikeTitle =
    first.style.role === 'title' ||
    ((first.style.role === 'heading' || first.align === 'center' || first.bold) &&
      // with a title in the metadata, a heading is only the title if it says (about) the
      // same, or if an author line follows it
      (!givenTitle ||
        similarTitle(first.text, givenTitle) ||
        authorLineFollows(items, titleIndex, end)))
  let i = titleIndex
  if (/^running head\b/i.test(first.text)) {
    consumed.add(i)
  } else if (looksLikeTitle && !KEYWORD_HEADINGS[norm(first.text)]) {
    meta.title = cleanInline(unwrapFull(first.content))
    consumed.add(i)
    // a subtitle directly after the title
    const next = nextNonEmpty(items, i + 1, end)
    if (next >= 0) {
      const sub = items[next] as ParaItem
      if (sub.style.role === 'subtitle' || sub.style.role === 'title') {
        meta.title = [
          ...(meta.title as PhrasingContent[]),
          text(': '),
          ...cleanInline(unwrapFull(sub.content)),
        ]
        consumed.add(next)
        i = next
      }
    }

    // --- authors & affiliations ------------------------------------------------------------
    const authorsIndex = nextNonEmpty(items, i + 1, end)
    const authorsItem = items[authorsIndex] as ParaItem | undefined
    const authors =
      authorsItem && !KEYWORD_HEADINGS[norm(authorsItem.text)]
        ? parseAuthors(authorsItem.content)
        : undefined
    if (authors) {
      meta.authors = authors
      consumed.add(authorsIndex)
      i = authorsIndex
      const affiliations: Array<[number, string]> = []
      for (let j = nextNonEmpty(items, i + 1, end); j >= 0; j = nextNonEmpty(items, j + 1, end)) {
        const it = items[j] as ParaItem
        if (KEYWORD_HEADINGS[norm(it.text)] || it.style.role === 'heading') break
        const parsed = parseAffiliations(it.content)
        if (parsed.length) {
          affiliations.push(...parsed)
          consumed.add(j)
          i = j
          continue
        }
        // no markers: one affiliation for everybody
        if (
          !affiliations.length &&
          authors.every((a) => !a.affiliations?.length) &&
          looksLikeAffiliation(it.text)
        ) {
          affiliations.push([1, it.text])
          authors.forEach((a) => (a.affiliations = [1]))
          consumed.add(j)
          i = j
        }
        break
      }
      if (affiliations.length) {
        const sorted = affiliations.sort((a, b) => a[0] - b[0])
        meta.affiliations = sorted.map(([, a]) => a)
        // renumber in case markers were not 1..n
        const index = new Map(sorted.map(([n], k) => [n, k + 1]))
        for (const a of authors) a.affiliations = a.affiliations?.map((n) => index.get(n) ?? n)
      }
      meta.runningAuthor = runningAuthorFor(authors.map((a) => a.name))
    }
  }

  // --- labelled sections: author note, abstract, keywords ------------------------------------
  let mode: 'none' | 'authornote' | 'abstract' | 'acknowledgments' | 'funding' | 'other' = 'none'
  const abstract: ParaItem[] = []
  for (let j = titleIndex; j < end; j++) {
    const it = items[j]
    if (consumed.has(j) || !isPara(it) || isEmpty(it)) continue
    const label = KEYWORD_HEADINGS[norm(it.text)]
    if (
      label &&
      (it.style.role === 'heading' || it.bold || it.align === 'center' || it.text.length < 40)
    ) {
      mode = label
      consumed.add(j)
      continue
    }
    if (/^running head\b/i.test(it.text)) {
      consumed.add(j)
      continue
    }
    // eslint-disable-next-line regexp/no-super-linear-backtracking -- short paragraph text only
    const kw = it.text.match(/^key\s?words?\s*[:.]\s*(.+)$/i)
    if (kw) {
      meta.keywords = kw[1]
        .split(/[,;]/)
        .map((k) => k.trim().replace(/\.$/, ''))
        .filter(Boolean)
      consumed.add(j)
      mode = 'none'
      continue
    }
    const inlineAbstract = it.text.match(/^abstract\s*[:.]\s+\S/i)
    if (inlineAbstract) {
      abstract.push({
        ...it,
        content: stripPrefix(it.content, /^\s*abstract\s*[:.]\s*/i),
      })
      consumed.add(j)
      mode = 'abstract'
      continue
    }

    switch (mode) {
      case 'abstract':
        abstract.push(it)
        consumed.add(j)
        break
      case 'authornote':
        authorNote(state, it, meta, back)
        consumed.add(j)
        break
      case 'funding':
        meta.funding = cleanInline(it.content)
        consumed.add(j)
        break
      case 'acknowledgments':
      case 'other':
        back.push(it)
        consumed.add(j)
        break
      default:
        break
    }
  }

  if (abstract.length) {
    meta.abstract =
      abstract.length === 1
        ? cleanInline(abstract[0].content)
        : (abstract.map((a) => paragraph(cleanInline(a.content))) as BlockContent[])
  }

  const remaining = items.filter((_, k) => !consumed.has(k))
  if (back.length) {
    // acknowledgments go before the reference list
    const heading: ParaItem = {
      kind: 'p',
      el: { type: 'element', name: 'w:p', attributes: {}, children: [] },
      style: { name: 'heading 1', role: 'heading', level: 1 },
      text: 'Acknowledgments',
      content: [text('Acknowledgments')],
      bold: false,
    }
    const refIndex = remaining.findIndex(
      (it) =>
        isPara(it) &&
        it.style.role === 'heading' &&
        /^(?:references|bibliography|literature|works cited)$/.test(norm(it.text)),
    )
    const at = refIndex < 0 ? remaining.length : refIndex
    remaining.splice(at, 0, heading, ...back)
  }
  return { meta, items: remaining }
}

/** Whether the paragraph after `index` is an author line (`Ann Author¹, Bob Builder²`). */
function authorLineFollows(items: Item[], index: number, end: number): boolean {
  let k = nextNonEmpty(items, index + 1, end)
  if (k >= 0 && /^(?:subtitle|title)$/.test((items[k] as ParaItem).style.role))
    k = nextNonEmpty(items, k + 1, end)
  if (k < 0) return false
  const it = items[k] as ParaItem
  return it.style.role !== 'heading' && !!parseAuthors(it.content)
}

function nextNonEmpty(items: Item[], from: number, end: number): number {
  for (let k = from; k < end; k++) {
    const it = items[k]
    if (it.kind === 'table') return -1
    if (!isEmpty(it)) return k
  }
  return -1
}

/** Drop footnotes/images from front-matter text and trim. */
function cleanInline(content: PhrasingContent[]): PhrasingContent[] {
  return trimInline(
    content
      .filter((n) => !(n.type === 'call' && (n.name === 'image' || n.name === 'box')))
      .map((n) => (n.type === 'linebreak' ? text(' ') : n)),
  )
}

function stripPrefix(content: PhrasingContent[], re: RegExp): PhrasingContent[] {
  const out = [...unwrapFull(content, ['strong'])]
  // the label may be bold: flatten a leading strong
  if (out[0]?.type === 'strong') out.splice(0, 1, ...(out[0].children as PhrasingContent[]))
  let acc = ''
  let k = 0
  while (k < out.length && out[k].type === 'text') {
    acc += (out[k] as { value: string }).value
    k++
    if (re.test(acc) && acc.replace(re, '').length) break
  }
  return trimInline([text(acc.replace(re, '')), ...out.slice(k)])
}

/**
 * Text with superscripts marked as ⟨…⟩: `Florian Kohrt⟨1⟩, Filip Melinscak⟨2⟩`.
 */
function markedText(content: PhrasingContent[]): string {
  const walk = (nodes: PhrasingContent[]): string =>
    nodes
      .map((n) => {
        if (n.type === 'text') return n.value
        if (n.type === 'call' && n.name === 'super')
          return `⟨${(n.body?.[0] ?? []).map((c) => stringify(c as PhrasingContent)).join('')}⟩`
        if (n.type === 'call' && (n.name === 'footnote' || n.name === 'image' || n.name === 'box'))
          return ''
        if (n.type === 'linebreak') return '\n'
        if ('children' in n && Array.isArray(n.children))
          return walk(n.children as PhrasingContent[])
        if (n.type === 'call' && n.body)
          return n.body.map((b) => walk(b as PhrasingContent[])).join('')
        return ''
      })
      .join('')
  return walk(content)
    .replace(
      /[⁰¹²³⁴⁵⁶⁷⁸⁹](?:[⁰¹²³⁴⁵⁶⁷⁸⁹,˒⸴ ]*[⁰¹²³⁴⁵⁶⁷⁸⁹])?/g,
      (m) => `⟨${[...m].map((c) => SUP_DIGITS[c] ?? (c === ' ' ? '' : ',')).join('')}⟩`,
    )
    .replace(/⟩\s*⟨/g, ',')
}

const NAME_RE =
  /^\p{Lu}[\p{L}'’.-]*(?:\s+(?:\p{Lu}[\p{L}'’.-]*|van|von|der|de|den|da|di|du|la|le|ten|ter|del|dos|y))*$/u

export function parseAuthors(content: PhrasingContent[]): JoteAuthor[] | undefined {
  const marked = markedText(content).replace(/\n/g, ', ').trim()
  if (!marked || marked.length > 600 || /[.!?]$/.test(marked.replace(/⟨[^⟩]*⟩$/, '')))
    return undefined
  // split on commas/and/& outside ⟨…⟩
  const parts: string[] = []
  let current = ''
  let depth = 0
  for (let k = 0; k < marked.length; k++) {
    const c = marked[k]
    if (c === '⟨') depth++
    if (c === '⟩') depth--
    if (depth === 0 && (c === ',' || c === ';' || c === '&')) {
      parts.push(current)
      current = ''
      continue
    }
    current += c
  }
  parts.push(current)
  const authors: JoteAuthor[] = []
  for (const raw of parts.flatMap((p) => p.split(/\s+and\s+/))) {
    const part = raw.replace(/^\s*and\s+/, '').trim()
    if (!part) continue
    const markers = [...part.matchAll(/⟨([^⟩]*)⟩/g)]
      .flatMap((m) => m[1].split(/[,\s]+/))
      .filter(Boolean)
    const name = part
      .replace(/⟨[^⟩]*⟩/g, '')
      .replace(/[*†‡§]+/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    if (!NAME_RE.test(name) || name.split(' ').length < 2 || name.split(' ').length > 6)
      return undefined
    const affiliations = markers
      .map((m) =>
        /^\d+$/.test(m) ? parseInt(m, 10) : /^[a-z]$/.test(m) ? m.charCodeAt(0) - 96 : NaN,
      )
      .filter((n) => !Number.isNaN(n))
    authors.push({ name, ...(affiliations.length ? { affiliations } : {}) })
  }
  return authors.length ? authors : undefined
}

export function parseAffiliations(content: PhrasingContent[]): Array<[number, string]> {
  const marked = markedText(content)
  const out: Array<[number, string]> = []
  const re = /⟨([^⟩]+)⟩\s*([^⟨]+)/g
  let m: RegExpExecArray | null
  // plain "1 Department of …" at the start of a paragraph
  const plain = marked.match(/^\s*(\d{1,2})\s+(\p{Lu}.*)$/su)
  if (plain && !marked.includes('⟨')) return [[parseInt(plain[1], 10), clean(plain[2])]]
  while ((m = re.exec(marked))) {
    const marker = m[1].trim()
    const n = /^\d+$/.test(marker)
      ? parseInt(marker, 10)
      : /^[a-z]$/.test(marker)
        ? marker.charCodeAt(0) - 96
        : NaN
    if (Number.isNaN(n)) continue
    const value = clean(m[2])
    if (value) out.push([n, value])
  }
  return out
}

function clean(s: string): string {
  return s
    .replace(/\s+/g, ' ')
    .replace(/^[\s,;]+|[\s,;]+$/g, '')
    .trim()
}

const fold = (s: string) => s.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()

function authorNote(state: State, it: ParaItem, meta: JoteArticleMeta, back: ParaItem[]) {
  const t = it.text
  const orcids = [
    ...t.matchAll(
      // eslint-disable-next-line regexp/no-super-linear-backtracking -- short paragraph text only
      /(\p{Lu}[\p{L}.'’\- ]*?)\s*(?:https?:\/\/)?orcid\.org\/(\d{4}-\d{4}-\d{4}-\d{3}[\dX])/gu,
    ),
  ]
  if (orcids.length) {
    meta.authors ??= []
    for (const [, rawName, id] of orcids) {
      const name = rawName.trim()
      const match = meta.authors.find((a) => {
        const family = fold(a.name.split(' ').pop() ?? '')
        return family && fold(name).includes(family)
      })
      if (match) match.orcid = id
      else if (name && NAME_RE.test(name)) meta.authors.push({ name, orcid: id })
    }
    return
  }
  if (/correspondence/i.test(t)) {
    const email = t.match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/)?.[0]
    // eslint-disable-next-line regexp/no-super-linear-backtracking -- short paragraph text only
    const addressMatch = t.match(/addressed to\s[^,]+,\s*(.+?)\.?\s*(?:E-?mail|Electronic mail|$)/i)
    meta.correspondence = {
      ...(addressMatch ? { address: addressMatch[1].replace(/[,.\s]+$/, '') } : {}),
      ...(email ? { email: email.toLowerCase() === email ? email : email } : {}),
    }
    return
  }
  if (/\b(?:funded|funding|grant|supported by|financ|sponsored)/i.test(t)) {
    meta.funding = cleanInline(it.content)
    return
  }
  back.push(it)
  void state
}
