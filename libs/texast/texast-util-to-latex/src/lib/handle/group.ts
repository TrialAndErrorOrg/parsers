import { Environment, Group } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Handle, Node, Options } from '../types.js'

export const group: BasicHandle = (node: Group, options: Options = {}) => {
  return `\\begingroup

      ${toLatex(node.children)}

  \\endgroup`
}
