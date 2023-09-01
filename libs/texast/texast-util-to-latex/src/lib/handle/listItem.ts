import { ListItem } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const listItem: BasicHandle = (node: ListItem, options: Options = {}) => {
  return `\\item ${toLatex(node.children)}
  `
}
