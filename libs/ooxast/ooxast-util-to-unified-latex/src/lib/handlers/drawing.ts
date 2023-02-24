import { H, Handle } from '../types'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'
import { env, m } from '@unified-latex/unified-latex-builder'
import { PB } from '../util/PB'

export const drawing: Handle = (h: H, node: Drawing) => {
  const blip = select('a\\:blip', node)

  if (!blip) {
    return env('figure', [
      m('caption', ''),
      PB,
      m('label', ''),
      PB,
      m('includegraphics', ''),
    ])
  }
  const ref = blip?.attributes?.['r:embed']

  if (!ref) {
    return env('figure', [
      m('caption', ''),
      PB,
      m('label', ''),
      PB,
      m('includegraphics', ''),
    ])
  }

  return env('figure', [
    m('caption', ''),
    PB,
    m('label', `fig:${ref}`),
    PB,
    m('includegraphics', h.relations[ref]),
  ])
}
