import { fromXml } from 'xast-util-from-xml'

import { ParserFunction } from 'unified'
import {
  Root as xastRoot,
  Node as XastNode,
  Element as XastElement,
} from 'xast'
import { Root } from 'jast-types'
import { filter } from 'unist-util-filter'
import { map } from 'misc'

export interface Settings {
  removeWhiteSpace?: boolean
  fragment?: boolean
}

export default function rejourParse(options: Settings = {}) {
  const parser: ParserFunction<Root> = (doc) => {
    // Assume options.
    const settings: Settings = this.data('settings')

    const configuration = Object.assign({}, settings, options, {
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      //extensions: this.data('micromarkExtensions') || [],
      //mdastExtensions: this.data('fromMarkdownExtensions') || [],
    })

    const treeify = (doc: string) => {
      try {
        return fromXml(doc)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
    let tree = treeify(doc)

    tree = settings?.removeWhiteSpace
      ? filter(tree, (node: XastNode) => {
          return !(
            //@ts-expect-error ITS FINE
            (node.type === 'text' && node.value.replace(/[\n ]+/, '') === '')
          )
        })!
      : tree

    // map
    // attributes --> attributes
    // name --> name
    // to be more in line with hast, which makes plugins easier to port
    tree = map(tree!, (node: XastElement) => {
      if (node.type !== 'element') return node
      const element = node as XastElement

      const attributes = element.attributes
        ? Object.entries(element.attributes).reduce(
            (
              acc: { [key: string]: any },
              [key, value]: [key: string, value: any]
            ) => {
              acc[pascalToCamelCase(key)] = value
              return acc
            },
            {}
          )
        : {}
      return {
        type: 'element',
        name: pascalToCamelCase(element.name),
        attributes: attributes,
        children: element.children,
        ...(element.position ? { position: element.position } : {}),
      }
    })

    return tree as Root
  }

  Object.assign(this, { Parser: parser })
}

/**
 * Turn a pascal-case string into a camel-case string.
 * Necessary because working with pascal-case in js is annoying.
 */
function pascalToCamelCase(input: string): string {
  return input.replace(/-(\w)/g, (string, lowercaseLetter) =>
    lowercaseLetter.toUpperCase()
  )
}
