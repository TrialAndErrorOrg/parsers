import { Command, TexastContent, Comment } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'
import { commandArg } from './command-arg'

export const comment: BasicHandle = (
  node: Comment,
  options?: Options
): string => {
  return `%${node.value}\\n`
}
