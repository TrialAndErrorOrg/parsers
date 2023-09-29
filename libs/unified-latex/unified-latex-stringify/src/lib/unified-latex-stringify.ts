import { toString } from '@unified-latex/unified-latex-util-to-string'
import { Root } from '@unified-latex/unified-latex-types/'

import { Compiler, Plugin } from 'unified'

const unifiedLatexStringify: Plugin<void[], Root, string> = function unifiedLatexStringify() {
  const compiler: Compiler<Root, string> = (tree) => {
    // Assume options.
    return toString(tree)
  }

  Object.assign(this, { Compiler: compiler })
}

export default unifiedLatexStringify
