import { MathContainer } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'
import { displayMath } from './display-math.js'
import { inlineMath } from './inline-math.js'

export const mathContainer: BasicHandle = (node: MathContainer, options: Options = {}) => {
  switch (node.name) {
    case 'inlineMath':
      return inlineMath(node, options)
    case 'displayMath':
      return displayMath(node, options)
    default:
      return toLatex(node.children, options)
  }
}
