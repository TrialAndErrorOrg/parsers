import { DocumentEnvironment } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Handle, Node, Options } from '../types.js'

export const document: BasicHandle = (node: DocumentEnvironment, options: Options = {}) => {
  return `\\begin{document}

      ${toLatex(node.children)}

  \\end{document}`
}
