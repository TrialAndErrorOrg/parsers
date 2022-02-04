import { Paragraph } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { Options } from '../types'

export const paragraph = (node: Paragraph, options: Options = {}) => {
  const parbreak = options.parbreak === 'par' ? '\\parbreak' : '\n\n'
  return `${toLatex(node.children)}${parbreak}`
}
