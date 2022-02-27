import { Node as UnistNode, Parent as UnistParent } from 'unist'

import {
  Parent as TexastParent,
  TexastContent,
  Literal as TexastLiteral,
  Root as TexastRoot,
  ParagraphContent as TexastParagraphContent,
} from 'texast'

import {
  Attributes as JastProperties,
  //Node,
  Parent,
  ElementContent as Element,
  Text,
  Root,
  Content,
  Name,
} from 'jast-types'

/**
 * jast Node
 */
export type Node = Parent['children'][number] | Root
type t = Extract<Node, { name: 'td' }>

export type Attributes = JastProperties
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
  citationAnalyzer?: (node: Node) => string
}

export type Handle = (
  j: J,
  node: any,
  parent?: Parent
) => TexastContent | Array<TexastContent> | void

export interface Context {
  nodeById?: {
    [id: string]: Element
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
  footnotes: TexastContent[]
  citationAnalyzer: (node: Node) => string
}

export type JWithProps = (
  node: Node,
  type: string,
  props?: Attributes,
  children?: string | Array<TexastContent>
) => TexastContent

export type JWithoutProps = (
  node: Node,
  type: string,
  children?: string | Array<TexastContent>
) => TexastContent

export type JWithPropsSpecific<TNode extends TexastContent = TexastContent> = (
  node: Node,
  type: Pick<TNode, 'type'>,
  props?: Attributes,
  //@ts-expect-error yeah i know butttt
  // TODO: Make this not error
  children?: Pick<TNode, 'children'>
) => TNode

export type J = JWithProps & JWithoutProps & Context

export type {
  Parent,
  Root,
  Element,
  Content,
  TexastLiteral,
  TexastContent,
  TexastParent,
  TexastRoot,
  TexastParagraphContent,
  Text,
  Name,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
