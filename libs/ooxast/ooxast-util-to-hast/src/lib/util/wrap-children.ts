import { all } from '../all.js'
import { H, HastContent, Node } from '../types.js'
import { wrap } from './wrap.js'

export function wrapChildren(h: H, node: Node): Array<HastContent> {
  return wrap(all(h, node))
}
