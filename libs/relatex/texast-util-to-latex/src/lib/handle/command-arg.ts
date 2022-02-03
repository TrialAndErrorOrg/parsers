import { CommandArg, isOptionalCommandArg } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const commandArg: BasicHandle = (
  node: CommandArg,
  options: Options = {}
) => {
  return isOptionalCommandArg(node)
    ? `[${toLatex(node.children)}]`
    : `{${toLatex(node.children)}}`
}
