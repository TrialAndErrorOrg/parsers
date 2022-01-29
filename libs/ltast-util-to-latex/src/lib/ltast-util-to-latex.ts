import { handle } from './handle'
import { zwitch } from 'zwitch'
import { configure } from './configure'
import { Options, Context, Node, Handle, Join, Unsafe } from './types'

export function toLatex(node: Node | Node[], options: Options = {}): string {
  const result = Array.isArray(node)
    ? node.map((node) => toLatex(node, options)).join('')
    : // @ts-expect-error it's fineeee
      handle[node.type](node)
  return result
}
