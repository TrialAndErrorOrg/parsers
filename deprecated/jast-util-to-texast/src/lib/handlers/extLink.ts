// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { ExtLink, Fig } from 'jast-types'
import { J } from '../types.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

export function extLink(j: J, node: ExtLink) {
  return {
    type: 'command',
    name: 'href',
    children: [
      wrapCommandArg(j, [{ type: 'text', value: node.attributes['xlink:href'] }]),
      wrapCommandArg(j, node.children),
    ],
  }
}
