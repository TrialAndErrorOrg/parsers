import { Environment, Group } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Handle, Node, Options } from '../types'

export const group: BasicHandle = (node: Group, options: Options = {}) => {
  return `\\begingroup

      ${toLatex(node.children)}

  \\endgroup`
}
