import { Environment, Group } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Node, Options } from '../types'

export const group: BasicHandle = (node: Group, options: Options = {}) => {
  return `\\begingroup

      ${toLatex(node.children)}

  \\endgroup`
}
