import { Node as UnistNode, Parent as UnistParent } from 'unist'

import { Element } from 'xast'
import {
  Parent as HastParent,
  Content as HastContent,
  Root as HastRoot,
  // P as HastP,
} from 'hast'
// type HastParagraphContent = HastP['children'][number]

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
  pHandlers?: { matcher: string | RegExp; handler: StyleHandle }[]
}

export type Handle = (
  h: H,
  node: any,
  parent?: Parent
) => HastContent | Array<HastContent> | void

export type StyleHandleWithParent = (
  h: H,
  node: any,
  parent: Parent
) => HastContent | Array<HastContent> | void
export type StyleHandleWithParentWithStyle = (
  h: H,
  node: any,
  parent: Parent,
  style: string
) => HastContent | Array<HastContent> | void

export type StyleHandleWithoutParentWithStyle = (
  h: H,
  node: any,
  style: string
) => HastContent | Array<HastContent> | void
export type StyleHandleWithoutParentWithoutStyle = (
  h: H,
  node: any
) => HastContent | Array<HastContent> | void

export type StyleHandle =
  | StyleHandleWithParent
  | StyleHandleWithoutParentWithStyle
  | StyleHandleWithoutParentWithoutStyle
  | StyleHandleWithParentWithStyle

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
  pHandlers: { matcher: string | RegExp; handler: Handle }[]
}

export type HWithProps = (
  node: Node,
  type: string,
  props?: Attributes,
  children?: string | Array<HastContent>
) => HastContent

export type HWithoutProps = (
  node: Node,
  type: string,
  children?: string | Array<HastContent>
) => HastContent

// export type JWithPropsSpecific<TNode extends HastContent = HastContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   props?: Attributes,
//   children?:
//     | string
//     | (TNode extends HastParent ? TNode['children'][number][] : never)
// ) => TNode

// export type JWithoutPropsSpecific<TNode extends HastContent = HastContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   children?:
//     | string
//     | (TNode extends HastParent ? TNode['children'][number][] : never)
// ) => TNode

export type H = HWithProps & HWithoutProps & Context

export type {
  Parent,
  Root,
  Element,
  HastContent,
  HastParent,
  HastRoot,
  // HastParagraphContent,
  Text,
  P,
  // HastP,
  Body,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
