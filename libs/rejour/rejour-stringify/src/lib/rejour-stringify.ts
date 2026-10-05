import type { Compiler, Plugin } from 'unified'
import type { Element, Root } from 'jast-types'
import type { Root as XastRoot } from 'xast'
import { map as unistMap } from 'unist-util-map'
import { toXml } from 'xast-util-to-xml'

/**
 * Unist map goes too deep
 */
const map = unistMap as any

const rejourStringify: Plugin<[], Root, string> = function () {
  const compiler: Compiler<Root, string> = (tree) => {
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

    // jast's own `Attributes` also allow booleans and numbers, which xast's don't; `toXml`
    // stringifies them all the same.
    return toXml(mappedTree as XastRoot)
  }

  // `this` is an untyped processor, whose `compiler` takes any node.
  this.compiler = compiler as Compiler
}

export default rejourStringify

/**
 * Turn a camel-case string back into a kebab-case one, undoing what `rejour-parse` does to
 * element and attribute names (`articleMeta` -> `article-meta`).
 */
function camelToKebabCase(input: string): string {
  return input.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}
