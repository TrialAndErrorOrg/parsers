import { all } from '../all'
import { J, TexastContent, Node } from '../types'
import { wrap } from './wrap'

export function wrapChildren(j: J, node: Node): Array<TexastContent> {
  return wrap(all(j, node))
}
