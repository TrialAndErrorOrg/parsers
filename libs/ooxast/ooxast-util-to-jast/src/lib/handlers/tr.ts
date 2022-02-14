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
      // @ts-ignore
      children: cell?.children || [cell],
    })
  }
  return j(tr, 'tr', celldRowContents)
}
