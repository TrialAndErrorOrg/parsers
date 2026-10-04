/**
 * Article metadata ↔ the arguments of `jote-article.with(…)` in
 * `templates/typst/jote-article/lib.typ`.
 */
import type { Argument, BlockContent, DictEntry, PhrasingContent, ShowRule, Value } from 'typast'

/** Rich text: a plain string, or typast content (inline, or blocks for the abstract). */
export type Rich = string | PhrasingContent[] | BlockContent[]

export interface JoteAuthor {
  name: string
  orcid?: string
  /** 1-based indices into `affiliations` */
  affiliations?: number[]
  email?: string
}

export interface JoteArticleMeta {
  /** cls option (`meta`, `empirical`, …) or a label ("Meta-Research") */
  articleType?: string
  title?: Rich
  footerTitle?: Rich
  authors?: JoteAuthor[]
  affiliations?: Rich[]
  runningAuthor?: string
  correspondence?: { address?: Rich; email?: string }
  journal?: { name?: string; website?: string }
  year?: number | string
  doi?: string
  dates?: {
    received?: string
    revised?: string
    accepted?: string
    published?: string
    publishedIso?: string
    issued?: string
  }
  abstract?: Rich
  keywords?: string[]
  issue?: { volume?: number | string; number?: number | string; pages?: string }
  header?: boolean
  specialIssue?: Rich
  funding?: Rich
  contributions?: Rich
  rgaInfo?: Rich
  review?: { round?: number; originalAuthor?: Rich }
  /** bibliography file name; `false` for none */
  bibliography?: string | false
  oneColumn?: boolean
}

const str = (value: string): Value => ({ type: 'string', value })
const code = (value: string): Value => ({ type: 'code', value })

function rich(value: Rich): Value {
  if (typeof value === 'string')
    return { type: 'contentBlock', children: [{ type: 'text', value }] }
  return { type: 'contentBlock', children: value }
}

function dict(entries: Array<[string, Value | undefined]>): Value {
  return {
    type: 'dict',
    entries: entries
      .filter((e): e is [string, Value] => e[1] !== undefined)
      .map(([key, value]) => ({ key, value } as DictEntry)),
  }
}

function numberOrString(v: number | string): Value {
  return typeof v === 'number' || /^\d+$/.test(v) ? code(String(v)) : str(v)
}

