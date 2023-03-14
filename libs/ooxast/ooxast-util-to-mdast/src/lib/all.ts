import { one } from './one.js'
import { State } from '../state.js'
import {  MdastNode, Node, Parent } from './types.js'

/**
 * Convert all nodes in tree using h
 * @param h ooxast constructor function
 * @param parent
 * @returns
 */
export function state.all(: State, parent: Node | Parent): MdastNode[] {
  const nodes: Array<Node> = 'children' in parent ? parent.children || [] : []
  const values: Array<MdastNode> = []
  let index = -1
  const length = nodes.length
  while (++index < length) {
    const result =
      'children' in parent ? state.one(, nodes[index], parent) : state.one(, nodes[index])

    if (Array.isArray(result)) {
      values.push(...result)
    } else if (result) {
      values.push(result)
    }
  }

  return values
}
