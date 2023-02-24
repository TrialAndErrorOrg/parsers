import { Node as UnistNode, Parent as UnistParent } from 'unist'

import { Element } from 'xast'
import {
  Root as UnifiedLatexRoot,
  GenericNode as UnifiedLatexGenericNode,
  Node as UnifiedLatexNode,
  MacroInfo,
  EnvInfo,
} from '@unified-latex/unified-latex-types'

import {
  Attributes as OoxastProperties,
  Parent,
  Body,
  Text,
  Root,
  P,
} from 'ooxast'

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
  checked?: string
  unchecked?: string
  quotes?: Array<string>
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
   * @default 'zotero'
   * */
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
  parseCitation?: (citation: any) => any
  collectCitation?: (citation: any, index: number | string) => any

  relations?: { [key: string]: string }
}

export type Handle = (
  h: H,
  node: any,
  parent?: Parent
) => UnifiedLatexNode | Array<UnifiedLatexNode> | void

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
  checked: string
  unchecked: string
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
}

export type HWithProps = (
  node: any,
  type: string,
  props?: Attributes,
  content?: string | Array<UnifiedLatexNode>
) => UnifiedLatexNode

export type HWithoutProps = (
  node: any,
  type: string,
  content?: string | Array<UnifiedLatexNode>
) => UnifiedLatexNode

export type H = HWithProps & HWithoutProps & Context

export type RenderInfo = (MacroInfo['renderInfo'] | EnvInfo['renderInfo']) &
  Record<string, unknown>

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
