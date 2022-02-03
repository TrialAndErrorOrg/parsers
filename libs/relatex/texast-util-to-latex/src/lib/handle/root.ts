import { Root } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const root: BasicHandle = (node: Root, options: Options = {}) => {
  return toLatex(node.children)
}
