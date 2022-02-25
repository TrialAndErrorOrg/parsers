import { ListItem } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const listItem: BasicHandle = (
  node: ListItem,
  options: Options = {}
) => {
  return `\\item ${toLatex(node.children)}
  `
}
