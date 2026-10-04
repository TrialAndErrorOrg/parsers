import { s } from '@unified-latex/unified-latex-builder'
import { H, Text } from '../types.js'
import { escapeLatex } from '../util/escape.js'

export function text(h: H, node: Text) {
  if (h.inDisplayMath || h.inMath) {
    return s(node.value)
  }

  // Text in table cells needs escaping too: an unescaped `%` comments out the rest of the
  // row, an `&` adds a column. Literal braces would unbalance the groups around them.
  return s(escapeLatex(node.value, { escapeBraces: true }))
}
