import { H, Handle } from '../types.js'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'
import { args, env, m } from '@unified-latex/unified-latex-builder'
import { PB } from '../util/PB.js'

export const drawing: Handle = (h: H, node: Drawing) => {
  const blip = select('a\\:blip', node)

  if (!blip) {
    return env('figure', PB, m('includegraphics', ''), [m('caption', ''), PB, m('label', '')])
  }
  const ref = blip?.attributes?.['r:embed']

  if (!ref) {
    return env('figure', [m('includegraphics', ''), PB, m('caption', ''), PB, m('label', '')])
  }

  return env('figure', [
    m('includegraphics', args(['width=\\linewidth', h.relations[ref]], { braces: '[]{}' })),
    PB,
    m('caption', ''),
    PB,
    m('label', `fig:${ref}`),
    PB,
  ])
}
