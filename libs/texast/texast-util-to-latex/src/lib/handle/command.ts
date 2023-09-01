import { Command, CommandArg, CommandArgOpt, isOptionalCommandArg, TexastContent } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'
import { commandArg } from './command-arg.js'

interface CommandChildren {
  optargs: CommandArgOpt[]
  args: CommandArg[]
}
export const command: BasicHandle = (node: Command, options?: Options): string => {
  const contents = node.children?.reduce(
    (acc: CommandChildren, child: CommandArg) => {
      if (isOptionalCommandArg(child)) {
        acc.optargs.push(child)
        return acc
      }

      acc.args.push(child)
      return acc
    },
    { optargs: [], args: [] },
  )

  return `\\${node.name}${toLatex(contents.optargs)}${toLatex(contents.args)}`
}
