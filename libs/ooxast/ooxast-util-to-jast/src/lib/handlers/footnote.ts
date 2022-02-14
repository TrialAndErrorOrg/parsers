import { J, Element } from '../types'
import { all } from '../all'

export function footnote(j: J, node: Element) {
  if (node?.attributes?.type === 'separator') return
  return j(node, 'fn', node.attributes, all(j, node))
}
