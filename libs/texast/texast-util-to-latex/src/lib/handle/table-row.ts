import { AlignmentTab, TableRow } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const tableRow: BasicHandle = (node: TableRow, options: Options = {}) => {
  return `${toLatex(node.children, options)}\n`
}
