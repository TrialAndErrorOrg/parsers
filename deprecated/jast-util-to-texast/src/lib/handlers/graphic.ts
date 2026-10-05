import { Graphic, List } from 'jast-types'
import { all } from '../all.js'
import { J } from '../types.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

export function graphic(j: J, node: Graphic) {
  return {
    type: 'command',
    name: 'includegraphics',
    children: [
      wrapCommandArg(j, [{ type: 'text', value: node.attributes['xlink:href'] || '' }]),
      { type: 'text', value: '\n' },
    ],
  }
}
