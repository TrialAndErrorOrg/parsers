import { Node as UnistNode, Parent as UnistParent } from 'unist'

import { Element } from 'xast'
import {
  Parent as JastParent,
  Content as JastContent,
  Root as JastRoot,
  P as JastP,
} from 'jjast'
type JastParagraphContent = JastP['children'][number]

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
}

export type Handle = (
  j: J,
  node: any,
  parent?: Parent
) => JastContent | Array<JastContent> | void

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

// export type JWithPropsSpecific<TNode extends JastContent = JastContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   props?: Attributes,
//   children?:
//     | string
//     | (TNode extends JastParent ? TNode['children'][number][] : never)
// ) => TNode

// export type JWithoutPropsSpecific<TNode extends JastContent = JastContent> = (
//   node: Node,
//   type: TNode['type'] extends 'root' | 'text'
//     ? TNode['type'] extends 'root'
//       ? 'root'
//       : 'text'
//     : Exclude<TNode, Text | Root>['name'],
//   children?:
//     | string
//     | (TNode extends JastParent ? TNode['children'][number][] : never)
// ) => TNode

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
  P,
  JastP,
  Body,
}

export type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>
