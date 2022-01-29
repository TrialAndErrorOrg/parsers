import { ListItem } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const listItem: BasicHandle = (
  node: ListItem,
  options: Options = {}
) => {
  return `\\item ${toLatex(node.children)}
  `
}
