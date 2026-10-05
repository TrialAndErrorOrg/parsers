// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all.js'
import { J, Node } from '../types.js'

export function italic(j: J, node: Node) {
  return j(node, 'command', { name: j['italics'] }, [j(node, 'commandArg', all(j, node))])
}
