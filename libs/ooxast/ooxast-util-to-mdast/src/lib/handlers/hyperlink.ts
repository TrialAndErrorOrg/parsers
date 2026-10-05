import { State } from '../state.js'
import { Handle } from '../types.js'
import { Hyperlink } from 'ooxast'
import { toString } from 'xast-util-to-string'
import type { Link, PhrasingContent, Text } from 'mdast'

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

  const result: Link = {
    type: 'link',
    url: rel,
    title: '',
    children: contents as PhrasingContent[],
  }
  state.patch(node, result)
  return result
}
