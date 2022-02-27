import { J, Element } from '../types'
import { all } from '../all'

export function footnote(j: J, node: Element) {
  if (node?.attributes?.type === 'separator') return
  if (parseInt(node?.attributes?.['w:id'] || '0') < 1) return
  return j(node, 'fn', node.attributes, all(j, node))
}
