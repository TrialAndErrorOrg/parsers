import type * as Ast from '@unified-latex/unified-latex-types'
import { attachMacroArgs } from '@unified-latex/unified-latex-util-arguments'
import type { Argument, Content, FunctionCall, Import, Root, ShowRule, Value } from 'tyast'
import { VFile } from 'vfile'
import { arg, arr, call, code, content, dict, label, named, str, text } from './build.js'
import { environmentHandlers } from './handlers/environments.js'
import { labelValue, macroHandlers, type CiteData } from './handlers/macros.js'
import { State } from './state.js'
import { macroSignatures } from './signatures.js'
import { groupMultiCites } from './multicite.js'
import type { Options } from './types.js'
import { envName, plainText } from './util.js'

/** cls option → `article-type` label */
export const ARTICLE_TYPES: Record<string, string> = {
  reflection: 'Reflection',
  rga: 'Rejected Grant Application',
  empirical: 'Empirical',
  anecdote: 'Anecdote',
  commentary: 'Commentary',
  meta: 'Meta-Research',
  editorial: 'Editorial',
  review: 'Peer Review',
  perspective: 'Perspective',
}

/**
 * Convert a unified-latex tree (a JOTE article written against `jote-new-article.cls`, or any
 * LaTeX fragment) into a tyast tree for the Typst `jote-article` template.
 *
 * Never throws on unknown input: unknown macros keep their text and produce a warning on `file`.
 */
export function toTyast(tree: Ast.Root, file?: VFile | Options, options?: Options): Root {
  let vfile: VFile
  let opts: Options
  if (file instanceof VFile) {
    vfile = file
    opts = options ?? {}
  } else {
    vfile = new VFile()
    opts = file ?? options ?? {}
  }

  attachMacroArgs(tree, macroSignatures)
  groupMultiCites(tree)

  const state = new State(vfile, opts, macroHandlers, environmentHandlers)

  const { documentclass, preamble, body, isDocument } = splitDocument(tree)
  if (documentclass) {
    const optionNodes = documentclass.args?.find((a) => a.openMark === '[')?.content ?? []
    state.meta.documentOptions = plainText(optionNodes)
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean)
  }

  state.inPreamble = true
  state.flow(preamble)
  state.inPreamble = false

  const blocks = state.flow(body)

  const document = opts.document ?? isDocument
  const children: Content[] = []
  if (document) {
    const imp: Import = {
      type: 'import',
      source: opts.templatePath ?? 'jote-article/lib.typ',
      items: '*',
    }
    children.push(imp)
    children.push(showRule(state))
  }
  children.push(...blocks)

  const root: Root = { type: 'root', children }
  // without a bibliography, citations can't be `#cite` calls (showRule warns about this)
  if (document && state.meta.hasCitations && state.meta.bibResources.length === 0)
    citationsAsText(root)
  finalize(root, state)
  state.reportUnknown()
  return root
}

function splitDocument(tree: Ast.Root): {
  documentclass?: Ast.Macro
  preamble: Ast.Node[]
  body: Ast.Node[]
  isDocument: boolean
} {
  const nodes = tree.content
  const documentclass = nodes.find(
    (n): n is Ast.Macro => n.type === 'macro' && n.content === 'documentclass',
  )
  const docIndex = nodes.findIndex((n) => n.type === 'environment' && envName(n) === 'document')
  if (docIndex === -1) {
    // no document environment: everything up to the first non-preamble content is preamble
    return {
      documentclass,
      preamble: documentclass ? nodes : [],
      body: documentclass ? [] : nodes,
      isDocument: !!documentclass,
    }
  }
  return {
    documentclass,
    preamble: nodes.slice(0, docIndex),
    body: (nodes[docIndex] as Ast.Environment).content,
    isDocument: true,
  }
}

// ---------------------------------------------------------------------------
// `#show: jote-article.with(…)`
// ---------------------------------------------------------------------------

