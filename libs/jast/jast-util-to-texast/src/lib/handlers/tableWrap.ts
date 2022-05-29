// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, isElement, Parent, TableWrap, TagHavers } from 'jast-types'
import { all } from '../all'
import { J, Node, Root } from '../types'

const relativeOrderTable = (element: TableWrap['children'][number]) => {
  if (!isElement(element)) return 4
  switch (element.name) {
    case 'caption':
      return 1
    case 'label':
      return 2
    case 'table':
      return 2
    default:
      return 4
  }
}
export function tableWrap(j: J, node: TableWrap) {
  //  if (!article) {
  node.children.sort((a, b) => relativeOrderTable(a) - relativeOrderTable(b))

  return j(node, 'environment', { name: 'table' }, all(j, node))
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}
