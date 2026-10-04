import { Handle } from '../types.js'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'
import { State } from '../state.js'
import { Image } from 'mdast'

export const drawing: Handle = (state: State, node: Drawing) => {
  const blip = select('a\\:blip', node)

  if (!blip) {
    return
  }

  const ref = blip?.attributes?.['r:embed']

  if (!ref) {
    return
  }

  const result: Image = { type: 'image', url: state.relations[ref] }
  return result
  // return env('figure', [
  //   m('caption', ''),
  //   PB,
  //   m('label', `fig:${ref}`),
  //   PB,
  //   m('includegraphics', state.relations[ref]),
  // ])
}
