import { all } from '../all.js'
import { J } from '../types.js'
import { x } from 'xastscript'
import { Article, Front, Back } from 'jast-types'
import { Document } from 'ooxast'

export function document(j: J, node: Document): Article {
  const fngroup = j.footnotes ? [j(node, 'fnGroup', {}, all(j, j.footnotes))] : []

  return x('article', [
    x('front') as Front,
    // @ts-expect-error: hush.
    all(j, node),
    x('back', fngroup) as Back,
  ]) as Article
}
