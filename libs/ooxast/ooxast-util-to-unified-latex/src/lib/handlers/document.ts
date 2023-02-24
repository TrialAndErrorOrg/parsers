import { all } from '../all'
import { H } from '../types'
import { Document } from 'ooxast'
import { select } from 'xast-util-select'

export function document(h: H, node: Document) {
  const footnotes = select('w\\:footnotes', node)
  const fngroup = footnotes ? [h(node, 'fnGroup', {}, all(h, footnotes))] : []

  return all(h, node)
}
