import type { Root } from 'tyast'
import { toTypst } from 'tyast-util-to-typst'
import type { Options } from 'tyast-util-to-typst'
import type { CompilerFunction, Plugin } from 'unified'

export type { Options }

/**
 * unified compiler plugin: serializes a `tyast` tree to Typst source.
 *
 * @example
 *   unified().use(reoffParse).use(reoffTyast).use(tyastStringify).process(docx)
 */
const tyastStringify: Plugin<[Options?], Root, string> = function tyastStringify(
  options?: Options,
) {
  const compiler: CompilerFunction<Root, string> = (tree) => toTypst(tree, options || {})

  Object.assign(this, { Compiler: compiler })
}

export default tyastStringify
