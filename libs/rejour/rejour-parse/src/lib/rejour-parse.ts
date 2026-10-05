import { fromXml } from 'xast-util-from-xml'

import type { Plugin } from 'unified'
import type { Nodes as XastNodes, Root as XastRoot, Text as XastText } from 'xast'
import type { Root } from 'jast-types'
import { filter } from 'unist-util-filter'
import { map as unistMap } from 'unist-util-map'

/**
 * Unist map goes too deep
 */
const map = unistMap as any

export interface Options {
  removeWhiteSpace?: boolean
  fragment?: boolean
}

/**
 * @deprecated Use `Options`.
 */
export type Settings = Options

declare module 'unified' {
  interface Settings {
    /**
     * Drop whitespace-only text nodes while parsing (`rejour-parse`).
     */
    removeWhiteSpace?: boolean
    /**
     * Not used yet (`rejour-parse`).
     */
    fragment?: boolean
  }
}

const rejourParse: Plugin<[(Options | undefined)?], string, Root> = function (options) {
  this.parser = (doc) => {
    const configuration: Options = { ...this.data('settings'), ...options }

    const treeify = (doc: string) => {
      try {
        return fromXml(doc)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
    let tree: XastRoot = treeify(doc)

    tree = configuration.removeWhiteSpace
      ? (filter(tree, { cascade: false }, (node) => {
          return !(node.type === 'text' && (node as XastText).value.trim() === '')
        }) as XastRoot)
      : tree

    // map
    // attributes --> attributes
    // name --> name
    // to be more in line with hast, which makes plugins easier to port
    tree = map(tree, (node: XastNodes) => {
      if (node.type !== 'element') return node

      const attributes = Object.fromEntries(
        Object.entries(node.attributes ?? {}).map(([key, value]) => [
          pascalToCamelCase(key),
          value,
        ]),
      )
      return {
        type: 'element',
        name: pascalToCamelCase(node.name),
        attributes,
        children: node.children,
        ...(node.position ? { position: node.position } : {}),
      }
    })

    // jast's own `Attributes` differ from xast's, so the trees aren't assignable.
    return tree as unknown as Root
  }
}

export default rejourParse

/**
 * Turn a pascal-case string into a camel-case string.
 * Necessary because working with pascal-case in js is annoying.
 */
function pascalToCamelCase(input: string): string {
  return input.replace(/-(\w)/g, (string, lowercaseLetter) => lowercaseLetter.toUpperCase())
}
