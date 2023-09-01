import { all } from '../all.js'
import { J, Node } from '../types.js'

export function sup(j: J, node: Node) {
  return j(node, 'super', all(j, node))
}
