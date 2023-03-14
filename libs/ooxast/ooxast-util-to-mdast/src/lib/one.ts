import { isElement } from 'xast-util-is-element'
import { Parent } from 'ooxast'
import { all } from './all.js'
import { Handle, state, MdastNode, Node } from './types.js'
import { own } from './util/own.js'
import { wrapText } from './util/wrap-text.js'

export function one(
  state: State,
  node: Node,
  parent?: Parent,
): MdastNode | Array<MdastNode> | void {
  let fn: Handle | undefined

  if (isElement(node)) {
    if (own.call(state.handlers, node.name.replace(/\w+:/, ''))) {
      fn = state.handlers[node.name.replace(/\w+:/, '')]
    }
  } else if (own.call(state.handlers, node.type)) {
    fn = state.handlers[node.type]
  }

  if (typeof fn === 'function') {
    return fn(state, node, parent)
  }

  return unknown(state, node)
}

function unknown(state: State, node: Node) {
  // @ts-expect-error: Looks like a literal.
  if (typeof node.value === 'string') {
    // @ts-expect-error: Looks like a literal.
    return h(node, 'text', wrapText(state, node.value))
  }

  return state.all(node)
}
