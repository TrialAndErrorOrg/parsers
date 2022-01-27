import { Data } from 'unist'
import {
  Cdata,
  Instruction,
  Doctype,
  ElementChildMap as XastElementChildMap,
  Attributes as XastAttributes,
  Comment,
  Parent as XastParent,
  Text as XastText,
  Root as XastRoot,
  Element as XastElement,
  RootChildMap as XastRootChildMap,
} from 'libs/rejour-parse/node_modules/@types/xast'
import { Node as UnistNode, Parent as UnistParent } from 'unist'

export interface JASTData extends Data {
  name: string
  attributes: {}
}

export interface Element extends UnistParent {
  type: 'element'
  /**
   * The element's qualified name.
   */
  tagName: string
  /**
   * Information associated with the element.
   */
  properties?: Properties | undefined
  children: Array<ElementContent>
}

export interface ElementChildMap extends Omit<XastElementChildMap, 'element'> {
  element: Element
}
export type ElementContent = ElementChildMap[keyof ElementChildMap]

export interface Root extends UnistParent {
  type: 'root'
  children: Array<RootContent>
}

export interface RootChildMap {
  cdata: Cdata
  comment: Comment
  doctype: Doctype
  element: Element
  instruction: Instruction
  text: Text
}

export type RootContent = RootChildMap[keyof RootChildMap]

export type Content = RootContent | ElementContent
// export interface RootChildMap extends Omit<XastRootChildMap, 'element'> {
//   element: Element
// }

export interface Properties extends XastAttributes {}
export interface Text extends XastText {}

export interface Parent extends UnistParent {
  children: Array<Content>
}

export { UnistNode as Node }
