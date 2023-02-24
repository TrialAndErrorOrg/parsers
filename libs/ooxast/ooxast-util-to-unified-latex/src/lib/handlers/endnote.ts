import { H, Element } from '../types'
import { m } from '@unified-latex/unified-latex-builder'
import { all } from '../all'

export function footnote(h: H, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  h.endnotes[index] = all(h, node) ?? []
  return
}
