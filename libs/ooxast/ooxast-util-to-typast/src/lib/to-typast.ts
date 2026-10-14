import type { Element, Root as XastRoot } from 'xast'
import type { Root as TypastRoot } from 'typast'
import { lower } from 'typast-builder'
import type { Content, FunctionCall, PhrasingContent, Root, Value } from 'typast-builder/doc'
import { VFile } from 'vfile'
import type { Data as CSL } from 'csl-json'
import type { Options, State, TypastData } from './types.js'
import { parseStyles } from './styles.js'
import { parseNumbering } from './numbering.js'
import { indexNotes } from './notes.js'
import { group, toItems } from './blocks.js'
import { defaultFormattingHandlers, isImage, TYPST_IMAGE, type ImageData } from './inline.js'
import { extractFrontMatter } from './front-matter.js'
import { linkMentions, uniqueLabels } from './mentions.js'
import { mergeMeta, templateShowRule, type JoteArticleMeta } from './meta.js'
import { keyFor, toBiblatex } from './citations.js'
import { attr, child, find, kids, twipsToPt } from './util.js'

declare module 'vfile' {
  interface DataMap {
    typast: TypastData
  }
}

export const defaultOptions = {
  document: true,
  templatePath: 'jote-article/lib.typ',
  inferFrontMatter: true,
  headingOffset: 0,
  mediaDir: 'media',
  bibliographyFile: 'bibliography.bib',
  boxWidth: 'auto',
  wideFigures: 'auto',
  keepReferenceList: true,
  linkMentions: true,
} as const

type Tree = XastRoot | Element

/**
 * Convert an `ooxast` tree (a parsed `word/document.xml`) to a `typast` tree for the JOTE Typst
 * template.
 *
 * Pass the `VFile` produced by `docx-to-vfile` + `reoff-parse` to get footnotes, relations
 * (hyperlinks, images), styles and numbering. Information for writing the output directory
 * (images, `bibliography.bib`) is left on `file.data.typast`.
 */
export function toTypast(tree: Tree, file: VFile, options?: Options): TypastRoot
export function toTypast(tree: Tree, options?: Options): TypastRoot
export function toTypast(
  tree: Tree,
  fileOrOptions?: VFile | Options,
  maybeOptions?: Options,
): TypastRoot {
  return lower(toDocument(tree, fileOrOptions, maybeOptions))
}

/**
 * Like {@link toTypast}, but returns the document model (`typast-builder/doc`: paragraphs,
 * lists, calls by name) that `toTypast` lowers to typast.
 */
