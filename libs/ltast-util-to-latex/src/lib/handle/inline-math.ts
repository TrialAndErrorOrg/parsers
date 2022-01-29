import { InlineMath } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const inlineMath: BasicHandle = (
  node: InlineMath,
  options: Options = {}
) => {
  const builtInDelimiters =
    node.delimiters === 'parenthesis' ? ['\\(', '\\)'] : ['$', '$']

  const delimiters =
    options.inlineMathDelimiter === 'parenthesis'
      ? ['\\(', '\\)']
      : builtInDelimiters
  const [left, right] = delimiters
  return ` ${left} ${toLatex(node.children)} ${right} `
}
