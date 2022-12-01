import { TableCell } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const tableCell: BasicHandle = (
  node: TableCell,
  options: Options = {}
) => {
  if (node.span) {
    return `\\multicolumn{${node.span}}{@{} l @{}}{${toLatex(
      node.children,
      options
    )}}`
  }
  return toLatex(node.children)
}
