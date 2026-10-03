import type { JoteArticleMeta, JoteAuthor } from 'ooxast-util-to-tyast'
import { runningAuthorFor } from 'ooxast-util-to-tyast'

/** The metadata form of the converter app (`apps/converter/lib/meta-to-preamble.ts`). */
export interface MetaForm {
  documentclassname?: string
  /** cls options, e.g. `"authordate, empirical"` */
  documentclassopt?: string
  title?: string
  keywordsabstract?: string
  /** may contain HTML */
  abstract?: string
  runningauthor?: string
  jyear?: string
  acknowledgments?: string
  funding?: string
  doi?: string
  jvolume?: string
  jissue?: string
  jpages?: string
  paperreceived?: string
  authors?: MetaFormAuthor[]
  paperaccepted?: string
  jname?: string
  paperpublished?: string
  jwebsite?: string
}

export interface MetaFormAuthor {
  givenName: string
  familyName: string
  affiliation?: string
  orcid?: string
  email?: string
}

const ARTICLE_TYPES = [
  'reflection',
  'rga',
  'empirical',
  'anecdote',
  'commentary',
  'meta',
  'editorial',
  'review',
  'perspective',
]

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: '\u00a0',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  laquo: '«',
  raquo: '»',
  shy: '\u00ad',
}

/**
 * The form holds LaTeX-flavoured text (its default journal name is `Journal of Trial \& Error`)
 * and OJS sends HTML abstracts; make both plain text for Typst.
 */
export function plainText(value: string): string {
  return (
    value
      // HTML: paragraph/line breaks become spaces, other tags go, entities are decoded
      .replace(/<\/p>|<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/&(#x?[\da-f]+|\w+);/gi, (m, name: string) => {
        if (name.startsWith('#')) {
          const code =
            name[1] === 'x' || name[1] === 'X'
              ? parseInt(name.slice(2), 16)
              : parseInt(name.slice(1), 10)
          return code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m
        }
        return ENTITIES[name.toLowerCase()] ?? m
      })
      // LaTeX: escaped specials, dashes, ties
      .replace(/\\([&%$#_{}])/g, '$1')
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/[ \t\r\n]+/g, ' ')
      .replace(/~/g, '\u00a0')
      .trim()
  )
}

/** "2026-07-24" → "July 24, 2026" (the class' date format) */
function longDate(value: string): string | undefined {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value || undefined
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function isoDate(value: string): string | undefined {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return undefined
  return d.toISOString().slice(0, 10)
}

/**
 * Turn the converter app's metadata form into arguments for `jote-article.with(…)`, the Typst
 * counterpart of `metaToPreamble`. Pass the result as the `meta` option of `docxToTypst`.
 */
export function metaToTemplateArgs(form: MetaForm): JoteArticleMeta {
  const meta: JoteArticleMeta = {}
  const options = (form.documentclassopt ?? '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean)
  const type = options.find((o) => ARTICLE_TYPES.includes(o))
  if (type) meta.articleType = type
  if (options.includes('header')) meta.header = true
  if (options.includes('onecolumn')) meta.oneColumn = true

  if (form.title) meta.title = plainText(form.title)

  // the form starts with one empty author row
  const authors = (form.authors ?? []).filter((a) => `${a.givenName}${a.familyName}`.trim())
  if (authors.length) {
    const affiliations: string[] = []
    meta.authors = authors.map((a): JoteAuthor => {
      const author: JoteAuthor = { name: plainText(`${a.givenName} ${a.familyName}`) }
      if (a.orcid) author.orcid = a.orcid.split('/').pop()
      const affiliation = a.affiliation && plainText(a.affiliation)
      if (affiliation) {
        let index = affiliations.indexOf(affiliation)
        if (index < 0) index = affiliations.push(affiliation) - 1
        author.affiliations = [index + 1]
      }
      if (a.email) author.email = a.email
      return author
    })
    if (affiliations.length) meta.affiliations = affiliations
    const first = authors[0]
    if (first.email || first.affiliation) {
      meta.correspondence = {
        ...(first.affiliation ? { address: plainText(first.affiliation) } : {}),
        ...(first.email ? { email: first.email } : {}),
      }
    }
    meta.runningAuthor = runningAuthorFor(meta.authors.map((a) => a.name))
  }
  if (form.runningauthor) meta.runningAuthor = plainText(form.runningauthor)

  if (form.abstract) meta.abstract = plainText(form.abstract)
  if (form.keywordsabstract) {
    meta.keywords = plainText(form.keywordsabstract)
      .split(/[,;]/)
      .map((k) => k.trim())
      .filter(Boolean)
  }
  if (form.jyear) meta.year = /^\d+$/.test(form.jyear) ? parseInt(form.jyear, 10) : form.jyear
  if (form.doi) meta.doi = form.doi
  if (form.funding) meta.funding = plainText(form.funding)
  if (form.jname || form.jwebsite) {
    meta.journal = {
      ...(form.jname ? { name: plainText(form.jname) } : {}),
      ...(form.jwebsite ? { website: form.jwebsite } : {}),
    }
  }

  const dates: NonNullable<JoteArticleMeta['dates']> = {}
  if (form.paperreceived) dates.received = longDate(form.paperreceived)
  if (form.paperaccepted) dates.accepted = longDate(form.paperaccepted)
  if (form.paperpublished) {
    dates.published = longDate(form.paperpublished)
    dates.publishedIso = isoDate(form.paperpublished)
  }
  if (Object.keys(dates).length) meta.dates = dates

  if (form.jvolume || form.jissue || form.jpages) {
    meta.issue = {
      ...(form.jvolume ? { volume: form.jvolume } : {}),
      ...(form.jissue ? { number: form.jissue } : {}),
      ...(form.jpages ? { pages: plainText(form.jpages) } : {}),
    }
  }
  return meta
}
