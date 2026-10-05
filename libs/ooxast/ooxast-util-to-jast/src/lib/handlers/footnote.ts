import { J, Element } from '../types.js'
import { all } from '../all.js'

export function footnote(j: J, node: Element) {
  if (node?.attributes?.['w:type'] === 'separator') return
  const id = parseInt(node?.attributes?.['w:id'] || '0')
  if (id < 1) return
  return j(node, 'fn', { id: `fn-${id}` }, all(j, node))
}
