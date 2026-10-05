import { H, Element } from '../types.js'
import { all } from '../all.js'

export function footnote(h: H, node: Element) {
  if (node?.attributes?.type === 'separator') return
  if (parseInt(node?.attributes?.['w:id'] || '0') < 1) return
  return h(node, 'fn', node.attributes, all(h, node))
}
