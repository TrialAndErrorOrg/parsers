import type { Root } from 'typast'
import { toTypst } from 'typast-util-to-typst'
import type { Options } from 'typast-util-to-typst'
import type { Plugin } from 'unified'

export type { Options }

/**
 * unified compiler plugin: serializes a `typast` tree to Typst source.
 *
 * @example
 *   unified().use(reoffParse).use(reoffTypast).use(retypstStringify).process(docx)
 */
const retypstStringify: Plugin<[Options?], Root, string> = function retypstStringify(options) {
  this.compiler = (tree) => toTypst(tree as Root, options || {})
}

export default retypstStringify
