import { Script } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const scipt: BasicHandle = (node: Script, options: Options = {}) => {
  return node.type === 'super'
    ? `^{${toLatex(node.children)}}`
    : `_{${toLatex(node.children)}}`
}
