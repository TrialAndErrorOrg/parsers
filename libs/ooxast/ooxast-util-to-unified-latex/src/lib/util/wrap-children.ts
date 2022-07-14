import { all } from '../all'
import { J, UnifiedLatexContent, Node } from '../types'
import { wrap } from './wrap'

export function wrapChildren(j: J, node: Node): Array<UnifiedLatexContent> {
  return wrap(all(j, node))
}
