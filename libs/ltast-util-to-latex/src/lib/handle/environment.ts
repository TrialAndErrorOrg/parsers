import { Environment } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Node, Options } from '../types'

export const environment: BasicHandle = (
  node: Environment,
  options: Options = {}
) => {
  return `\\begin{${node.name}}

      ${toLatex(node.children)}

  \\end{${node.name}}`
}
