import { Data as CSL } from 'csl-json'

import { Element } from 'xast'
import {
  Root as UnifiedLatexRoot,
  GenericNode as UnifiedLatexGenericNode,
  Node as UnifiedLatexNode,
  MacroInfo,
  EnvInfo,
  Macro,
} from '@unified-latex/unified-latex-types'

import { Attributes as OoxastProperties, Parent, Body, Text, Root, P } from 'ooxast'

export type XastContent = Root['children'][number] | Root

/**
 * ooxast Node
 */
export type Node = Parent['children'][number] | Root
type t = Extract<Node, { name: 'td' }>

export type Attributes = OoxastProperties

export interface Options {
  /** Handlers for specific node types */
  handlers?: { [handle: string]: Handle }
  document?: boolean
  newLines?: boolean
  quotes?: Array<string>
  /**  What the top section should be
   * -1 = part
   *  0 = chapter
   * 1 = section
   * 2 = subsection
   * 3 = subsubsection
   * 4 = paragraph
   * 5 = subparagraph
   * */
  topSection?: number
  /** Should italics be rendered as \textit or \emph?
   * @default 'emph'
   */
  italics?: 'emph' | 'textit'
  /** Name of the bibliography file
   * @default 'bibliography.bib'
   */
  bibname?: string
  /** Should a column separator be added to tables?
   * i.e. should `|` be added to the beginning and end of each row?
   * @default false
   * */
  columnSeparator?: boolean
  /** Options for the document class
   * @default { name: 'article' }
   * */
  documentClass?: {
    /** Options for the document class
     * @default undefined
     * */
    options?: string[]
    /** Name of the document class
     * @default 'article'
     * */
    name: string
  }
  /** What type of citation is used?
   *
   * @default 'zotero'
   * */
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
  parseCitation?: (citation: any) => any
  collectCitation?: (citation: any, index: number | string) => any

  relations?: { [key: string]: string }
  /**
   * What type of display math should be used?
   *
   * -`$$`: `$$ ... $$`
   *
   * -`[]`: `\[ ... \]`
   *
   * -`equation` | `equation*` | `align` | `align*`: `\begin{...} ... \end{...}`
   *
   * @default 'equation'
   */
  displayMath?:
    | 'equation'
    | 'equation*'
    | 'align'
    | 'align*'
    | '$$'
    | '[]' /** What command should be used for strikethrough?

    * @default 'sout'
   */
  /** What type of inline math should be used?
   * -`$`: `$ ... $`
   * -`()` : `\(...\)`
   *
   * @default '$'
   * */
  inlineMath?: '$' | '()'
  strikethrough?: 'sout' | 'st' | 's'
  /** Are you using xcolor?
   *
   * Disabling this will remove the `xcolor` package from the preamble
   * and remove color related commands from the output.
   *
   * @default true
   */
  xcolor?: boolean
  /**
   * The title of the document
   *
   * If this is not set, the title will be taken from the heading with the "Title" style.
   *
   * @default undefined
   */
  title?: string

  /** What column should be used as the default column?
   *
   * e.g `l` for left, `r` for right, `c` for center
   *
   * @default 'l'
   * */
  defaultCol?: string
  /** Should tabularx be used instead of tabular?
   *
   * @default false
   * */
  tabularx?:
    | boolean
    | {
        /** The width of the table
         *
         * @default '1.0\\textwidth'
         * */
        width?: string
      }
  /**
   * A bibliography you can add manually
   *
   * Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format
   */
  bibliography?: CSL[] | string
  /**
   * A list of packages to add to the preamble
   *
   * by default, the following packages are added:
   * - `xcolor` (if `xcolor` is enabled)
   * - `hyperref`
   * - `graphicx`
   * - `caption`
   * - `tabularx` (if `tabularx` is enabled)
   *
   */
  packages?: (string | { name: string; options: string[] })[]
  /**
   * A list of commands and other stuff to add to the preamble
   *
   * You are responsible for making sure that the commands are valid LaTeX
   * and that they can be used in the preamble.
   *
   * You need to directly use the unified-latex types here,
   * or you can just put it in raw
   *
   * @default '\\title{<whatever title it can find>}'
   *
   * @example
   * ```ts
   * import { m, args } from '@unified-latex/unified-latex-types'
   *
   * const options = {
   *  preamble: [
   *   // \author{Leeroy Jenkins}
   *   m('author', 'Leeroy Jenkins'),
   *   // \title{The Adventures of Leeroy Jenkins}
   *   m('title', 'The Adventures of Leeroy Jenkins'),
   *   // \somemacrowithoptions[optional1][optional2]{firstArg}{secondArg}
   *   m(
   *      'somemacrowithoptions',
   *      args(
   *         ['optional1', 'optional2', 'firstArg', 'secondArg'],
   *        { braces: '[][]{}{}'}
   *       )
   *    ),
   *   ]
   * }
   * ```
   */
  preamble?: UnifiedLatexNode[] | string
}

