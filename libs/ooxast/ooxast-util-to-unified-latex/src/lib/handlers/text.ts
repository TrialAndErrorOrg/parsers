import { s } from '@unified-latex/unified-latex-builder'
import { H, Text } from '../types.js'
import { escapeLatex } from '../util/escape.js'

export function text(h: H, node: Text) {
  if (h.inDisplayMath || h.inMath || h.inTable) {
    return s(node.value)
  }

  return s(escapeLatex(node.value))
}
