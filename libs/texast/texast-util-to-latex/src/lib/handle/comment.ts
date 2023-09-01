import { Command, TexastContent, Comment } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'
import { commandArg } from './command-arg.js'

export const comment: BasicHandle = (node: Comment, options?: Options): string => {
  return `%${node.value}\\n`
}
