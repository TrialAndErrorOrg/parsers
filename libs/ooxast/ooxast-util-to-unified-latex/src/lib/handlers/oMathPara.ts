import { env, s } from '@unified-latex/unified-latex-builder'
import type { Element } from 'xast'
import { select } from 'xast-util-select'
import { all } from '../all.js'
import { H, Handle, Node, Parent } from '../types.js'
import { PB } from '../util/PB.js'

export const oMathPara: Handle = (h: H, node: Node, parent?: Parent) => {
  const eqArr = select('m\\:eqArr', node as Element)

  h.inDisplayMath = true
  const content = all(h, node)
  h.inDisplayMath = false

  if (['[]', '$$'].includes(h.displayMath)) {
    return [
      PB,
      h.displayMath === '[]' ? s('\\[') : s('$$'),
      ...content,
      h.displayMath === '[]' ? s('\\]') : s('$$'),
      PB,
    ]
  }

  // an equation array is several lines
  return env(eqArr ? 'align*' : h.displayMath, content)
}
