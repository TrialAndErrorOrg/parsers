import { Root, LtastContent } from 'relatex'
import { toLatex, Options as ToLatexOptions } from 'ltast-util-to-latex'
import { CompilerFunction, Plugin } from 'unified'

type Options = Omit<ToLatexOptions, 'extensions'>
type Node = Root | LtastContent
type stringify = Plugin<Options[], void[] | Node | string>
export function relatexStringify(options: Options) {
  const compiler: CompilerFunction<Node, string> = (tree) => {
    // Assume options.
    const settings: Options = this.data('settings')

    return toLatex(
      tree,
      Object.assign({}, settings, options, {
        // Note: this option is not in the readme.
        // The goal is for it to be set by plugins on `data` instead of being
        // passed by users.
        extensions:
          /** @type {ToLatexOptions['extensions']} */ this.data(
            'toLatexExtensions'
          ) || [],
      })
    )
  }

  Object.assign(this, { Compiler: compiler })
}
