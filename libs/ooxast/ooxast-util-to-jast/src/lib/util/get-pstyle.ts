import { P } from 'ooxast'
import { Element } from '../types'
import { select } from 'xast-util-select'

export function getPStyle(p: P): string | null | undefined {
  const style = select('w:pStyle', p)
  console.log('p', p)
  return style?.attributes?.['w:val']
}
