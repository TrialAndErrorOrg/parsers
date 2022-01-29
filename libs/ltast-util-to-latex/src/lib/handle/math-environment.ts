import { MathEnvironment } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const mathEnvironment: BasicHandle = (
  node: MathEnvironment,
  options: Options = {}
) => {
  return `\\begin{${node.name}}

    ${toLatex(node.children)}

\\end{${node.name}}`
}
