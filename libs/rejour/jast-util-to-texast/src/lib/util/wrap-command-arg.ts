import { CommandArg, CommandContent } from 'texast'
import { all } from '../all'
import { J, Node } from '../types'

export function wrapCommandArg(
  j: J,
  node: Node,
  optional?: boolean
): CommandArg {
  return {
    type: 'commandArg',
    optional: !!optional,
    children: all(j, node) as CommandContent[],
  }
}
