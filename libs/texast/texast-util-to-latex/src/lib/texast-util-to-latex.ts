import { handle } from './handle/index.js'
import { Options, Node } from './types.js'
import { isKnownNode } from 'texast'

const invalid = (value: unknown) => {
  throw new Error('Cannot handle value `' + value + '`, expected node')
}
const unknown = (node: Node) => {
  throw new Error(`Unknown type ${node.type}, skipping...`)
}

const handleNodeProperly = (type: string, node: Node, options: Options = {}) => {
  // @ts-expect-error No it's fine we can throw everything into it
  const handleFunction = handle?.[type]

  if (!isKnownNode(node)) {
    console.log(node)
    unknown(node)
    return ''
  }

  if (typeof handleFunction === 'function') {
    return handleFunction(node, options)
  }
  throw new Error(`Invalid handle`)
}

export function toLatex(node: Node | Node[], options: Options = {}): string {
  const result = Array.isArray(node)
    ? node.map((node) => toLatex(node, options)).join('')
    : handleNodeProperly(node.type, node, options)
  return result
}

function treeToLatex(node: Node, options: Options = {}) {
  return toLatex(node, options)
}
export default treeToLatex
