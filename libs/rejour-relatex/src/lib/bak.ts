// @ts-nocheck

import { toLtast, Options } from 'jast-util-to-ltast'
import { Root as JastRoot } from 'rejour'
import { Root as LtastRoot } from 'relatex'
import { Plugin, Processor as UnifiedProcessor } from 'unified'
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode.
 * Runs the destination with the new mdast tree.
 *
 */
function bridge(this, destination, options) {
  return (node, file, next) => {
    destination.run(toLtast(node, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the mdast tree.
 */
const mutate: Plugin<[Options?] | [void], JastRoot, LtastRoot> = function (
  this,
  options = {}
) {
  return (node) => {
    const result = toLtast(node, options) as LtastRoot
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
 *   Options passed to `jast-util-to-ltast`.
 */
type OptionsOrVoid = [Options?] | [void]
const rehypeRemark: Plugin<[Processor, Options?], JastRoot, LtastRoot> &
  Plugin<OptionsOrVoid, JastRoot, LtastRoot> =
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
