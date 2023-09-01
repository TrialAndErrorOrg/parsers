import { Root } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Handle, Options } from '../types.js'

export const root: BasicHandle = (node: Root, options: Options = {}) => {
  return toLatex(node.children)
}
