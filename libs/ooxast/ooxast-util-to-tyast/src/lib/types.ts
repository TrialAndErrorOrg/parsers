import type { Element, Root as XastRoot } from 'xast'
import type { VFile } from 'vfile'
import type { Data as CSL } from 'csl-json'
import type { BlockContent, Content, PhrasingContent } from 'tyast'
import type { StyleMap, ResolvedStyle } from './styles.js'
import type { Numbering } from './numbering.js'
import type { JoteArticleMeta } from './meta.js'

export type { JoteArticleMeta }

/** What a paragraph handler gets to look at. */
export interface ParagraphContext {
  /** The resolved paragraph style */
  style: ResolvedStyle
  /** Plain text of the paragraph */
  text: string
  /** The paragraph converted to inline Typst content */
  content: PhrasingContent[]
  /** Where we are: the main body, a table cell, a footnote or a box */
  where: Where
}

export type Where = 'body' | 'table' | 'note' | 'box'

/**
 * Custom paragraph conversion. Return block content to replace the default conversion, or
 * `undefined` to fall through to the next handler / the default.
 */
export type ParagraphHandler = (
  state: State,
  paragraph: Element,
  context: ParagraphContext,
) => BlockContent[] | undefined | void

/** Return truthy if the handler should be used for the paragraph. A string (array) matches style names/ids. */
export type ParagraphMatcher =
  | string
  | string[]
  | ((paragraph: Element, style: ResolvedStyle) => boolean | undefined | null | void)

/**
 * Wraps the (already converted) content of a run for one run property, e.g. `b` → `*…*`.
 * `property` is the `w:rPr` child (e.g. `<w:vertAlign w:val="superscript"/>`).
 */
export type FormattingHandler = (
  content: PhrasingContent[],
  property: Element,
  state: State,
) => PhrasingContent[]

export interface Options {
  /**
   * Emit the `#import` and `#show: jote-article.with(…)` preamble.
   * @default true
   */
  document?: boolean
  /**
   * Where the template is imported from.
   * @default 'jote-article/lib.typ'
   */
  templatePath?: string
  /**
   * Article metadata for the template (title, authors, dates, …). Anything given here wins over
   * what is inferred from the document's front matter.
   */
  meta?: JoteArticleMeta
  /**
   * Try to recognise the title block, authors, affiliations, author note, abstract and keywords
   * at the start of the document (APA-style manuscripts) and move them into the template
   * arguments instead of the body.
   * @default true
   */
  inferFrontMatter?: boolean
  /**
   * Added to every heading level (`1` turns Word's Heading 1 into `==`).
   * @default 0
   */
  headingOffset?: number
  /**
   * Directory (relative to `main.typ`) where images are referenced from.
   * @default 'media'
   */
  mediaDir?: string
  /**
   * Name of the generated bibliography file, referenced as `bibliography("…")`.
   * @default 'bibliography.bib'
   */
  bibliographyFile?: string
  /**
   * Extra bibliography entries (CSL-JSON), merged with the ones found in citation fields.
   */
  bibliography?: CSL[]
  /**
   * How to lay out "Box N" panels and single-cell tables: always one width, or `auto`
   * (long boxes and boxes containing tables span the page).
   * @default 'auto'
   */
  boxWidth?: 'auto' | 'column' | 'wide' | 'full'
  /**
   * Use `wide-figure` (spanning both columns) for figures/tables: `auto` decides by image width
   * and number of table columns.
   * @default 'auto'
   */
  wideFigures?: 'auto' | 'always' | 'never'
  /**
   * Keep the plain-text reference list (a "References" section) when no citation fields were
   * found. When citations were found, the list is always replaced by the generated
   * bibliography.
   * @default true
   */
  keepReferenceList?: boolean
  /**
   * Link running-text mentions of captioned figures and tables ("Figure 1", "Tables 2 and 3")
   * to their `<fig:N>`/`<tab:N>` labels.
   * @default true
   */
  linkMentions?: boolean
  /** Custom paragraph handlers, tried in order before the defaults. */
  paragraphHandlers?: Array<{ matcher: ParagraphMatcher; handler: ParagraphHandler }>
  /** Custom formatting handlers, keyed by run property name without `w:` (`b`, `i`, `highlight`, …). */
  formattingHandlers?: Record<string, FormattingHandler | null>
  /** Relations of `word/document.xml` (rId → target), if not on the file. */
  relations?: Record<string, string>
  /** `word/styles.xml`, if not on the file */
  styles?: string | XastRoot
  /** `word/numbering.xml`, if not on the file */
  numbering?: string | XastRoot
}

export interface MediaFile {
  /** Path inside the docx, e.g. `word/media/image1.png` */
  source: string
  /** Path relative to `main.typ`, e.g. `media/image1.png` */
  path: string
}

/** What `toTyast` leaves on `file.data.tyast`. */
export interface TyastData {
  /** Images referenced by the document, to be written next to `main.typ` */
  media: MediaFile[]
  /** CSL items of all citations found */
  citations: CSL[]
  /** BibLaTeX source for `bibliographyFile`, when citations were found */
  bibliography?: string
  bibliographyFile?: string
  /** The template arguments that were used (inferred + `meta`) */
  meta: JoteArticleMeta
}

export interface Field {
  instr: string
  phase: 'instr' | 'result'
  kind?: 'citation' | 'bibliography' | 'hyperlink' | 'pass'
  result: PhrasingContent[]
}

export interface State {
  options: Required<
    Pick<
      Options,
      | 'document'
      | 'templatePath'
      | 'inferFrontMatter'
      | 'headingOffset'
      | 'mediaDir'
      | 'bibliographyFile'
      | 'boxWidth'
      | 'wideFigures'
      | 'keepReferenceList'
      | 'linkMentions'
    >
  > &
    Options
  file?: VFile
  styles: StyleMap
  numbering?: Numbering
  /** relations of the part being converted */
  relations: Record<string, string>
  rels: {
    document: Record<string, string>
    footnotes: Record<string, string>
    endnotes: Record<string, string>
  }
  notes: { footnotes: Map<string, Element>; endnotes: Map<string, Element> }
  formattingHandlers: Record<string, FormattingHandler | null>
  paragraphHandlers: Array<{ matcher: ParagraphMatcher; handler: ParagraphHandler }>
  /** open complex fields (`w:fldChar`) */
  fields: Field[]
  /** output of the paragraph being converted */
  out: PhrasingContent[]
  /** cite key → CSL item */
  citations: Map<string, CSL>
  /** identity of a CSL item → cite key */
  itemKeys: Map<string, string>
  media: Map<string, MediaFile>
  /** usable text width of the docx page in pt, for deciding figure widths */
  textWidth: number
  counters: { figure: number; table: number }
  /** last number used per list (numId:ilvl), to continue numbering */
  listCounters: Map<string, number>
  warn: (reason: string) => void
}

export type { BlockContent, Content, PhrasingContent }
