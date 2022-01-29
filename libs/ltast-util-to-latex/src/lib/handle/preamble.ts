import { Preamble } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Handle, Options } from '../types'

export const preamble: BasicHandle = (
  node: Preamble,
  options: Options = {}
) => {
  // TODO: Add checks to preamble to not print non-command content
  return toLatex(node.children)
}