export type Handle = (
  h: H,
  node: any,
  parent?: Parent,
) => UnifiedLatexNode | Array<UnifiedLatexNode> | void | undefined

export interface Context {
  nodeById?: {
    [id: string]: Parent
  }
  baseFound: boolean
  frozenBaseUrl: string | null
  wrapText: boolean
  /** Whether the current node is in a table */
  inTable: boolean
  qNesting: number
  handlers: { [handler: string]: Handle }
  document: boolean | undefined
  quotes: Array<string>
  /** Whether `emph` or `textit` should be used for italics
   * @default 'emph'
   */
  italics: string
  /** Options for the document class
   * @default { name: 'article' }
   */
  documentClass: {
    options?: string[]
    name: string
  }
  /**  The current section depth
   *  0 = chapter
   * 1 = section
   * 2 = subsection
   * 3 = subsubsection
   * 4 = paragraph
   * 5 = subparagraph
   * */
  sectionDepth: number
  bibname: string
  columnSeparator: boolean
  citationNumber: number
  parseCitation: (citation: any) => any
  collectCitation: (citation: any, index: number | string) => any
  partialCitation: string
  /**  Whether to delete the next w:r element
   *  Mostly used for citations, where sometimes the next w:r element is the citation in plain text again
   * */
  deleteNextRun: boolean
  relations: { [key: string]: string }
  citeKeys: { [key: string]: string }
  citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
  displayMath: 'equation' | 'equation*' | 'align' | 'align*' | '$$' | '[]'
  /** What type of inline math should be used?
   * -`$`: `$ ... $`
   * -`()` : `\(...\)`
   *
   * @default '$'
   * */
  inlineMath?: '$' | '()'
  strikethrough: 'sout' | 'st' | 's'
  xcolor: boolean
  inDisplayMath: boolean
  inMath: boolean
  title?: string
  footnotes: Record<string, UnifiedLatexNode[]>
  endnotes: Record<string, UnifiedLatexNode[]>
  defaultCol: string
  tabularx: {
    width: string
  }
  /** This makes it so that a paragraph is processed with `all` instead of more custom.
   * Useful for e.g. footnotes or tables
   * */
  simpleParagraph: boolean
  /**
   * A bibliography you can add manually
   *
   * Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format
   */
  bibliography?: CSL[] | string
}

export type HWithProps = (
  node: any,
  type: string,
  props?: Attributes,
  content?: string | Array<UnifiedLatexNode>,
) => UnifiedLatexNode

export type HWithoutProps = (
  node: any,
  type: string,
  content?: string | Array<UnifiedLatexNode>,
) => UnifiedLatexNode

export type H = HWithProps & HWithoutProps & Context

export type RenderInfo = (MacroInfo['renderInfo'] | EnvInfo['renderInfo']) & Record<string, unknown>

export type {
  Parent,
  Root,
  Element,
  UnifiedLatexNode,
  UnifiedLatexGenericNode,
  UnifiedLatexRoot,
  // UnifiedLatexParagraphContent,
  Text,
  P,
  // UnifiedLatexP,
  Body,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
