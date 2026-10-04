import type { Root } from 'texast'
import toLatex, { type Options as ToLatexOptions } from 'texast-util-to-latex'
import type { Compiler, Plugin } from 'unified'

export type Options = Omit<ToLatexOptions, 'extensions'>

/**
 * The scalar `toLatex` options, which can also be set as processor settings. `handlers`, `join`
 * and `unsafe` are left out: `remark-stringify` registers settings with those names and other
 * types, and the declarations would clash in a program that loads both.
 */
type LatexSettings = Pick<
  ToLatexOptions,
  'wrapDocument' | 'parbreak' | 'emph' | 'inlineMathDelimiters' | 'displayMathDelimiters'
>

declare module 'unified' {
  interface Settings extends LatexSettings {}

  interface Data {
    /**
     * `toLatex` extensions, meant to be set by plugins rather than users (`relatex-stringify`).
     */
    toLatexExtensions?: ToLatexOptions['extensions']
  }
}

const relatexStringify: Plugin<[(Options | undefined)?], Root, string> = function (options) {
  const compiler: Compiler<Root, string> = (tree) => {
    return toLatex(tree, {
      ...this.data('settings'),
      ...options,
      // Note: this option is not in the readme.
      // The goal is for it to be set by plugins on `data` instead of being
      // passed by users.
      extensions: this.data('toLatexExtensions') || [],
    })
  }

  // `this` is an untyped processor, whose `compiler` takes any node.
  this.compiler = compiler as Compiler
}

export default relatexStringify
