import { H, Handle } from '../types.js'
import { Hyperlink } from 'ooxast'
import { toString } from 'xast-util-to-string'
import { all } from '../all.js'
import { arg, m, s } from '@unified-latex/unified-latex-builder'

export const hyperlink: Handle = (h: H, node: Hyperlink) => {
  const relId = node.attributes['r:id']
  const rel = h.relations[relId]

  const contents = all(h, node)

  if (!rel) {
    const result = s(toString(node))
    // state.patch(node, result)
    return result
  }

  const result = m('href', [arg(rel), arg(contents)])
  // state.patch(node, result)
  return result
}
