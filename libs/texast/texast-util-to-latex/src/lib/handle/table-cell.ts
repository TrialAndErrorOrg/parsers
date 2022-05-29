import { TableCell } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const tableCell: BasicHandle = (
  node: TableCell,
  options: Options = {}
) => {
  return toLatex(node.children)
}
