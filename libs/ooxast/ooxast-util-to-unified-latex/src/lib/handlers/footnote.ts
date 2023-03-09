import { H, Element } from '../types.js'
import { all } from '../all.js'

export function footnote(h: H, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  h.footnotes[index] = all(h, node) ?? []
  return
}
