// @ts-nocheck

import { toTexast, Options } from 'jast-util-to-texast'
import { Root as JastRoot } from 'jast-types'
import { Root as TexastRoot } from 'texast'
import { Plugin, Processor as UnifiedProcessor } from 'unified'
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode.
 * Runs the destination with the new mdast tree.
 *
 */
function bridge(this, destination, options) {
  return (node, file, next) => {
    destination.run(toTexast(node, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the mdast tree.
 */
const mutate: Plugin<[Options?] | [void], JastRoot, TexastRoot> = function (
  this,
  options = {}
) {
  return (node) => {
    const result = toTexast(node, options) as TexastRoot
    return result
  }
}

/**
 * Plugin to bridge or mutate to rehype.
 *
 * If a destination is given, runs the destination with the new mdast
 * tree (bridge-mode).
 * Without destination, returns the mdast tree: further plugins run on that
 * tree (mutate-mode).
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `jast-util-to-texast`.
 */
type OptionsOrVoid = [Options?] | [void]
const rehypeRemark: Plugin<[Processor, Options?], JastRoot, TexastRoot> &
  Plugin<OptionsOrVoid, JastRoot, TexastRoot> =
  // /**
  //  * @type {(import('unified').Plugin<[Processor, Options?], HastRoot> & import('unified').Plugin<[Options?]|void[], HastRoot, MdastRoot>)}
  //  */
  function (destination: Processor | Options, options: Options = {}) {
    let settings: Options | undefined
    let processor: Processor | undefined

    if (typeof destination === 'function') {
      processor = destination
      settings = options
    } else {
      settings = destination
    }

    if (settings.document === undefined || settings.document === null) {
      settings = Object.assign({}, settings, { document: true })
    }

    let that = this
    return processor
      ? bridge(that, processor, settings)
      : mutate(that, settings)
  }

export default rehypeRemark
