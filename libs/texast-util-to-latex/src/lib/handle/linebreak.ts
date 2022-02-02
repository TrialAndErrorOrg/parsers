import { Linebreak } from 'relatex'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const linebreak: BasicHandle = (
  node: Linebreak,
  options: Options = {}
) => {
  const height = node.height ? `[${node.height}]` : ''
  return `\\\\${height}`
}
