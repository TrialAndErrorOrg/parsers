import { DisplayMath } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const displayMath: BasicHandle = (node: DisplayMath, options: Options = {}) => {
  const builtInDelimiters = node.delimiters === '[]' ? ['\\[', '\\]'] : ['$$', '$$']

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
