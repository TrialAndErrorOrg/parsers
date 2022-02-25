import { Parent } from 'jast-types'
import { all } from './all'
import { Handle, J, TexastContent, Node, Element } from './types'
import { own } from './util/own'
import { wrapText } from './util/wrap-text'

export function one(
  j: J,
  node: Node,
  parent: Parent
): TexastContent | Array<TexastContent> | void {
  let fn: Handle | undefined

  if (node.type === 'element') {
    // if (node.attributes && node.attributes.datoTexast === 'ignore') {
    //   return
    // }

    if (own.call(j.handlers, node.name)) {
      fn = j.handlers[node.name]
    }
  } else if (own.call(j.handlers, node.type)) {
    fn = j.handlers[node.type]
  }

  if (typeof fn === 'function') {
    return fn(j, node, parent)
  }

  return unknown(j, node)
}

function unknown(j: J, node: Node) {
  // @ts-expect-error: Looks like a literal.
  if (typeof node.value === 'string') {
    // @ts-expect-error: Looks like a literal.
    return j(node, 'text', wrapText(j, node.value))
  }

  return all(j, node)
}
