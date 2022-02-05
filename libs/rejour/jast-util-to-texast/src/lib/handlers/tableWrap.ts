// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jast'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function tableWrap(j: J, node: Root) {
  //  if (!article) {
  return j(node, 'environment', { name: 'table' }, all(j, node))
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { tagName: 'article' }, all(j, article)),
  // ])
}
