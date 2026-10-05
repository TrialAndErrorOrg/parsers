import { P } from 'ooxast'
import { select } from 'xast-util-select'

export function getPStyle(p: P): string | null | undefined {
  const style = select('w\\:pStyle', p)
  return style?.attributes?.['w:val']
}