export function toDocument(
  tree: Tree,
  fileOrOptions?: VFile | Options,
  maybeOptions?: Options,
): Root {
  const file = fileOrOptions instanceof VFile ? fileOrOptions : undefined
  const userOptions = (fileOrOptions instanceof VFile ? maybeOptions : fileOrOptions) ?? {}
  const options = { ...defaultOptions, ...stripUndefined(userOptions) } as State['options']

  const data = (file?.data ?? {}) as Record<string, unknown> & {
    parsed?: Record<string, XastRoot | undefined>
    relations?: {
      document?: Record<string, string>
      footnotes?: Record<string, string>
      endnotes?: Record<string, string>
    }
  }
  const raw = (key: string) => (data[key] as string | undefined) ?? data.parsed?.[key]

  const rels = {
    document: options.relations ?? data.relations?.document ?? {},
    footnotes: data.relations?.footnotes ?? {},
    endnotes: data.relations?.endnotes ?? {},
  }

  const state: State = {
    options,
    file,
    styles: parseStyles(
      options.styles ?? (raw('word/styles.xml') as string | XastRoot | undefined),
    ),
    numbering: parseNumbering(
      options.numbering ?? (raw('word/numbering.xml') as string | XastRoot | undefined),
    ),
    relations: rels.document,
    rels,
    notes: {
      footnotes: indexNotes(
        data.parsed?.['word/footnotes.xml'] ?? parseMaybe(data['word/footnotes.xml']),
      ),
      endnotes: indexNotes(
        data.parsed?.['word/endnotes.xml'] ?? parseMaybe(data['word/endnotes.xml']),
      ),
    },
    formattingHandlers: { ...defaultFormattingHandlers, ...options.formattingHandlers },
    paragraphHandlers: options.paragraphHandlers ?? [],
    fields: [],
    out: [],
    citations: new Map(),
    itemKeys: new Map(),
    media: new Map(),
    textWidth: textWidth(tree),
    counters: { figure: 0, table: 0 },
    listCounters: new Map(),
    warn: (reason) => {
      if (file) file.message(reason)
    },
  }

  for (const item of options.bibliography ?? []) keyFor(state, item as CSL)

  const body = find(tree as Element, 'w:body') ?? (tree as Element)
  const elements = 'name' in body && body.name === 'w:p' ? [body] : kids(body)
  let items = toItems(state, elements, 'body')

  let inferred: JoteArticleMeta = {}
  if (options.inferFrontMatter) {
    const front = extractFrontMatter(state, items)
    inferred = front.meta
    items = front.items
    warnOverridden(state, inferred, options.meta)
  }

  let content = finalizeImages(group(state, items, 'body'))

  const citations = [...state.citations.values()]
  const bibliography = citations.length ? toBiblatex(citations) : undefined
  const meta = mergeMeta(
    {
      ...inferred,
      // the year of conversion (the template would otherwise use the build date, which
      // reproducible builds pin to 1980)
      year: new Date().getFullYear(),
      ...(bibliography ? { bibliography: options.bibliographyFile } : {}),
    },
    options.meta,
  )

  // images in removed front matter (ORCID icons, …) are not needed
  const used = new Set<string>()
  JSON.stringify(content, (key, value) => {
    if (value && typeof value === 'object' && value.type === 'call' && value.name === 'image') {
      const path = value.args?.[0]?.value
      if (path?.type === 'string') used.add(path.value)
    }
    return value
  })
  content = unreadableImages(content)
  if (options.linkMentions) content = linkMentions(content, uniqueLabels(content))

  if (file) {
    file.data.typast = {
      media: [...state.media.values()].filter((m) => used.has(m.path)),
      citations,
      bibliography,
      bibliographyFile: bibliography ? options.bibliographyFile : undefined,
      meta,
    }
  }

  if (!options.document) return { type: 'root', children: content }

  return {
    type: 'root',
    children: [
      { type: 'import', source: options.templatePath, items: '*' },
      templateShowRule(meta),
      ...content,
    ],
  }
}

/** Front matter read from (and removed from) the document */
const FRONT_MATTER_KEYS: Array<[keyof JoteArticleMeta, string]> = [
  ['title', 'title'],
  ['authors', 'authors'],
  ['affiliations', 'affiliations'],
  ['correspondence', 'correspondence'],
  ['abstract', 'abstract'],
  ['keywords', 'keywords'],
  ['funding', 'funding'],
]

const isSet = (value: unknown) =>
  value !== undefined &&
  value !== null &&
  value !== '' &&
  !(Array.isArray(value) && !value.length) &&
  !(
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !Object.values(value as object).some((v) => v !== undefined && v !== '')
  )

/**
 * Front matter paragraphs are removed from the body; when the given metadata replaces what they
 * said, the document's version is gone, so say so.
 */
function warnOverridden(
  state: State,
  inferred: JoteArticleMeta,
  given: JoteArticleMeta | undefined,
) {
  if (!given) return
  const replaced = FRONT_MATTER_KEYS.filter(
    ([key]) => isSet(inferred[key]) && isSet(given[key]),
  ).map(([, name]) => name)
  if (!replaced.length) return
  state.warn(
    `Front matter read from the start of the document (${replaced.join(
      ', ',
    )}) was removed from the body and replaced by the given metadata; check that no body text was lost`,
  )
}

function stripUndefined<T extends object>(o: T): Partial<T> {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as Partial<T>
}

function parseMaybe(value: unknown): XastRoot | undefined {
  return value && typeof value === 'object' ? (value as XastRoot) : undefined
}

