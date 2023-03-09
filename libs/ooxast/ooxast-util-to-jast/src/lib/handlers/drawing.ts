import { J } from '../types.js'
import { x } from 'xastscript'
import { Fig } from 'jast-types'
import { Drawing } from 'ooxast'
import { select } from 'xast-util-select'

export function drawing(j: J, node: Drawing): Fig {
  const blip = select('a\\:blip', node)
  if (!blip) return x('fig') as Fig
  const ref = blip?.attributes?.['r:embed']
  if (!ref) return x('fig') as Fig

  return x('fig', [
    x('inline-figure'),
    x('caption'),
    x('label'),
    x('graphic', { 'xlink:href': j.relations[ref] }, []),
  ]) as Fig
}
