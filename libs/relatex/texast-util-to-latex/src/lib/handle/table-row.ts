import { AlignmentTab, TableRow } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const tableRow: BasicHandle = (
  node: TableRow,
  options: Options = {}
) => {
  return `${toLatex(node.children, options)}\n`
}
