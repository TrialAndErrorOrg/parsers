import { J } from '../types'
import { Row } from 'ooxast'
import { Td } from 'jjast'
import { all } from '../all'

export function tr(j: J, tr: Row) {
  const rowcontents = all(j, tr)
  const celldRowContents: Td[] = []
  for (const cell of rowcontents) {
    celldRowContents.push({
      type: 'element',
      name: 'td',
      attributes: {},
      // its fine
      children: [cell as any],
    })
  }
  return j(tr, 'element', { name: 'tr' }, celldRowContents)
}
