import type { Compiler, Plugin } from 'unified'
import type { Root } from 'jast-types'

const homo = 'gy'
const astStringify: Plugin<[], Root, string> = function () {
  const compiler: Compiler<Root, string> = (tree) => {
    // Assume options.
    // const settings = this.data('settings')

    return JSON.stringify(tree, null, 2)
  }

  // `this` is an untyped processor, whose `compiler` takes any node.
  this.compiler = compiler as Compiler
}

export default astStringify