/** `#show: jote-article.with(…)` for the given metadata. Unset fields are left out. */
export function templateShowRule(meta: JoteArticleMeta): ShowRule {
  const args: Argument[] = []
  const add = (name: string, value: Value | undefined) => {
    if (value !== undefined) args.push({ type: 'argument', name, value })
  }

  add('article-type', meta.articleType ? str(meta.articleType) : undefined)
  add('title', meta.title ? rich(meta.title) : undefined)
  add('footer-title', meta.footerTitle ? rich(meta.footerTitle) : undefined)
  if (meta.authors?.length) {
    add('authors', {
      type: 'array',
      items: meta.authors.map((a) =>
        dict([
          ['name', str(a.name)],
          ['orcid', a.orcid ? str(a.orcid) : undefined],
          [
            'affiliations',
            a.affiliations?.length
              ? { type: 'array', items: a.affiliations.map((n) => code(String(n))) }
              : undefined,
          ],
        ]),
      ),
    })
  }
  if (meta.affiliations?.length)
    add('affiliations', { type: 'array', items: meta.affiliations.map(rich) })
  add('running-author', meta.runningAuthor ? str(meta.runningAuthor) : undefined)
  if (meta.correspondence && (meta.correspondence.address || meta.correspondence.email)) {
    add(
      'correspondence',
      dict([
        ['address', meta.correspondence.address ? rich(meta.correspondence.address) : undefined],
        ['email', meta.correspondence.email ? str(meta.correspondence.email) : undefined],
      ]),
    )
  }
  if (meta.journal) {
    add(
      'journal',
      dict([
        ['name', meta.journal.name ? str(meta.journal.name) : undefined],
        ['website', meta.journal.website ? str(meta.journal.website) : undefined],
      ]),
    )
  }
  add('year', meta.year !== undefined && meta.year !== '' ? numberOrString(meta.year) : undefined)
  add('doi', meta.doi ? str(meta.doi) : undefined)
  if (meta.dates && Object.values(meta.dates).some(Boolean)) {
    const d = meta.dates
    add(
      'dates',
      dict([
        ['received', d.received ? str(d.received) : undefined],
        ['revised', d.revised ? str(d.revised) : undefined],
        ['accepted', d.accepted ? str(d.accepted) : undefined],
        ['published', d.published ? str(d.published) : undefined],
        ['published-iso', d.publishedIso ? str(d.publishedIso) : undefined],
        ['issued', d.issued ? str(d.issued) : undefined],
      ]),
    )
  }
  add('abstract', meta.abstract ? rich(meta.abstract) : undefined)
  if (meta.keywords?.length) add('keywords', { type: 'array', items: meta.keywords.map(str) })
  if (meta.issue && (meta.issue.volume || meta.issue.number || meta.issue.pages)) {
    add(
      'issue',
      dict([
        ['volume', meta.issue.volume !== undefined ? numberOrString(meta.issue.volume) : undefined],
        ['number', meta.issue.number !== undefined ? numberOrString(meta.issue.number) : undefined],
        ['pages', meta.issue.pages ? str(meta.issue.pages) : undefined],
      ]),
    )
  }
  if (meta.header) add('header', code('true'))
  add('special-issue', meta.specialIssue ? rich(meta.specialIssue) : undefined)
  add('funding', meta.funding ? rich(meta.funding) : undefined)
  add('contributions', meta.contributions ? rich(meta.contributions) : undefined)
  add('rga-info', meta.rgaInfo ? rich(meta.rgaInfo) : undefined)
  if (meta.review) {
    add(
      'review',
      dict([
        ['round', meta.review.round !== undefined ? code(String(meta.review.round)) : undefined],
        [
          'original-author',
          meta.review.originalAuthor ? rich(meta.review.originalAuthor) : undefined,
        ],
      ]),
    )
  }
  if (meta.bibliography) {
    add('bibliography', {
      type: 'call',
      name: 'bibliography',
      args: [{ type: 'argument', value: str(meta.bibliography) }],
    })
  }
  if (meta.oneColumn) add('one-column', code('true'))

  return {
    type: 'show',
    transform: { type: 'call', name: 'jote-article.with', args },
  }
}

/** "Kohrt", "Kohrt & Melinscak", "Kohrt, Melinscak, & McElreath", "Kohrt et al." */
export function runningAuthorFor(names: string[]): string | undefined {
  const families = names.map(familyName).filter(Boolean)
  if (!families.length) return undefined
  if (families.length === 1) return families[0]
  if (families.length === 2) return `${families[0]} & ${families[1]}`
  if (families.length === 3) return `${families[0]}, ${families[1]}, & ${families[2]}`
  return `${families[0]} et al.`
}

const PARTICLES = new Set([
  'van',
  'von',
  'der',
  'den',
  'de',
  'da',
  'di',
  'du',
  'la',
  'le',
  'ten',
  'ter',
  'del',
  'dos',
])

export function familyName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length <= 1) return parts[0] ?? ''
  let i = parts.length - 1
  while (i > 0 && PARTICLES.has(parts[i - 1].toLowerCase())) i--
  return parts.slice(i).join(' ')
}

/** Merge metadata: fields in `override` win, nested objects are merged one level deep. */
export function mergeMeta(
  base: JoteArticleMeta,
  override: JoteArticleMeta | undefined,
): JoteArticleMeta {
  if (!override) return base
  const out: Record<string, unknown> = { ...base }
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined || value === null || value === '') continue
    if (Array.isArray(value)) {
      if (value.length) out[key] = value
      continue
    }
    const current = out[key]
    if (
      typeof value === 'object' &&
      current &&
      typeof current === 'object' &&
      !Array.isArray(current)
    ) {
      out[key] = {
        ...current,
        ...Object.fromEntries(Object.entries(value).filter(([, v]) => v !== undefined && v !== '')),
      }
    } else {
      out[key] = value
    }
  }
  return out as JoteArticleMeta
}
