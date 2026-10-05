import { J } from '../types.js'
import { Tbl } from 'ooxast'
import { all } from '../all.js'

export function tbl(j: J, tbl: Tbl) {
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
