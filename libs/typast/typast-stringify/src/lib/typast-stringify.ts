import type { Root } from 'typast'
import { toTypst } from 'typast-util-to-typst'
import type { Options } from 'typast-util-to-typst'
import type { Plugin } from 'unified'

export type { Options }

/**
 * unified compiler plugin: serializes a `typast` tree to Typst source.
 *
 * @example
 *   unified().use(reoffParse).use(reoffTypast).use(typastStringify).process(docx)
 */
const typastStringify: Plugin<[Options?], Root, string> = function typastStringify(options) {
  this.compiler = (tree) => toTypst(tree as Root, options || {})
}

export default typastStringify
