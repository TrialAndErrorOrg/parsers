import { LtastContent } from 'libs/jast-util-to-ltast/src/lib/types'
import {
  CommandArg,
  Environment,
  isCommandArg,
  isOptionalCommandArg,
} from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Node, Options } from '../types'

interface EnvChildren {
  children: LtastContent[]
  optargs: CommandArg[]
  args: CommandArg[]
}
export const environment: BasicHandle = (
  node: Environment,
  options: Options = {}
) => {
  const contents: EnvChildren = node.children.reduce(
    (acc: EnvChildren, child: LtastContent) => {
      if (isCommandArg(child)) {
        if (isOptionalCommandArg(child)) {
          acc.optargs.push(child)
          return acc
        }

        acc.args.push(child)
        return acc
      }

      acc.children.push(child)
      return acc
    },
    { children: [], optargs: [], args: [] }
  )

  return `\\begin{${node.name}}${toLatex(contents.optargs)}${toLatex(
    contents.args
  )}

      ${toLatex(node.children)}

  \\end{${node.name}}`
}
