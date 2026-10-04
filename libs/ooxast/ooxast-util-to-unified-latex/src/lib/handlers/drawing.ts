import { H, Handle } from '../types.js'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'
import { args, env, m } from '@unified-latex/unified-latex-builder'
import { PB } from '../util/PB.js'

/** EMU per TeX point (914400 EMU per inch, 72.27 pt per inch) */
const EMU_PER_PT = 914400 / 72.27

export const drawing: Handle = (h: H, node: Drawing) => {
  const blip = select('a\\:blip', node)
  const ref = blip?.attributes?.['r:embed']
  const path = ref ? h.relations[ref] : undefined

  const inline = !h.blockDrawing || h.inTable || h.simpleParagraph

  // No embedded raster image (a chart, a shape, an SVG-only picture, a linked image): there is
  // nothing \includegraphics could show, and `\includegraphics{}` does not compile. Leave a
  // visible placeholder for a figure, nothing for an inline picture.
  if (!path) {
    return inline
      ? undefined
      : env('figure', [m('fbox', 'Image not converted'), PB, m('caption', ''), PB])
  }

  if (inline) {
    // as tall as it is in the document; in running text at most one line high
    const cy = Number(select('wp\\:extent', node)?.attributes?.cy)
    const height =
      cy > 0 ? (h.inTable ? cy / EMU_PER_PT : Math.min(cy / EMU_PER_PT, 12)) : undefined
    return m(
      'includegraphics',
      args([height ? `height=${+height.toFixed(2)}pt` : 'height=1em', path], { braces: '[]{}' }),
    )
  }

  return env('figure', [
    m('includegraphics', args(['width=\\linewidth', path], { braces: '[]{}' })),
    PB,
    m('caption', ''),
    PB,
    m('label', `fig:${ref}`),
    PB,
  ])
}
