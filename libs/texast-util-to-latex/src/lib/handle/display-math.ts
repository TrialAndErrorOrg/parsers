import { DisplayMath } from 'relatex'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const displayMath: BasicHandle = (
  node: DisplayMath,
  options: Options = {}
) => {
  const builtInDelimiters =
    node.delimiters === '[]' ? ['\\[', '\\]'] : ['$$', '$$']

  // TODO: Clean up delimiter picking for math env
  const delimiters = options.inlineMathDelimiters
    ? options.displayMathDelimiters === '[]'
      ? ['\\[', '\\]']
      : ['$$', '$$']
    : builtInDelimiters
  const [left, right] = delimiters
  return `
  ${left}
      ${toLatex(node.children)}
  ${right}
  `
}
