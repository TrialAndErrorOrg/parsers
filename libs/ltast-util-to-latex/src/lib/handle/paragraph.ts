import { Paragraph } from 'relatex'
import { toLatex } from '../ltast-util-to-latex'
import { Options } from '../types'

export const paragraph = (node: Paragraph, options: Options = {}) => {
  const parbreak = options.parbreak === 'par' ? '\\parbreak' : '\\n\\n'
  return `${toLatex(node.children)}${parbreak}`
}
