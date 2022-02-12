import { isElement } from 'xast-util-is-element'
import { Parent } from 'ooxast'
import { all } from './all'
import { Handle, J, JastContent, Node, Element } from './types'
import { own } from './util/own'
import { wrapText } from './util/wrap-text'

export function one(
  j: J,
  node: Node,
  parent: Parent
): JastContent | Array<JastContent> | void {
  let fn: Handle | undefined

  if (isElement(node)) {
    // if (node.attributes && node.attributes.datoJast === 'ignore') {
    //   return
    // }

    if (own.call(j.handlers, node.name.replace('w:', ''))) {
      fn = j.handlers[node.name.replace('w:', '')]
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
  // @ts-ignore: Looks like a literal.
  if (typeof node.value === 'string') {
    // @ts-ignore: Looks like a literal.
    return j(node, 'text', wrapText(j, node.value))
  }

  return all(j, node)
}
