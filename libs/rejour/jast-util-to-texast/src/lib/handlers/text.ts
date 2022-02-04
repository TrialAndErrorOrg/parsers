import { all } from '../all'
import { J, Node, Text } from '../types'

export function text(j: J, node: Text) {
  return j(node, 'text', node.value)
}
