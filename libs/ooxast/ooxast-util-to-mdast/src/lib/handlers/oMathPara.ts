import { env, s } from '@unified-latex/unified-latex-builder'
import { all } from '../all.js'
import { State } from '../state.js'
import { Handle, Node, Parent } from '../types.js'
import { PB } from '../util/PB.js'

export const oMathPara: Handle = (state: State, node: Node, parent?: Parent) => {
  state.inDisplayMath = true
  const content = state.all(node)
  state.inDisplayMath = false

  if (['[]', '$$'].includes(state.displayMath)) {
    return [
      PB,
      state.displayMath === '[]' ? s('\\[') : s('$$'),
      ...content,
      state.displayMath === '[]' ? s('\\]') : s('$$'),
      PB,
    ]
  }

  return env(state.displayMath, content)
}
