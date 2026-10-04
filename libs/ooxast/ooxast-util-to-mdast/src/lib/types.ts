import { Data as CSL } from 'csl-json'

import { Element } from 'xast'
import type { Data as MdastData, Root as MdastRoot, RootContent } from 'mdast'
import type { Literal } from 'unist'

import { Attributes as OoxastProperties, Parent, Body, Text, Root, P } from 'ooxast'
import type { Math, InlineMath } from 'mdast-util-math'

/** One cited work in an {@link InlineCiteNode}. Vendored from `@benrbray/mdast-util-cite`. */
export interface CiteItem {
  prefix?: string
  key: string
  suffix?: string
  suppressAuthor?: true | undefined
}

/**
 * A pandoc-style inline citation (`[@key]`), as `@benrbray/remark-cite` serializes it.
 *
 * Vendored from `@benrbray/mdast-util-cite`, which only has alpha releases for mdast 4.
 */
export interface InlineCiteNode extends Literal {
  type: 'cite'
  value: string
  data: MdastData & {
    altSyntax?: true | undefined
    citeItems: CiteItem[]
  }
}

declare module 'mdast' {
  interface PhrasingContentMap {
    cite: InlineCiteNode
  }
  interface RootContentMap {
    cite: InlineCiteNode
  }
  /** Word numbering info of the paragraph a list was made from. */
  interface ListData {
    ilvl?: number
    numId?: number
    numFmt?: string
  }
}

export type XastContent = Root['children'][number] | Root

export type Node = Element | Root | Text

export type MdastNode = RootContent | MdastRoot | Math | InlineMath | InlineCiteNode

export interface MdastStrikeThrough extends Parent {
  type: 'strikethrough'
}

import { Parent as UnistParent } from 'unist'
import {
  BlockContent as MdastBlockContent,
  DefinitionContent as MdastDefinitionContent,
} from 'mdast'
import { State } from './state.js'

export type MdastParent = Extract<MdastNode, UnistParent>
export type MdastFlowContent = MdastBlockContent | MdastDefinitionContent
export type { RootContent as MdastContent }

export type Attributes = OoxastProperties

export interface Options {
  /** Handlers for specific node types */
  handlers?: { [handle: string]: Handle }
  document?: boolean
  newLines?: boolean
  quotes?: Array<string>
  /** Should italics be rendered with `*` or `_`?
   * @default '*'
   */
  italics?: '*' | '_'
  /** Should bold be rendered with `*` or `_`?
   * @default '**'
   */
  bold?: '**' | '__'
  /** What type of citation is used?
   *
   * @default 'zotero'
   * */
  citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
  parseCitation?: (citation: any) => any
  collectCitation?: (citation: any, index: number | string) => any
  relations?: { [key: string]: string }
  title?: string
  bibliography?: CSL[]
}

export type Handle = (
  state: State,
  node: any,
  parent?: Parent,
) => MdastNode | Array<MdastNode> | void | undefined

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
}

export type HWithProps = (
  node: any,
  type: string,
  props?: Attributes,
  content?: string | Array<MdastNode>,
) => MdastNode

export type HWithoutProps = (
  node: any,
  type: string,
  content?: string | Array<MdastNode>,
) => MdastNode

export type H = HWithProps & HWithoutProps & Context

export type {
  Parent,
  Root,
  Element,
  MdastRoot,
  // MdastParagraphContent,
  Text,
  P,
  // MdastP,
  Body,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>

type NumId = Record<
  string,
  {
    [lvlId: string]: {
      lvlText: string
      lvlJc: string
      numFmt: string
      start: string
    }
  }
>

export type ListNumbering = {
  numIds: NumId
  abstractNumIds: NumId
}
