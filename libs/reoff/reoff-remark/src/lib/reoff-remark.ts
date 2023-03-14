import { Processor as UnifiedProcessor, Transformer, Plugin } from 'unified'
import { toMdast, Options } from 'ooxast-util-to-mdast'
import { Root as OoxastRoot } from 'ooxast'
import { Root } from 'mdast'

type Processor = UnifiedProcessor<any, any, any, any>
/**
 * Bridge-mode.
 * Runs the destination with the new mdast tree.
 *
 */
function bridge(
  destination: Processor,
  options?: Options,
): void | Transformer<OoxastRoot, OoxastRoot> {
  return (node, file, next) => {
    destination.run(toMdast(node, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the mdast tree.
 */
function mutate(
  options: void | Options | undefined = {},
): ReturnType<Plugin<[Options?] | void[], OoxastRoot, Root>> {
  //Transformer<JastRoot, JastRoot> | void {
  return (node, file) => {
    const result = toMdast(node, file, options)
    return result
  }
}

/**
 * Plugin to bridge or mutate to remark
 *
 * If a destination is given, runs the destination with the new mdast
 * tree (bridge-mode).
 * Without destination, returns the jast tree: further plugins run on that
 * tree (mutate-mode).
 *
 * This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `ooxast-util-to-remark`.
 */
const reoffMdast = function (destination?: Processor | Options, options?: Options) {
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
} as Plugin<[Processor, Options?], OoxastRoot> & Plugin<[Options?] | void[], OoxastRoot, Root>

export default reoffMdast
