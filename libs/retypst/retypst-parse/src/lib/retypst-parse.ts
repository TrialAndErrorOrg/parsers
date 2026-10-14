import type { Root } from 'typast'
import { fromTypst, type Options as FromTypstOptions } from 'typast-util-from-string'
import type { Plugin } from 'unified'

export type Options = Omit<FromTypstOptions, 'onerror'>

/**
 * unified parser plugin: parses Typst source into a `typast` tree, with Typst's own parser
 * (`typst-syntax`, natively in Node.js, as WebAssembly in the browser). Syntax errors become
 * messages on the file; what could not be parsed is kept as `error` nodes.
 *
 * @example
 *   unified().use(retypstParse).use(retypstStringify).process('= Hello')
 */
const retypstParse: Plugin<[Options?], string, Root> = function retypstParse(options) {
  this.parser = (document, file) =>
    fromTypst(document, {
      ...options,
      onerror(error) {
        const message = file.message(error.message, {
          place: error.position,
          ruleId: 'syntax',
          source: 'retypst-parse',
        })
        if (error.hints?.length) message.note = error.hints.join('\n')
      },
    })
}

export default retypstParse
