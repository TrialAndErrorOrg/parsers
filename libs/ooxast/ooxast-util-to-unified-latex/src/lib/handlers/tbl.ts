import { H } from '../types'
import { Tbl } from 'ooxast'
import { all } from '../all'

export function tbl(h: H, tbl: Tbl) {
  j.inTable = true
  const table = {
    type: 'element',
    name: 'tableWrap',
    attributes: {},
    children: [j(tbl, 'table', {}, [j(tbl, 'tbody', {}, all(j, tbl))])],
  }
  j.inTable = false
  return table
}
