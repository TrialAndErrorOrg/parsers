import { CompilerFunction } from 'unified'
//import { } from 'libs/rejour-parse/node_modules/xast-util-from-xml/lib'
import { Element, Root } from 'jast-types'
import { map as unistMap } from 'unist-util-map'
import { toXml } from 'xast-util-to-xml'
import { Root as xastRoot } from 'xast-util-to-xml/lib/index.js'

/**
 * Unist map goes too deep
 */
const map = unistMap as any

export default function rejourStringify() {
  const compiler: CompilerFunction<Root, string> = (tree) => {
    const mappedTree = map(tree, (node: Root['children'][number]) => {
      if (node.type !== 'element') return node
      const { name, attributes, ...rest } = node as Element
      return {
        ...rest,
        name: camelToKebabCase(name),
        attributes: Object.fromEntries(
          Object.entries(attributes ?? {}).map(([key, value]) => [camelToKebabCase(key), value]),
        ),
      }
    })

    return toXml(mappedTree as xastRoot)
  }

  Object.assign(this, { Compiler: compiler })
}

/**
 * Turn a camel-case string back into a kebab-case one, undoing what `rejour-parse` does to
 * element and attribute names (`articleMeta` -> `article-meta`).
 */
function camelToKebabCase(input: string): string {
  return input.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
