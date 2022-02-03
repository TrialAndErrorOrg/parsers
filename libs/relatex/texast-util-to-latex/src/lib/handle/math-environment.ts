import { MathEnvironment } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const mathEnvironment: BasicHandle = (
  node: MathEnvironment,
  options: Options = {}
) => {
  return `\\begin{${node.name}}

    ${toLatex(node.children)}

\\end{${node.name}}`
}
