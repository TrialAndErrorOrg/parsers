import { visit } from 'unist-util-visit'
import { Command, CommandArg, Preamble } from 'texast'
import { Root, Text } from 'texast'

export interface PreambleCommand {
  type: string
  opts?: (string | PreambleCommand)[]
  args?: (string | PreambleCommand)[]
}

export function addPreamble(tree: Root, commands: PreambleCommand[]) {
  if (commands.length === 0) return tree
  visit(tree, 'preamble', (pre: Preamble) => {
    pre.children.push(
      ...[
        ...commands.flatMap((c) => [
          preambleCommandToCommand(c),
          { type: 'text', value: '\n' } as any,
        ]),
      ]
    )
  })

  return tree
}

function preambleCommandToCommand(precom: PreambleCommand): Command {
  console.log(precom)
  const opts: CommandArg[] = precom.opts
    ? precom.opts.map(
        (arg) =>
          ({
            type: 'commandArg',
            optional: true,
            children: [
              typeof arg === 'string'
                ? ({ type: 'text', value: arg } as Text)
                : preambleCommandToCommand(arg),
            ],
          } as CommandArg)
      )
    : []
  const args: CommandArg[] = precom.args?.length
    ? precom.args.map(
        (arg) =>
          ({
            type: 'commandArg',
            children: [
              typeof arg === 'string'
                ? ({ type: 'text', value: arg } as Text)
                : preambleCommandToCommand(arg),
            ],
          } as CommandArg)
      )
    : []

  return {
    type: 'command',
    name: precom.type,
    children: [...opts, ...args],
  } as Command
}
