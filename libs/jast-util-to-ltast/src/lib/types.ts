import { Node as UnistNode, Parent as UnistParent } from 'unist'

import {
  Parents as LtastParent,
  Nodes as LtastNode,
  Literal as LtastLiteral,
  Root as LtastRoot,
} from 'relatex'

import {
  Properties,
  //Node,
  Parent,
  Element,
  Text,
  Root,
  Content,
} from 'rejour'
/**
 * jast Node
 */
export type Node = Content | Root
export interface Options {
  handlers?: { [handle: string]: Handle }
  document?: boolean
  newLines: boolean
  checked: string
  unchecked: string
  quotes: Array<string>
}

export type Handle = (
  j: J,
  node: any,
  parent?: Parent
) => LtastNode | Array<LtastNode> | void

export interface Context {
  nodeById: {
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
}

export type JWithProps = (
  node: Node,
  type: string,
  props?: Properties,
  children?: string | Array<LtastNode>
) => LtastNode
export type JWithoutProps = (
  node: Node,
  type: string,
  children?: string | Array<LtastNode>
) => LtastNode

export type J = JWithProps & JWithoutProps & Context

export {
  Parent,
  Root,
  Element,
  LtastLiteral,
  LtastNode,
  LtastParent,
  LtastRoot,
  Properties,
  Text,
}
