import { fromXml } from 'xast-util-from-xml'

import { ParserFunction } from 'unified'
//import { Root as xastRoot, Node } from 'xast'
import { Root, Element } from 'rejour'
import { filter } from 'unist-util-filter'
import { map } from 'unist-util-map'
import { Element as xastElement } from 'xast-util-from-xml/lib'

export interface Settings {
  removeWhiteSpace?: boolean
}

export function rejourParse(settings: Settings = {}) {
  const parser: ParserFunction<Root> = (doc) => {
    // Assume options.
    // const settings = /** @type {Options} */ (this.data('settings'))

    const treeify = (doc: string) => {
      try {
        return fromXml(doc)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
    let tree = treeify(doc)

    tree = settings.removeWhiteSpace
      ? filter(tree, (node: any) => {
          return !(
            node.type === 'text' && node.value.replace(/[\n ]+/, '') === ''
          )
        })!
      : tree

    // map
    // attributes --> properties
    // name --> tagName
    // to be more in line with hast, which makes plugins easier to port
    //@ts-expect-error: TODO:somehow types don't align, fix
    tree = map(tree!, (node) => {
      if (node.type !== 'element') return node
      const element = node as xastElement

      return {
        type: 'element',
        tagName: element.name,
        properties: element.attributes,
        children: element.children,
        ...(element.position ? { position: element.position } : {}),
      }
    })

    return tree as Root
  }

  Object.assign(this, { Parser: parser })
}
