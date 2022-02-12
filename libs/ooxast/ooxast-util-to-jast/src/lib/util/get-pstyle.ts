import { P } from 'ooxast'
import { Element } from '../types'
import { select } from 'xast-util-select'

export function getPStyle(p: Element): string | null | undefined {
  const style = select('w:pStyle', p)
  return style?.attributes?.['w:val']
}
