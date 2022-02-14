import { J } from '../types'
import { Tbl } from 'ooxast'
import { all } from '../all'

export function tbl(j: J, tbl: Tbl) {
  return {
    type: 'element',
    name: 'tableWrap',
    attributes: {},
    children: [j(tbl, 'element', { name: 'table' }, all(j, tbl))],
  }
}
