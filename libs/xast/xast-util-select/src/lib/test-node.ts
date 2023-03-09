import { Rule, XastNode, XastParent as Parent, SelectState } from './types.js'

import { attribute } from './attribute.js'
//import {className} from './class-name.js'
import { id } from './id.js'
import { name } from './name.js'
import { pseudo } from './pseudo.js'
import { element } from './util.js'

/**
 * @param {Rule} query
 * @param {HastNode} node
 * @param {number|null} index
 * @param {Parent|null} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
export function test(
  query: Rule,
  node: XastNode,
  index: number | null,
  parent: Parent | null,
  state: SelectState,
): boolean {
  return Boolean(
    element(node) &&
      state.schema &&
      (!query.tagName || name(query, node)) &&
      //    (!query.classNames || className(query, node)) &&
      (!query.id || id(query, node)) &&
      (!query.attrs || attribute(query, node, state.schema)) &&
      (!query.pseudos || pseudo(query, node, index, parent, state)),
  )
}
