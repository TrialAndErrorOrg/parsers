import { Processor as UnifiedProcessor, Transformer, Plugin } from 'unified'
import { toUnifiedLatex, Options } from 'ooxast-util-to-unified-latex'
import { Root as OoxastRoot } from 'ooxast'
import { Root } from '@unified-latex/unified-latex-types'

type Processor = UnifiedProcessor<any, any, any, any>
/**
 * Bridge-mode.
 * Runs the destination with the new unified-latex tree.
 *
 */
const bridge: Plugin<[Processor, Options?], OoxastRoot> = function (destination, options) {
  return (node, file, next) => {
    destination.run(toUnifiedLatex(node, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the unified-latex tree.
 */
const mutate: Plugin<[Options | void | undefined], OoxastRoot, Root> = function (options = {}) {
  return (node, file) => {
    const result = toUnifiedLatex(node, file, options)
    return result
  }
}

/**
 * Plugin to bridge or mutate to unified-latex
 *
 * If a destination is given, runs the destination with the new jast
 * tree (bridge-mode).
 * Without destination, returns the jast tree: further plugins run on that
 * tree (mutate-mode).
 *
 * This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `ooxast-util-to-unified-latex`.
 */
const reoffUnifiedLatex: ThisType<Processor> = function (
  destination: Processor | Options,
  options?: Options,
) {
  let settings: Options | undefined
  let processor: Processor | undefined

  if (typeof destination === 'function') {
    processor = destination
    settings = options
  } else {
    settings = destination
  }

  if (settings?.document === undefined || settings.document === null) {
    settings = Object.assign({}, settings, { document: true })
  }

  return processor ? bridge.call(this, processor, settings) : mutate.call(this, settings)
}

export default reoffUnifiedLatex
