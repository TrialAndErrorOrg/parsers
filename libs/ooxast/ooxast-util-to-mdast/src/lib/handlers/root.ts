import { State } from '../state.js'
import { MdastNode, Root } from '../types.js'
import { wrap, wrapNeeded } from '../util/wrap.js'

export function root(state: State, node: Root) {
  let children = state.all(node)

  if (state.options.document || wrapNeeded(children)) {
    children = wrap(children)
  }

  const result = { type: 'root', children } as MdastNode
  state.patch(node, result)
  return result
}