function showRule(state: State): ShowRule {
  const { meta } = state
  const f = (name: string) => meta.fields.get(name)
  const plain = (name: string) => {
    const v = f(name)
    return v
      ? plainText(v)
          .replace(/\u00A0/g, ' ')
          .replace(/---/g, '—')
          .replace(/--/g, '–')
          .replace(/\s+/g, ' ')
          .trim()
      : undefined
  }
  const strOrNone = (name: string): Value => {
    const v = plain(name)
    return v ? str(v) : code('none')
  }
  const contentOf = (name: string): Value | undefined => {
    const v = f(name)
    if (!v || !plainText(v).trim()) return undefined
    return content(state.body(v))
  }
  const options = meta.documentOptions

  const typeOption = options.find((o) => o in ARTICLE_TYPES)
  const articleType = plain('articletype') ?? (typeOption ? ARTICLE_TYPES[typeOption] : undefined)

  const affiliationIndices = [...meta.affiliations.keys()].sort((a, b) => a - b)
  // authors point at affiliation numbers; renumber them to positions in the sorted list
  const position = new Map(affiliationIndices.map((n, i) => [n, i + 1]))

  const authors = arr(
    meta.authors.map((a) =>
      dict({
        name: str(a.name),
        orcid: a.orcid ? str(a.orcid) : undefined,
        affiliations: arr(a.affiliations.map((n) => code(String(position.get(n) ?? n)))),
      }),
    ),
  )
  const affiliations = arr(
    affiliationIndices.map((n) => content(state.inline(meta.affiliations.get(n) ?? []))),
  )

  const address = contentOf('corraddress')
  const email = plain('corremail')?.replace(/^mailto:/, '')
  const correspondence =
    address || email
      ? dict({ address: address ?? code('none'), email: email ? str(email) : code('none') })
      : code('none')

  const year = plain('jyear')
  const keywords = (plain('keywordsabstract') ?? '')
    .split(/[,;]/)
    .map((k) => k.trim())
    .filter(Boolean)

  let abstract: Value | undefined
  if (options.includes('noabstract')) abstract = code('none')
  else
    abstract =
      contentOf('abstracttext') ??
      (meta.abstractEnv ? content(state.flow(meta.abstractEnv)) : code('none'))

  let issue: Value = code('none')
  if (options.includes('issue')) {
    const num = (name: string) => {
      const v = plain(name)
      return v ? (/^\d+$/.test(v) ? code(v) : str(v)) : code('none')
    }
    issue = dict({ volume: num('jvolume'), number: num('jissue'), pages: strOrNone('jpages') })
  }

  let review: Value | undefined
  if (options.includes('review')) {
    const round = plain('prround')
    review = dict({
      round: round && /^\d+$/.test(round) ? code(round) : round ? str(round) : code('1'),
      'original-author': contentOf('ogauthor') ?? code('none'),
    })
  }

  let bibliography: Value | undefined
  if ((meta.hasCitations || meta.hasPrintBibliography) && meta.bibResources.length > 0) {
    const files = meta.bibResources.map((b) => str(b))
    bibliography = call('bibliography', [
      arg(files.length === 1 ? files[0] : arr(files)),
      arg(str(state.options.bibliographyStyle ?? 'apa'), 'style'),
    ])
  } else if (meta.hasCitations) {
    state.warn(
      'The document cites but has no \\addbibresource: citations are printed as plain-text keys',
    )
  }

  const title = f('jotetitle') ?? f('title')
  const args: (Argument | undefined)[] = [
    named('article-type', articleType ? str(articleType) : code('none')),
    named('title', title ? content(state.inline(title)) : code('none')),
    named('footer-title', contentOf('footertitle')),
    named('authors', authors),
    named('affiliations', affiliations),
    named('running-author', strOrNone('runningauthor')),
    named('correspondence', correspondence),
    named('journal', dict({ name: strOrNone('jname'), website: strOrNone('jwebsite') })),
    named('year', year ? (/^\d+$/.test(year) ? code(year) : str(year)) : code('none')),
    named('doi', strOrNone('paperdoi')),
    named(
      'dates',
      dict({
        received: strOrNone('paperreceived'),
        revised: strOrNone('paperrevised'),
        accepted: strOrNone('paperaccepted'),
        published: strOrNone('paperpublished'),
        'published-iso': strOrNone('paperpublisheddate'),
        issued: strOrNone('paperissued'),
      }),
    ),
    named('abstract', abstract),
    named('keywords', arr(keywords.map((k) => str(k)))),
    named('issue', issue),
    named('header', code(options.includes('header') ? 'true' : 'false')),
    named('special-issue', contentOf('specialissue')),
    named('funding', contentOf('funding') ?? contentOf('fundinginfo')),
    named('contributions', contentOf('contributions')),
    named('rga-info', contentOf('rgainfo')),
    named('review', review),
    named('bibliography', bibliography),
  ]
  return {
    type: 'show',
    transform: call('jote-article.with', args),
  }
}

