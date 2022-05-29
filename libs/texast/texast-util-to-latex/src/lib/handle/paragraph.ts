import { Command, Paragraph } from 'texast'
import { toLatex } from '../texast-util-to-latex'
import { Options } from '../types'

export const paragraph = (node: Paragraph, options: Options = {}) => {
  const parbreak = options.parbreak === 'par' ? '\\parbreak' : '\n\n'
  const paragraph = `${toLatex(node.children)}${parbreak}`
  //return paragraph

  return shittyCombineCites(paragraph)
}

const shittyCombineCites = (par: string) =>
  par.replace(/(\}\\(\w+cite)\{)+/g, ', ')
