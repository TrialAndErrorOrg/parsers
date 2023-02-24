import { P } from 'ooxast'
import { select } from 'xast-util-select'

export function getListInfo(p: P) {
  const numPr = select('w\\:numPr', p)

  if (numPr) {
    const ilvl = select('w\\:ilvl', numPr)
    const numId = select('w\\:numId', numPr)
    return {
      ilvl: ilvl?.attributes?.['w:val']
        ? parseInt(ilvl.attributes['w:val'])
        : undefined,
      numId: numId?.attributes?.['w:val']
        ? parseInt(numId.attributes['w:val'])
        : undefined,
    }
  }

  return null
}
