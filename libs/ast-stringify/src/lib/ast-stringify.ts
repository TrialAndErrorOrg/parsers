import { CompilerFunction } from 'unified'
import { Root } from 'jast-types'

export default function astStringify() {
  const compiler: CompilerFunction<Root, string> = (tree) => {
    // Assume options.
    // const settings = /** @type {Options} */ (this.data('settings'))

    return JSON.stringify(tree, null, 2)
  }

  Object.assign(this, { Compiler: compiler })
}
