import { DocumentEnvironment } from 'relatex'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Handle, Node, Options } from '../types'

export const document: BasicHandle = (
  node: DocumentEnvironment,
  options: Options = {}
) => {
  return `\\begin{document}

      ${toLatex(node.children)}

  \\end{document}`
}
