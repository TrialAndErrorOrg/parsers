import { all } from '../all.js'
import { J, TexastContent, Node } from '../types.js'
import { wrap } from './wrap.js'

export function wrapChildren(j: J, node: Node): Array<TexastContent> {
  return wrap(all(j, node))
}
