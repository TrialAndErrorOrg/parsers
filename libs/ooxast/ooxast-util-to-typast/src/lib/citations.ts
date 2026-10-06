/**
 * Citation fields (Zotero, Mendeley: `ADDIN … CSL_CITATION {json}`) → `#cite(<key>)`, and the
 * collected CSL items → BibLaTeX for `bibliography.bib`.
 */
import type { Data as CSL } from 'csl-json'
import { cslToBiblatex } from 'csl-to-biblatex'
import type { FunctionCall, PhrasingContent } from 'typast'
import { isValidLabel } from 'typast-util-to-typst'
import type { State } from './types.js'
import { slug, text } from './util.js'

interface CitationItem {
  id?: string | number
  itemData?: CSL
  uris?: string[]
  prefix?: string
  suffix?: string
  locator?: string
  label?: string
  'suppress-author'?: boolean
  'author-only'?: boolean
}

interface CslCitation {
  citationID?: string
  citationItems?: CitationItem[]
  properties?: {
    formattedCitation?: string
    plainCitation?: string
    noteIndex?: number
  }
  mendeley?: {
    formattedCitation?: string
    plainTextFormattedCitation?: string
  }
}

export type FieldKind = 'citation' | 'bibliography' | 'hyperlink' | 'pass'

/** Classify a complex field by its instruction text. */
export function classifyField(instr: string): FieldKind {
  const trimmed = instr.trim()
  if (/CSL_CITATION|^ADDIN\s+ZOTERO_ITEM|^ADDIN\s+Mendeley Citation/i.test(trimmed))
    return 'citation'
  if (
    /CSL_BIBLIOGRAPHY|^ADDIN\s+ZOTERO_BIBL|^ADDIN\s+Mendeley Bibliography|^ADDIN\s+EN\.REFLIST/i.test(
      trimmed,
    )
  ) {
    return 'bibliography'
  }
  if (/^HYPERLINK\b/i.test(trimmed) && /^HYPERLINK\s+"[^"]+"/i.test(trimmed)) return 'hyperlink'
  return 'pass'
}

/** `HYPERLINK "https://…" \l "anchor"` → the URL */
export function hyperlinkTarget(instr: string): string | undefined {
  const m = instr.match(/HYPERLINK\s+"([^"]+)"/i)
  return m?.[1]
}

const LOCATOR_LABELS: Record<string, [string, string]> = {
  page: ['p.', 'pp.'],
  chapter: ['chap.', 'chaps.'],
  section: ['sec.', 'secs.'],
  figure: ['fig.', 'figs.'],
  table: ['tbl.', 'tbls.'],
  paragraph: ['para.', 'paras.'],
  volume: ['vol.', 'vols.'],
  line: ['l.', 'll.'],
  note: ['n.', 'nn.'],
  part: ['pt.', 'pts.'],
  verse: ['v.', 'vv.'],
}

/**
 * Turn the instruction of a citation field into `cite` calls. Returns undefined if the JSON
 * can't be read (the field's displayed text is used instead).
 */
