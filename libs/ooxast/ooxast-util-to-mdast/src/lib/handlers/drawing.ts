import { Handle } from '../types.js'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'
import { State } from '../state.js'
import { image } from 'mdast-builder'

export const drawing: Handle = (state: State, node: Drawing) => {
  const blip = select('a\\:blip', node)

  if (!blip) {
    return null
  }

  const ref = blip?.attributes?.['r:embed']

  if (!ref) {
    return null // env('figure', [m('caption', ''), PB, m('label', ''), PB, m('includegraphics', '')])
  }

  return image(state.relations[ref])
  // return env('figure', [
  //   m('caption', ''),
  //   PB,
  //   m('label', `fig:${ref}`),
  //   PB,
  //   m('includegraphics', state.relations[ref]),
  // ])
}
