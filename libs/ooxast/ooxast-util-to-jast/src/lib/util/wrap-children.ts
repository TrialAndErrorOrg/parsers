import { all } from '../all'
import { J, JastContent, Node } from '../types'
import { wrap } from './wrap'

export function wrapChildren(j: J, node: Node): Array<JastContent> {
  return wrap(all(j, node))
}
