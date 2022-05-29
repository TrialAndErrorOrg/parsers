import {
  Rule,
  XastNode,
  Element,
  XastParent as Parent,
  SelectState,
} from './types'
import { isElement } from 'xast-util-is-element'

import { attribute } from './attribute'
//import {className} from './class-name.js'
import { id } from './id'
import { name } from './name'
import { pseudo } from './pseudo'
import { element } from './util'

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
  state: SelectState
): boolean {
  return Boolean(
    element(node) &&
      state.schema &&
      (!query.tagName || name(query, node)) &&
      //    (!query.classNames || className(query, node)) &&
      (!query.id || id(query, node)) &&
      (!query.attrs || attribute(query, node, state.schema)) &&
      (!query.pseudos || pseudo(query, node, index, parent, state))
  )
}
