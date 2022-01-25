import { Data } from 'unist'
import {
  ElementChildMap as XastElementChildMap,
  Attributes as XastAttributes,
  Root as XastRoot,
  Element as XastElement,
  RootChildMap as XastRootChildMap,
} from 'xast'
import { Parent as UnistParent } from 'unist'

export interface JASTData extends Data {
  name: string
  attributes: {}
}

export interface Root extends Omit<XastRoot, 'children'> {
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

export interface RootChildMap extends Omit<XastRootChildMap, 'element'> {
  element: Element
}

export interface Properties extends XastAttributes {}
