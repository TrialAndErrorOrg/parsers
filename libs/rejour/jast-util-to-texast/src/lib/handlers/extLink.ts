// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { ExtLink, Fig } from 'jjast'
import { J } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'

export function extLink(j: J, node: ExtLink) {
  return {
    type: 'command',
    name: 'href',
    children: [
      wrapCommandArg(j, [
        { type: 'text', value: node.attributes['xlink:href'] },
      ]),
      //@ts-ignore shut up
      wrapCommandArg(j, node.children),
    ],
  }
}
