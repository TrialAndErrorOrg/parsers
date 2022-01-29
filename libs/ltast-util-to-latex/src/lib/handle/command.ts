import { Command, LtastContent } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'
import { commandArg } from './command-arg'

export const command: BasicHandle = (
  node: Command,
  options?: Options
): string => {
  return `\\${node.name}${toLatex(node.children)}`
}
