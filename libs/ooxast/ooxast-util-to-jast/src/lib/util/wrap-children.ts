import { all } from '../all.js'
import { J, JastContent, Node } from '../types.js'
import { wrap } from './wrap.js'

export function wrapChildren(j: J, node: Node): Array<JastContent> {
  return wrap(all(j, node))
}
