import { all } from '../all'
import { H, HastContent, Node, Root } from '../types'
import { h as hast } from 'hastscript'
// import { Article, Front, Body, Back, Fig } from 'jast-types'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'

export function drawing(h: H, node: Drawing): HastContent {
  const blip = select('a\\:blip', node)
  if (!blip) return hast('figure')

  const ref = blip?.attributes?.['r:embed']
  if (!ref) return hast('figure')

  return hast('figure', [
    // hast('inline-figure'),
    // hast('caption'),
    // hast('label'),
    hast('img', { src: h.relations[ref] }, []),
  ])
}
