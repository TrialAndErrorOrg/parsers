// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jast-types'
import { all } from '../all.js'
import { J, Node, Root } from '../types.js'

export function root(j: J, node: Root) {
  const kids = node.children as TagHavers[]
  const article = kids.find((child) => child?.name === 'article')

  //  if (!article) {
  return j(node, 'root', all(j, node))
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}
