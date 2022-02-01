import { all } from '../all.js'
import { J, LtastContent, Node } from '../types.js'
import { wrap } from './wrap.js'

export function wrapChildren(j: J, node: Node): Array<LtastContent> {
  return wrap(all(j, node))
}
