import { Node } from './types.js'
import { Element } from './types.js'
import { Parent } from './types.js'
import { AssertPredicate } from 'xast-util-is-element'
export type IsElement = AssertPredicate<Element>

import { convertElement } from 'xast-util-is-element'

/**
 * @param {Node} node
 * @returns {node is Parent}
 */
export function parent(node: Node): node is Parent {
  // @ts-ignore: hush.
  return Array.isArray(node.children)
}

/** @type {IsElement} */
// @ts-ignore it works.
export const element: IsElement = convertElement()
