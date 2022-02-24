import { Script } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { BasicHandle, Options } from '../types'

export const script: BasicHandle = (node: Script, options: Options = {}) => {
  return node.type === 'super'
    ? `\\textsuperscript{${toLatex(node.children)}}`
    : `\\textsubscript{${toLatex(node.children)}}`
}
