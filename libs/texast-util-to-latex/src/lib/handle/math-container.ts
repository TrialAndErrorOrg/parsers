import { MathContainer } from 'relatex'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'
import { displayMath } from './display-math'
import { inlineMath } from './inline-math'

export const mathContainer: BasicHandle = (
  node: MathContainer,
  options: Options = {}
) => {
  switch (node.name) {
    case 'inlineMath':
      return inlineMath(node, options)
    case 'displayMath':
      return displayMath(node, options)
    default:
      return toLatex(node.children, options)
  }
}
