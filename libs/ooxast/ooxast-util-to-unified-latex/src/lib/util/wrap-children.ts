import { all } from '../all'
import { H, UnifiedLatexContent, Node } from '../types'
import { wrap } from './wrap'

export function wrapChildren(h: H, node: Node): Array<UnifiedLatexContent> {
  return wrap(all(j, node))
}
