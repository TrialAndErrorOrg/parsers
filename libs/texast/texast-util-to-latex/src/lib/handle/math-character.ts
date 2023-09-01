import { MathCharacter } from 'texast'
import { toLatex } from '../texast-util-to-latex.js'
import { BasicHandle, Options } from '../types.js'

export const mathCharacter: BasicHandle = (node: MathCharacter, options: Options = {}) => {
  return node.value
}
