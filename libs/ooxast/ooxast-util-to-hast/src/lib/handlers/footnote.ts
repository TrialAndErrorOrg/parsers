import { H, Element } from '../types'
import { all } from '../all'

export function footnote(h: H, node: Element) {
  if (node?.attributes?.type === 'separator') return
  if (parseInt(node?.attributes?.['w:id'] || '0') < 1) return
  return h(node, 'fn', node.attributes, all(h, node))
}
