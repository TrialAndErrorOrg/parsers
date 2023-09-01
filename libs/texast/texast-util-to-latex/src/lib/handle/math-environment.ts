import { MathEnvironment } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const mathEnvironment: BasicHandle = (node: MathEnvironment, options: Options = {}) => {
  return `\\begin{${node.name}}

    ${toLatex(node.children)}

\\end{${node.name}}`
}
