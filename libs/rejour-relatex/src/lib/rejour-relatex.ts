import { toLtast, Options } from 'jast-util-to-ltast'
import { Root as JastRoot } from 'rejour'
import { Root as LtastRoot } from 'relatex'
import {
  Plugin,
  Processor as UnifiedProcessor,
  TransformCallback,
  Transformer,
} from 'unified'
import { VFile } from 'vfile'
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode.
 * Runs the destination with the new mdast tree.
 *
 */
function bridge(
  destination: Processor,
  options?: Options
): void | Transformer<JastRoot, JastRoot> {
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
function mutate(
  options: void | Options | undefined = {}
): Transformer<JastRoot, JastRoot> | void {
  return (node) => {
    const result = toLtast(node, options)
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
const rejourRelatex = function (
  destination?: Processor | Options,
  options?: Options
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

  return processor ? bridge(processor, settings) : mutate(settings)
} as Plugin<[Processor, Options?], JastRoot> &
  Plugin<[Options?] | void[], JastRoot, LtastRoot>

export default rejourRelatex
