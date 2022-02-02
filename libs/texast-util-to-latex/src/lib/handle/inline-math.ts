import { InlineMath } from 'relatex'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const inlineMath: BasicHandle = (
  node: InlineMath,
  options: Options = {}
) => {
  const builtInDelimiters =
    node.delimiters === '()' ? ['\\(', '\\)'] : ['$', '$']
  console.log(node.delimiters)

  // TODO: Clean up delimiter picking for math env
  const delimiters = options.inlineMathDelimiters
    ? options.inlineMathDelimiters === '()'
      ? ['\\(', '\\)']
      : ['$', '$']
    : builtInDelimiters
  const [left, right] = delimiters
  return ` ${left} ${toLatex(node.children)} ${right} `
}