// ---------------------------------------------------------------------------
// Finalize: labels on blocks, cross-references
// ---------------------------------------------------------------------------

type AnyNode = Root | Content | Value | Argument

function children(node: AnyNode): AnyNode[] {
  const out: AnyNode[] = []
  const n = node as unknown as Record<string, unknown>
  if (Array.isArray(n.children)) out.push(...(n.children as AnyNode[]))
  if (Array.isArray(n.term)) out.push(...(n.term as AnyNode[]))
  if (node.type === 'call') {
    out.push(...node.args)
    for (const b of node.body ?? []) out.push(...b)
  }
  if (node.type === 'argument') out.push(node.value)
  if (node.type === 'array') out.push(...node.items)
  if (node.type === 'dict') out.push(...node.entries.map((e) => e.value))
  if (node.type === 'show' && typeof node.transform !== 'string') out.push(node.transform)
  if (node.type === 'set') out.push(...node.args)
  if (node.type === 'ref' && node.supplement) out.push(...node.supplement)
  return out
}

function walk(node: AnyNode, fn: (node: AnyNode) => void) {
  fn(node)
  for (const child of children(node)) walk(child, fn)
}

/** Replace content nodes in all content arrays of the tree. */
function mapContent(node: AnyNode, fn: (node: Content, parent: AnyNode) => Content | Content[]) {
  const n = node as unknown as Record<string, unknown>
  const mapList = (list: Content[]) => list.flatMap((c) => fn(c, node))
  if (Array.isArray(n.children)) n.children = mapList(n.children as Content[])
  if (Array.isArray(n.term)) n.term = mapList(n.term as Content[])
  if (node.type === 'call' && node.body) node.body = node.body.map(mapList)
  if (node.type === 'ref' && node.supplement) node.supplement = mapList(node.supplement)
  for (const child of children(node)) mapContent(child, fn)
}

/** Replace every content list of the tree (children, call bodies, …) with `fn(list)`. */
function mapContentLists(node: AnyNode, fn: (list: Content[]) => Content[]) {
  const n = node as unknown as Record<string, unknown>
  if (Array.isArray(n.children)) n.children = fn(n.children as Content[])
  if (Array.isArray(n.term)) n.term = fn(n.term as Content[])
  if (node.type === 'call' && node.body) node.body = node.body.map(fn)
  if (node.type === 'ref' && node.supplement) node.supplement = fn(node.supplement)
  for (const child of children(node)) mapContentLists(child, fn)
}

const citeData = (node: Content | undefined): CiteData | undefined =>
  node?.type === 'call' && node.name === 'cite'
    ? (node as { data?: { cite?: CiteData } }).data?.cite
    : undefined

