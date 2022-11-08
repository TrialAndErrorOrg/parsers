import { all } from '../all'
import { H, HastContent, Node } from '../types'
import { wrap } from './wrap'

export function wrapChildren(h: H, node: Node): Array<HastContent> {
  return wrap(all(h, node))
}
