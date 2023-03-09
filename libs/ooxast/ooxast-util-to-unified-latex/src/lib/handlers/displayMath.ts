import { DisplayMath } from '@unified-latex/unified-latex-types'
import { all } from '../all.js'
import { H, Handle } from '../types.js'

export const displayMath: Handle = (h: H, node): DisplayMath => {
  h.inMath = true
  const content: DisplayMath = {
    type: 'displaymath',
    content: all(h, node),
  }
  h.inMath = false
  return content
}
