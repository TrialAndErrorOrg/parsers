import { Node, Element, Parent } from './types.js'
import { AssertPredicate } from 'xast-util-is-element'
export type IsElement = AssertPredicate<Element>

import { convertElement } from 'xast-util-is-element'

/**
 * @param {Node} node
 * @returns {node is Parent}
 */
export function parent(node: Node): node is Parent {
  // @ts-expect-error: hush.
  return Array.isArray(node.children)
}

/** @type {IsElement} */
// @ts-expect-error it works.
export const element: IsElement = convertElement()
