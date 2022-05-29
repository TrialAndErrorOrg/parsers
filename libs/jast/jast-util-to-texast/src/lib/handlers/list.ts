import { List } from 'jast-types'
import { all } from 'jast-util-to-texast'
import { J } from '../types'

export function list(j: J, list: List) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const name =
    list?.attributes?.['listType'] === 'order' ? 'enumerate' : 'itemize'

  // we're assuming that the list does not have any more arguments
  // someone else can figure that one out if you want some kind of fancy list or smth

  return { type: 'environment', name, children: all(j, list) }
}
