import { all } from '../all.js'
import { J, Node, Text } from '../types.js'

export function text(j: J, node: Text) {
  return j(node, 'text', node.value)
}
