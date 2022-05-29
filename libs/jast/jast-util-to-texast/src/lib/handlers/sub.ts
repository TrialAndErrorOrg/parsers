import { all } from '../all'
import { J, Node } from '../types'

export function sub(j: J, node: Node) {
  return j(node, 'sub', all(j, node))
}