/**
 * Typst refuses to compile a `#cite` without a bibliography, so a document that cites but has
 * no `\addbibresource` gets its citations as plain text instead: `(key1; key2, p. 5)` for a
 * parenthetical citation (adjacent ones grouped, as Typst would), the bare key otherwise.
 */
function citationsAsText(root: Root) {
  mapContentLists(root, (list) => {
    if (!list.some((node) => citeData(node))) return list
    const out: Content[] = []
    for (let i = 0; i < list.length; i++) {
      const cite = citeData(list[i])
      if (!cite) {
        out.push(list[i])
        continue
      }
      if (cite.form === 'none') continue
      // `Author, Year` (a parenthetical citation with a prenote) is just the key
      const year = citeData(list[i + 2])
      const sep = list[i + 1]
      if (
        cite.form === 'author' &&
        year?.form === 'year' &&
        year.key === cite.key &&
        sep?.type === 'text' &&
        sep.value === ', '
      ) {
        out.push(text(cite.key))
        i += 2
        continue
      }
      if (cite.form !== 'normal') {
        out.push(text(cite.key))
        if (cite.supplement) out.push(text(' ('), ...cite.supplement, text(')'))
        continue
      }
      const group = [cite]
      for (
        let next = citeData(list[i + 1]);
        next?.form === 'normal';
        next = citeData(list[i + 1])
      ) {
        group.push(next)
        i++
      }
      out.push(text('('))
      group.forEach((c, k) => {
        out.push(text(k > 0 ? `; ${c.key}` : c.key))
        if (c.supplement) out.push(text(', '), ...c.supplement)
      })
      out.push(text(')'))
    }
    // merge the text runs this produced
    return out.reduce<Content[]>((acc, node) => {
      const prev = acc[acc.length - 1]
      if (prev?.type === 'text' && node.type === 'text') prev.value += node.value
      else acc.push(node.type === 'text' ? { ...node } : node)
      return acc
    }, [])
  })
}

function finalize(root: Root, state: State) {
  // 1. labels attached to blocks (`data.label`) become `<label>` right after them
  const present = new Set<string>()
  mapContent(root, (node) => {
    const data = (node as { data?: Record<string, unknown> }).data
    if (data?.label && typeof data.label === 'string' && node.type !== 'heading') {
      const name = data.label
      delete data.label
      return [node, label(name)]
    }
    return node
  })
  walk(root, (node) => {
    if (node.type === 'label') present.add(node.name)
    if (node.type === 'heading' && node.label) {
      present.add(node.label)
      state.labels.set(node.label, { kind: 'heading', text: node.children })
    }
    if (node.type === 'typst')
      for (const m of node.value.matchAll(/<([\p{L}\p{N}_\-:.]+)>/gu)) present.add(m[1])
  })

  // 2. cross-references
  mapContent(root, (node) => {
    if (node.type !== 'ref') return node
    const form = ((node as { data?: { form?: string } }).data?.form ?? 'auto') as string
    const target = node.target
    const info = state.labels.get(target)
    if (!info || (!present.has(target) && info.kind !== 'subfigure')) {
      state.warn(`Reference to unknown label \`${target}\``)
      return text('??')
    }
    if (info.kind === 'subfigure') return info.text ?? [text('??')]
    if (form === 'page') {
      state.warn(`\\pageref{${target}} is rendered as a link`)
      return call('link', [arg(labelValue(target))], [[text('↗')]])
    }
    if (info.kind === 'heading' || info.kind === 'other' || form === 'name') {
      const linkText = info.text && info.kind === 'heading' ? info.text : [text('link')]
      return call('link', [arg(labelValue(target))], [linkText])
    }
    if (form === 'ref' || form === 'eq') {
      return call('ref', [arg(labelValue(target)), arg(code('none'), 'supplement')]) as FunctionCall
    }
    return { type: 'ref', target } as Content
  })
}

export { macroHandlers, environmentHandlers }
