/**
 * xast utility to get the plain-text value of a node.
 * Adapted from
 * [`hast-util-to-string`](https://github.com/rehype-minify/blob/main/packages/xast-util-to-string).
 *
 * ## What is this?
 *
 * This package is a utility to get the plain-text value of a node.
 *
 * ## When should I use this?
 *
 * You can use this package when you want to get the plain text value of a node.
 * The algorithm used by this package is like the DOMs `Node#textContent`
 * getter.
 *
 * ## Use
 *
 * ```js
 * import {x} from 'xastscript'
 * import {toString} from 'xast-util-to-string'
 *
 * toString(x('p', 'Alpha'))
 * //=> 'Alpha'
 * toString(x('div', [x('b', 'Bold'), ' and ', x('i', 'italic'), '.']))
 * //=> 'Bold and italic.'
 * ```
 *
 * ## API
 *
 * ### `toString(node)`
 *
 * Get the plain-text value of a node.
 *
 * ###### Parameters
 *
 * *   `node` (`Node`) — xast node
 *
 * ###### Returns
 *
 * Serialized node (`string`).
 */

import { Root, Element } from 'xast'
type Node = Root | Root['children'][number]

/**
 * Get the plain-text value of a hast node.
 */
export function toString(node: Node): string {
  // “The concatenation of data of all the Text node descendants of the context
  // object, in tree order.”
  if ('children' in node) {
    return all(node)
  }

  // “Context object’s data.”
  return 'value' in node ? node.value : ''
}

/**
 * @param {Node} node
 * @returns {string}
 */
function one(node: Node): string {
  if (node.type === 'text') {
    return node.value
  }

  return 'children' in node ? all(node) : ''
}

/**
 * @param {Root|Element} node
 * @returns {string}
 */
function all(node: Root | Element): string {
  let index = -1
  /** @type {Array<string>} */
  const result: Array<string> = []

  while (++index < node.children.length) {
    result[index] = one(node.children[index])
  }

  return result.join('')
}
