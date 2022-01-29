import { Root } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const root: BasicHandle = (node: Root, options: Options = {}) => {
  return toLatex(node.children)
}
