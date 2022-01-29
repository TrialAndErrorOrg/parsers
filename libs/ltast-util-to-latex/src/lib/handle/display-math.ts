import { DisplayMath } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const displayMath: BasicHandle = (
  node: DisplayMath,
  options: Options = {}
) => {
  const builtInDelimiters =
    node.delimiters === 'bracket' ? ['\\[', '\\]'] : ['$$', '$$']

  const delimiters =
    options.inlineMathDelimiter === 'parenthesis'
      ? ['\\[', '\\]']
      : builtInDelimiters
  const [left, right] = delimiters
  return `
  ${left}
      ${toLatex(node.children)}
  ${right}
  `
}
