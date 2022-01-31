import { Softbreak } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const softbreak: BasicHandle = (
  node: Softbreak,
  options: Options = {}
) => {
  return `\n`
}