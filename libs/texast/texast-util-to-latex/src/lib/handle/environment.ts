import { CommandArg, Environment, isCommandArg, isOptionalCommandArg } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Handle, Node, Options } from '../types.js'

interface EnvChildren {
  children: Node[]
  optargs: CommandArg[]
  args: CommandArg[]
}
export const environment: BasicHandle = (node: Environment, options: Options = {}) => {
  const contents: EnvChildren = node.children.reduce(
    (acc: EnvChildren, child: Node) => {
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
    { children: [], optargs: [], args: [] },
  )

  // prettier-ignore
  return `
\\begin{${node.name}}${toLatex(contents.optargs)}${toLatex(contents.args)}

${"  "}${toLatex(contents.children)}

\\end{${node.name}}
`
}
