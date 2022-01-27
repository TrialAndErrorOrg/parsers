import { Node as UnistNode, Parent as UnistParent } from 'unist'

import {
  Parent as LtastParent,
  Node as LtastNode,
  Literal as LtastLiteral,
  Root as LtastRoot,
} from 'relatex'

import {
  Properties,
  Node,
  Parent,
  Element as JastElement,
  Root as JastRoot,
} from '@jote/rejour'

/**
 *  {import('mdast').Parent} MdastParent
 *  {import('mdast').ListContent} MdastListContent
 *  {import('mdast').PhrasingContent} MdastPhrasingContent
 *  {import('mdast').DefinitionContent} MdastDefinitionContent
 *  {import('mdast').BlockContent} MdastBlockContent
 *  {import('mdast').TableContent} MdastTableContent
 *  {import('mdast').RowContent} MdastRowContent
 *
 *  {import('hast').Parent} Parent
 *  {import('hast').Root} Root
 *  {import('hast').Element} Element
 *  {import('hast').Text} Text
 *  {import('hast').Comment} Comment
 *  {Element['children'][number]} ElementChild
 *  {Parent['children'][number]} Child
 *  {Child|Root} Node
 *
 *
 *  {Record<string, unknown>} Properties
 *
 *  Options
 * @property {Object.<string, Handle>} [handlers]
 * @property {boolean} [document]
 * @property {boolean} [newlines=false]
 * @property {string} [checked='[x]']
 * @property {string} [unchecked='[ ]']
 * @property {Array.<string>} [quotes=['"']]
 *
 */

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
  Node,
}
