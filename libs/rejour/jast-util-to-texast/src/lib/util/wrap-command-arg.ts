import { P } from 'jast'
import { CommandArg, CommandContent, ParagraphContent } from 'texast'
import { all } from '../all'
import { one } from '../one'
import { Content, J, Node, Parent, Element } from '../types'

export function wrapCommandArg(
  j: J,
  nodes: P['children'][number][],
  optional?: boolean
): CommandArg {
  const fakeNode: P = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: nodes,
  }
  return {
    type: 'commandArg',
    optional: !!optional,
    children: all(j, fakeNode) as ParagraphContent[],
  }
}
