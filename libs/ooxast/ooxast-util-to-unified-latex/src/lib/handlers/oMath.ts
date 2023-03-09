import { s } from '@unified-latex/unified-latex-builder'
import { Math } from 'ooxast'
import { all } from '../all.js'
import { H, Handle } from '../types.js'

export const oMath: Handle = (h: H, node: Math.OMath) => {
  h.inMath = true
  const content = all(h, node)
  h.inMath = false

  if (h.inDisplayMath) {
    return content
  }

  return [
    h.inlineMath === '()' ? s('(') : s('$'),
    ...content,
    h.inlineMath === '()' ? s(')') : s('$'),
  ]
}
