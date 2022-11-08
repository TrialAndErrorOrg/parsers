import { all } from '../all'
import { H, Node, Root, HastContent } from '../types'
// import { Article, Front, Body, Back } from 'hast-types'
import { Document } from 'ooxast'
import { select } from 'xast-util-select'

export function document(h: H, node: Document): HastContent[] {
  const footnotes = select('w\\:footnotes', node)
  const fngroup = footnotes ? [h(node, 'fnGroup', {}, all(h, footnotes))] : []

  return all(h, node)
  // return x('article', [
  //   x('front') as Front,
  //   // @ts-expect-error: hush.
  //   all(h, node),
  //   x('back', fngroup) as Back,
  // ]) as Article
}
