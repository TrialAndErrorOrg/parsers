import { remove } from 'unist-util-remove'
import { visit } from 'unist-util-visit'
import { Element, Root } from '@jote/rejour'

const containsAbstract = (node: Element) => {
  let containsAbstract = false
  visit(node, 'text', (textNode) => {
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

    // TODO: Make finding abstract less inefficient
    remove(tree, (rawNode) => {
      const node = rawNode as Element
      return node.tagName === 'sec' && containsAbstract(node)
    })

    if (!abstractNode) return

    const abstractPs = abstractNode.children.slice(1)
    visit(
      tree,
      (node) => (node as Element).tagName === 'article-meta',
      (articleMetaDataNode) => {
        const kids = (articleMetaDataNode as Element).children

        ;(articleMetaDataNode as Element).children = [...kids, ...abstractPs]
      }
    )
  }
}
