import { P } from 'jast-types'
import { CommandArg, CommandContent, ParagraphContent } from 'texast'
import { all } from '../all.js'
import { one } from '../one.js'
import { Content, J, Node, Parent, Element } from '../types.js'

export function wrapCommandArg(
  j: J,
  nodes: P['children'][number][],
  optional?: boolean,
): CommandArg {
  const fakeNode: P = {
    type: 'element',
    name: 'p',
    attributes: {},
    children: nodes,
  }
  return {
    type: 'commandArg',
    optional: !!optional,
    children: all(j, fakeNode) as ParagraphContent[],
  }
}
