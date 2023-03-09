import { toString } from '@unified-latex/unified-latex-util-to-string'
import { Root, Node } from '@unified-latex/unified-latex-types/'

import { CompilerFunction, Plugin } from 'unified'

const unifiedLatexStringify = function unifiedLatexStringify() {
  const compiler: CompilerFunction<Node, string> = (tree) => {
    // Assume options.
    return toString(tree)
  }

  Object.assign(this, { Compiler: compiler })
} as Plugin<void[], Root, string>

export default unifiedLatexStringify