/** Usable text width of the (last) section, in pt. Defaults to US Letter with 1in margins. */
function textWidth(tree: Tree): number {
  const sectPr = find(tree as Element, 'w:sectPr')
  const pgSz = child(sectPr, 'w:pgSz')
  const pgMar = child(sectPr, 'w:pgMar')
  const w = parseInt(attr(pgSz, 'w:w') ?? '12240', 10)
  const l = parseInt(attr(pgMar, 'w:left') ?? '1440', 10)
  const r = parseInt(attr(pgMar, 'w:right') ?? '1440', 10)
  const width = twipsToPt(w - l - r)
  return Number.isFinite(width) && width > 100 ? width : 468
}

/** Images left inside running text become `box(image(…, height: …))`. */
function finalizeImages<T extends Content>(nodes: T[]): T[] {
  return nodes.map((n) => finalize(n) as T)
}

function finalize(node: Content): Content {
  if (isImage(node as PhrasingContent)) {
    const call = node as FunctionCall
    const data = (call.data as { image: ImageData }).image
    const height = data.height ? Math.min(data.height, 36) : 12
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
              call.args[0],
              {
                type: 'argument',
                name: 'height',
                value: { type: 'code', value: `${Math.round(height * 10) / 10}pt` },
              },
            ],
          },
        },
      ],
    }
  }
  if ('children' in node && Array.isArray(node.children)) {
    return { ...node, children: finalizeImages(node.children as Content[]) } as Content
  }
  if (node.type === 'call') {
    return {
      ...node,
      args: node.args.map((a) => ({ ...a, value: finalizeValue(a.value) })),
      body: node.body?.map((b) => finalizeImages(b)),
    }
  }
  return node
}

function finalizeValue(value: Value): Value {
  if (value.type === 'contentBlock') return { ...value, children: finalizeImages(value.children) }
  if (value.type === 'call') return finalize(value) as Value
  if (value.type === 'array') return { ...value, items: value.items.map(finalizeValue) }
  return value
}

/**
 * `image("media/x.tiff", …)` would stop the Typst build, so formats Typst cannot read become a
 * framed placeholder of the same size naming the file (which is still written to `media/`).
 */
function unreadableImages<T extends Content>(nodes: T[]): T[] {
  return nodes.map((n) => replaceUnreadable(n) as T)
}

function replaceUnreadable(node: Content): Content {
  if (node.type === 'call' && node.name === 'image') {
    const path = node.args[0]?.value
    if (path?.type === 'string' && !TYPST_IMAGE.test(path.value))
      return placeholder(node, path.value)
    return node
  }
  if ('children' in node && Array.isArray(node.children)) {
    return { ...node, children: unreadableImages(node.children as Content[]) } as Content
  }
  if (node.type === 'call') {
    return {
      ...node,
      args: node.args.map((a) => ({ ...a, value: replaceUnreadableValue(a.value) })),
      body: node.body?.map((b) => unreadableImages(b)),
    }
  }
  return node
}

function replaceUnreadableValue(value: Value): Value {
  if (value.type === 'contentBlock') return { ...value, children: unreadableImages(value.children) }
  if (value.type === 'call') return replaceUnreadable(value) as Value
  if (value.type === 'array') return { ...value, items: value.items.map(replaceUnreadableValue) }
  return value
}

function placeholder(image: FunctionCall, path: string): FunctionCall {
  const size = image.args.filter((a) => a.name === 'width' || a.name === 'height')
  if (!size.some((a) => a.name === 'width')) {
    size.unshift({ type: 'argument', name: 'width', value: { type: 'code', value: '100%' } })
  }
  if (!size.some((a) => a.name === 'height')) {
    size.push({ type: 'argument', name: 'height', value: { type: 'code', value: '6em' } })
  }
  return {
    type: 'call',
    name: 'rect',
    args: [
      ...size,
      { type: 'argument', name: 'stroke', value: { type: 'code', value: '0.5pt + gray' } },
    ],
    body: [
      [
        {
          type: 'call',
          name: 'align',
          args: [{ type: 'argument', value: { type: 'code', value: 'center + horizon' } }],
          body: [[{ type: 'text', value: `${path}: convert to PNG or SVG` }]],
        } as PhrasingContent,
      ],
    ],
  }
}
