import type { Root } from 'typast'
import { toTypst } from 'typast-util-to-typst'
import type { Options } from 'typast-util-to-typst'
import type { CompilerFunction, Plugin } from 'unified'

export type { Options }

/**
 * unified compiler plugin: serializes a `typast` tree to Typst source.
 *
 * @example
 *   unified().use(reoffParse).use(reofftypast).use(typastStringify).process(docx)
 */
const typastStringify: Plugin<[Options?], Root, string> = function typastStringify(
  options?: Options,
) {
  const compiler: CompilerFunction<Root, string> = (tree) => toTypst(tree, options || {})

  Object.assign(this, { Compiler: compiler })
}

export default typastStringify
