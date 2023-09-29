import { Compiler } from 'unified'
//import { } from 'libs/rejour-parse/node_modules/xast-util-from-xml/lib'
import { Element, Root } from 'jast-types'
import { map as unistMap } from 'unist-util-map'
import { toXml } from 'xast-util-to-xml'
import { Root as XastRoot } from 'xast'

/**
 * Unist map goes too deep
 */
const map = unistMap as any

export default function rejourStringify() {
  const compiler: Compiler<Root, string> = (tree) => {
    const mappedTree = map(tree, (node: Root['children'][number]) => {
      if (node.type !== 'element') return node
      const { name, attributes, ...rest } = node as Element
      return { ...rest, name: name, attributes: attributes }
    })

    return toXml(mappedTree as XastRoot)
  }

  Object.assign(this, { Compiler: compiler })
}
