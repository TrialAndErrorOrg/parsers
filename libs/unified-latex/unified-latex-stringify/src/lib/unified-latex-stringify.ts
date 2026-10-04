import { toString } from '@unified-latex/unified-latex-util-to-string'
import type { Root } from '@unified-latex/unified-latex-types'

import type { Plugin } from 'unified'

const unifiedLatexStringify: Plugin<[], Root, string> = function unifiedLatexStringify() {
  this.compiler = (tree) => toString(tree as Root)
}

export default unifiedLatexStringify
