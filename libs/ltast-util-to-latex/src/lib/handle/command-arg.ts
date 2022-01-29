import { CommandArg } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const commandArg: BasicHandle = (
  node: CommandArg,
  options: Options = {}
) => {
  return node.optional
    ? `[${toLatex(node.children)}]`
    : `{${toLatex(node.children)}}`
}
