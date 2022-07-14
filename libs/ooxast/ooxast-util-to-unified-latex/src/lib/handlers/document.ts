import { all } from '../all'
import { J, Node, Root } from '../types'
import { x } from 'xastscript'
import { Article, Front, Body, Back } from 'unified-latex-types'
import { Document } from 'ooxast'
import { select } from 'xast-util-select'

export function document(j: J, node: Document): Article {
  const footnotes = select('w\\:footnotes', node)
  const fngroup = footnotes ? [j(node, 'fnGroup', {}, all(j, footnotes))] : []

  return x('article', [
    x('front') as Front,
    // @ts-expect-error: hush.
    all(j, node),
    x('back', fngroup) as Back,
  ]) as Article
}
