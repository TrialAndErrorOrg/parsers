import { Data } from 'unist'
import {
  Cdata,
  Instruction,
  Doctype,
  ElementChildMap as XastElementChildMap,
  Attributes as XastAttributes,
  Comment,
  Text,
  Root as XastRoot,
  Element as XastElement,
  RootChildMap as XastRootChildMap,
} from 'libs/rejour-parse/node_modules/@types/xast'
import { Parent as UnistParent } from 'unist'

export interface JASTData extends Data {
  name: string
  attributes: {}
}

export interface Root extends UnistParent {
  type: 'root'
  children: Array<RootChildMap[keyof RootChildMap]>
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
  children: Array<ElementChildMap[keyof ElementChildMap]>
}

export interface ElementChildMap extends Omit<XastElementChildMap, 'element'> {
  element: Element
}

export interface RootChildMap {
  cdata: Cdata
  comment: Comment
  doctype: Doctype
  element: Element
  instruction: Instruction
  text: Text
}
// export interface RootChildMap extends Omit<XastRootChildMap, 'element'> {
//   element: Element
// }

export interface Properties extends XastAttributes {}

export { UnistNode as Node }
export { UnistParent as Parent }
