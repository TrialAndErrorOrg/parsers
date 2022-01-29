import { MathCharacter } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const mathCharacter: BasicHandle = (
  node: MathCharacter,
  options: Options = {}
) => {
  return node.value
}
