import { J } from '../types.js'
import { Row } from 'ooxast'
import { Td } from 'jast-types'
import { all } from '../all.js'

export function tr(j: J, tr: Row) {
  const rowContents = all(j, tr)
  // const celldRowContents: Td[] = []
  // for (const cell of rowcontents) {
  //   celldRowContents.push({
  //     type: 'element',
  //     name: 'td',
  //     attributes: {},
  //     // @ts-expect-error
  //     children: cell?.children || [cell],
  //   })
  // }
  return j(tr, 'tr', rowContents)
}
