import { Node, Element, isElement, Root, Text, Abstract } from 'jjast'
import { remove } from 'unist-util-remove'
import { visit as origVisit } from 'unist-util-visit'
import { filter } from 'unist-util-filter'

// console.log(Node)
// fix for typescript bug
const visit = origVisit as any
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

const findAbstractNode = (tree: Root): Abstract | null => {
  let abstractNode: Element | null = null
  visit(
    tree,
    (node: Node) => isElement(node) && node.name === 'sec',
    (node: Element) => {
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
      return node.name === 'sec' && containsAbstract(node)
    })

    if (!abstractNode) return

    const abstractBody = filter(
      abstractNode,
      (node) => !(isElement(node) && node.name === 'title')
    )

    if (abstractBody === null) return

    const abstract: Abstract = {
      type: 'element',
      name: 'abstract',
      attributes: {},
      children: abstractBody.children,
    }
    visit(
      tree,
      (node: Node) => isElement(node) && node.name === 'article-meta',
      (articleMetaDataNode: Element) => {
        articleMetaDataNode?.children?.push(abstract)
      }
    )
  }
}
