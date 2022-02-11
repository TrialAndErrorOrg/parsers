import { Node as UnistNode, Parent as UnistParent } from 'unist'

import {
  Parent as JastParent,
  Content as JastContent,
  Root as JastRoot,
  P,
} from 'jjast'
type JastParagraphContent = P['children'][number]

import {
  Attributes as OoxastProperties,
  //Node,
  Parent,
  Element,
  Text,
  Root,
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
}

export type Handle = (
  j: J,
  node: any,
  parent?: Parent
) => JastContent | Array<JastContent> | void

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
}

export type JWithProps = (
  node: Node,
  type: string,
  props?: Attributes,
  children?: string | Array<JastContent>
) => JastContent

export type JWithoutProps = (
  node: Node,
  type: string,
  children?: string | Array<JastContent>
) => JastContent

export type JWithPropsSpecific<TNode extends JastContent = JastContent> = (
  node: Node,
  type: Pick<TNode, 'type'>,
  props?: Attributes,
  //@ts-ignore yeah i know butttt
  // TODO: Make this not error
  children?: Pick<TNode, 'children'>
) => TNode

export type J = JWithProps & JWithoutProps & Context

export type {
  Parent,
  Root,
  Element,
  JastContent,
  JastParent,
  JastRoot,
  JastParagraphContent,
  Text,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
