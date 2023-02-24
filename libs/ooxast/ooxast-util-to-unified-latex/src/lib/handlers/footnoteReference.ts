import { H, Element } from '../types'
import { m } from '@unified-latex/unified-latex-builder'

export function footnoteReference(h: H, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  return m('footnote', h.footnotes[index])
}
