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

  const image = {
    type: 'image',
    url: state.relations[ref],
  } as Image

  state.patch(node, image)

  return image
}
