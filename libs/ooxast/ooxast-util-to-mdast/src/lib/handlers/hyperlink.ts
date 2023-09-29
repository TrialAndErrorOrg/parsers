import { State } from '../state.js'
import { Handle } from '../types.js'
import { Hyperlink } from 'ooxast'
import { toString } from 'xast-util-to-string'
import { Link, Text } from 'mdast'

export const hyperlink: Handle = (state: State, node: Hyperlink) => {
  const relId = node.attributes['r:id']
  const rel = state.relations[relId]

  const contents = state.all(node)

  if (!rel) {
    const result = { type: 'text', value: toString(node) } as Text
    state.patch(node, result)
    return result
  }

  // if (rel.startsWith('http')) {
  //   //
  // }

  const result = {
    type: 'link',
    url: rel,
    title: null,
    children: contents,
  } as Link
  state.patch(node, result)
  return result
}