export function citationNodes(
  state: State,
  instr: string,
  displayed: string,
): PhrasingContent[] | undefined {
  const start = instr.indexOf('{')
  const end = instr.lastIndexOf('}')
  if (start < 0 || end < start) return undefined
  let citation: CslCitation
  try {
    citation = JSON.parse(instr.slice(start, end + 1))
  } catch (e) {
    state.warn(
      `Could not parse citation field (${
        (e as Error).message
      }); kept the displayed text "${displayed}"`,
    )
    return undefined
  }
  const items = citation.citationItems ?? []
  if (!items.length) return undefined

  const formatted =
    citation.properties?.formattedCitation ??
    citation.mendeley?.formattedCitation ??
    citation.properties?.plainCitation ??
    displayed
  const plainFormatted = formatted.replace(/<[^>]+>/g, '').trim()
  // "(Smith, 2020)" is parenthetical, "Smith (2020)" narrative
  const narrative = !!plainFormatted && !/^[([]/.test(plainFormatted) && /\(/.test(plainFormatted)

  const out: PhrasingContent[] = []
  const seen = new Set<string>()
  items.forEach((item, index) => {
    const data: CSL =
      item.itemData ?? ({ id: String(item.id ?? `item${index}`), type: 'article' } as CSL)
    const key = keyFor(state, data)
    if (seen.has(key)) return
    seen.add(key)
    if (item.prefix) {
      out.push(text(`${item.prefix.replace(/<[^>]+>/g, '').trim()} `))
    } else if (index > 0 && narrative) {
      out.push(text(index === items.length - 1 ? (items.length > 2 ? ', and ' : ' and ') : ', '))
    }
    out.push(cite(key, item, narrative))
  })
  return out
}

function cite(key: string, item: CitationItem, narrative: boolean): FunctionCall {
  const args: FunctionCall['args'] = [
    {
      type: 'argument',
      value: isValidLabel(key)
        ? { type: 'code', value: `<${key}>` }
        : {
            type: 'call',
            name: 'label',
            args: [{ type: 'argument', value: { type: 'string', value: key } }],
          },
    },
  ]
  const supplement = supplementText(item)
  if (supplement) {
    args.push({
      type: 'argument',
      name: 'supplement',
      value: { type: 'contentBlock', children: [text(supplement)] },
    })
  }
  if (item['suppress-author']) {
    args.push({
      type: 'argument',
      name: 'form',
      value: { type: 'string', value: 'year' },
    })
  } else if (item['author-only']) {
    args.push({
      type: 'argument',
      name: 'form',
      value: { type: 'string', value: 'author' },
    })
  } else if (narrative) {
    args.push({
      type: 'argument',
      name: 'form',
      value: { type: 'string', value: 'prose' },
    })
  }
  return { type: 'call', name: 'cite', args }
}

function supplementText(item: CitationItem): string | undefined {
  const suffix = item.suffix
    ?.replace(/<[^>]+>/g, '')
    .replace(/^[\s,]+/, '')
    .trim()
  if (!item.locator) return suffix || undefined
  const plural = /[-–—,&]/.test(item.locator)
  const label = item.label ?? 'page'
  const names = LOCATOR_LABELS[label]
  const prefix = names ? names[plural ? 1 : 0] : label
  return `${prefix} ${item.locator}${suffix ? ` ${suffix}` : ''}`
}

/** A stable, unique cite key (AuthorYear, AuthorYeara, …) for a CSL item. */
export function keyFor(state: State, data: CSL): string {
  const identity = itemIdentity(data)
  const existing = state.itemKeys.get(identity)
  if (existing) return existing

  const author = data.author?.[0] ?? data.editor?.[0]
  const family = author?.family ?? author?.literal ?? author?.given ?? ''
  const year =
    data.issued?.['date-parts']?.[0]?.[0] ??
    (data.issued?.literal?.match(/\d{4}/)?.[0] as string | undefined)
  let key = slug(`${family.split(/\s+/).pop() ?? ''}${year ?? ''}`)
  if (!key || !/^[A-Z]/i.test(key)) {
    key = `bib${state.citations.size + 1}`
  }
  if (!/\d/.test(key)) key = `${key}nd`

  let unique = key
  let suffix = 0
  while (state.citations.has(unique)) {
    unique = `${key}${String.fromCharCode(97 + (suffix % 26))}${
      suffix >= 26 ? Math.floor(suffix / 26) : ''
    }`
    suffix++
  }
  state.itemKeys.set(identity, unique)
  state.citations.set(unique, { ...data, id: unique })
  return unique
}

function itemIdentity(data: CSL): string {
  if (data.DOI) return `doi:${String(data.DOI).toLowerCase()}`
  const year = data.issued?.['date-parts']?.[0]?.[0] ?? data.issued?.literal ?? ''
  const title = (data.title ?? '').toLowerCase().replace(/\W+/g, '')
  if (title) return `t:${title}:${year}`
  return `id:${data.id}`
}

/**
 * BibLaTeX for a set of CSL items whose `id`s are the cite keys. Uses `csl-to-biblatex`, but
 * keeps our keys (it would otherwise generate its own).
 */
export function toBiblatex(items: CSL[]): string {
  if (!items.length) return ''
  const entries = cslToBiblatex(items.map((item) => sanitizeItem(item))).split('\n\n\n')
  return (
    entries
      .map((entry, i) => entry.replace(/^@(\w+)\{[^,\n]*/, `@$1{${items[i].id}`))
      .join('\n\n') + '\n'
  )
}

/** Strip characters that would break BibLaTeX braces. */
function sanitizeItem(item: CSL): CSL {
  const fix = (s: unknown) =>
    typeof s === 'string'
      ? s
          .replace(/<\/?(i|b|sup|sub|span)[^>]*>/g, '')
          .replace(/[{}]/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      : s
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(item)) {
    if (typeof v === 'string') out[k] = fix(v)
    else if (Array.isArray(v) && (k === 'author' || k === 'editor')) {
      out[k] = (v as unknown as Array<Record<string, unknown>>).map((p) =>
        Object.fromEntries(Object.entries(p).map(([pk, pv]) => [pk, fix(pv)])),
      )
    } else out[k] = v
  }
  return out as unknown as CSL
}
