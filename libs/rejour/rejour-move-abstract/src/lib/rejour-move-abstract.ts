import { Element, Root, Text } from 'jast'
import { remove } from 'unist-util-remove'
import { visit } from 'unist-util-visit'
import { filter } from 'unist-util-filter'

const containsAbstract = (node: Element) => {
  let containsAbstract = false
  visit(node, 'text', (textNode: Text) => {
    if (!(textNode.value.replace(/[^\w]/g, '').toLowerCase() === 'abstract')) {
      return
    }
    containsAbstract = true
    return
  })
  return containsAbstract
}

const findAbstractNode = (tree: Root): Element | null => {
  let abstractNode: Element | null = null
  visit(
    tree,
    (node) => (node as Element).tagName === 'sec',
    (node) => {
      if (containsAbstract(node as Element)) abstractNode = node as Element
    }
  )
  return abstractNode
}

export default function rejourMoveAbstract() {
  return (tree: Root) => {
    const abstractNode = findAbstractNode(tree)

    // TODO: [rejour-move-abstract] Make finding abstract less inefficient
    remove(tree, (rawNode) => {
      const node = rawNode as Element
      return node.tagName === 'sec' && containsAbstract(node)
    })

    if (!abstractNode) return

    const abstractPs = filter(
      abstractNode,
      (node) => node.type !== 'element' || (node as Element).tagName !== 'title'
    )
    const abstract: Element = {
      type: 'element',
      tagName: 'abstract',
      properties: {},
      children: abstractPs!.children || [],
    }
    visit(
      tree,
      (node) => (node as Element).tagName === 'article-meta',
      (articleMetaDataNode) => {
        ;(articleMetaDataNode as Element).children.push(abstract)
      }
    )
  }
}
