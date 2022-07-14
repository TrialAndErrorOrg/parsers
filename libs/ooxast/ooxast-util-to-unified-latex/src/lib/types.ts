import { Node as UnistNode, Parent as UnistParent } from 'unist'

import { Element } from 'xast'
import {
  Parent as UnifiedLatexParent,
  Content as UnifiedLatexContent,
  Root as UnifiedLatexRoot,
  P as UnifiedLatexP,
} from 'unified-latex-types'
type UnifiedLatexParagraphContent = UnifiedLatexP['children'][number]

import {
  Attributes as OoxastProperties,
  //Node,
  Parent,
  Body,
  Text,
  Root,
  P,
} from 'ooxast'

/**
 * ooxast Node
 */
export type Node = Parent['children'][number] | Root
type t = Extract<Node, { name: 'td' }>

export type Attributes = OoxastProperties
export interface Options {
  handlers?: { [handle: string]: Handle }
  document?: boolean
  newLines?: boolean
  checked?: string
  unchecked?: string
  quotes?: Array<string>
  topSection?: number
  italics?: 'emph' | 'textit'
  bibname?: string
  columnSeparator?: boolean
  documentClass?: {
    options?: string[]
    name: string
  }
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
  parseCitation?: (citation: any) => any
  collectCitation?: (citation: any, index: number | string) => any

  relations?: { [key: string]: string }
}

export type Handle = (
  j: J,
  node: any,
  parent?: Parent
) => UnifiedLatexContent | Array<UnifiedLatexContent> | void

export interface Context {
  nodeById?: {
    [id: string]: Parent
  }
  baseFound: boolean
  frozenBaseUrl: string | null
  wrapText: boolean
  inTable: boolean
  qNesting: number
  handlers: { [handler: string]: Handle }
  document: boolean | undefined
  checked: string
  unchecked: string
  quotes: Array<string>
  italics: string
  documentClass: {
    options?: string[]
    name: string
  }
  sectionDepth: number
  bibname: string
  columnSeparator: boolean
  citationNumber: number
  parseCitation: (citation: any) => any
  collectCitation: (citation: any, index: number | string) => any
  partialCitation: string
  deleteNextRun: boolean
  relations: { [key: string]: string }
  citeKeys: { [key: string]: string }
  citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
}

export type JWithProps = (
  node: Node,
  type: string,
  props?: Attributes,
  children?: string | Array<UnifiedLatexContent>
) => UnifiedLatexContent

export type JWithoutProps = (
  node: Node,
  type: string,
  children?: string | Array<UnifiedLatexContent>
) => UnifiedLatexContent

// export type JWithPropsSpecific<TNode extends UnifiedLatexContent = UnifiedLatexContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   props?: Attributes,
//   children?:
//     | string
//     | (TNode extends UnifiedLatexParent ? TNode['children'][number][] : never)
// ) => TNode

// export type JWithoutPropsSpecific<TNode extends UnifiedLatexContent = UnifiedLatexContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   children?:
//     | string
//     | (TNode extends UnifiedLatexParent ? TNode['children'][number][] : never)
// ) => TNode

export type J = JWithProps & JWithoutProps & Context

export type {
  Parent,
  Root,
  Element,
  UnifiedLatexContent,
  UnifiedLatexParent,
  UnifiedLatexRoot,
  UnifiedLatexParagraphContent,
  Text,
  P,
  UnifiedLatexP,
  Body,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
