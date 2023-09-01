import { CommandArg, isOptionalCommandArg } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Handle, Options } from '../types.js'

export const commandArg: BasicHandle = (node: CommandArg, options: Options = {}) => {
  return isOptionalCommandArg(node) ? `[${toLatex(node.children)}]` : `{${toLatex(node.children)}}`
}
