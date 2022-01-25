import { fromXml } from 'xast-util-from-xml'

import { ParserFunction } from 'unified'
import { Root, Node } from 'xast'
import { filter } from 'unist-util-filter'
import { map } from 'unist-util-map'
import { Element } from 'xast-util-from-xml/lib'

export function rejourParse() {
  const parser: ParserFunction<Root> = (doc) => {
    // Assume options.
    // const settings = /** @type {Options} */ (this.data('settings'))

    console.log('before fromxml')
    console.log(doc)
    const rawTreeify = (doc: string) => {
      try {
        return fromXml(doc)
      } catch (e) {
        console.error(e)
        throw e
      }
    }
    const rawTree = rawTreeify(doc)
    console.log('after fromxml')
    const filteredTree = filter(rawTree, (node: any) => {
      return !(node.type === 'text' && node.value.replace(/[\n ]+/, '') === '')
    })
    const tree = map(filteredTree!, (node: Node) => {
      if (node.type !== 'element') return node
      const element = node as Element

      return {
        type: 'element',
        tagName: element.name,
        properties: element.attributes,
        children: element.children,
        position: element.position,
      }
    })

    return tree as Root
  }

  Object.assign(this, { Parser: parser })
}
