import { H } from '../types'
import { Tbl } from 'ooxast'
import { all } from '../all'

export function tbl(h: H, tbl: Tbl) {
  h.inTable = true
  const table = {
    type: 'element',
    name: 'tableWrap',
    attributes: {},
    children: [h(tbl, 'table', {}, [h(tbl, 'tbody', {}, all(h, tbl))])],
  }
  h.inTable = false
  return table
}
