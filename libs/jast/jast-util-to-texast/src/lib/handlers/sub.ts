import { all } from '../all.js'
import { J, Node } from '../types.js'

export function sub(j: J, node: Node) {
  return j(node, 'sub', all(j, node))
}
