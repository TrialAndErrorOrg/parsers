import { H, HastContent } from '../types'
import { Row } from 'ooxast'
// import { Td } from 'hast-types'
import { all } from '../all'

export function tr(h: H, tr: Row) {
  const rowcontents = all(h, tr)
  const celldRowContents: HastContent[] = []
  for (const cell of rowcontents) {
    celldRowContents.push({
      type: 'element',
      tagName: 'td',
      properties: {},
      // @ts-expect-error
      children: cell?.children || [cell],
    })
  }
  return h(tr, 'tr', celldRowContents)
}
