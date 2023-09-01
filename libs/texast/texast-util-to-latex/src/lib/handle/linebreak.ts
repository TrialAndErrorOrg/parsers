import { Linebreak } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const linebreak: BasicHandle = (node: Linebreak, options: Options = {}) => {
  const height = node.height ? `[${node.height}]` : ''
  return `\\\\${height}`
}
