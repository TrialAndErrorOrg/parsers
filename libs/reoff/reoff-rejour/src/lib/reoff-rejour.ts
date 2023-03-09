import { toJast, Options } from 'ooxast-util-to-jast'
import { Root as JastRoot } from 'jast-types'
import { Root as OoxastRoot } from 'ooxast'
import { Plugin, Processor as UnifiedProcessor, Transformer } from 'unified'
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode.
 * Runs the destination with the new jast tree.
 *
 */
function bridge(
  destination: Processor,
  options?: Options,
): void | Transformer<OoxastRoot, OoxastRoot> {
  return (node, file, next) => {
    destination.run(
      toJast(node, file, {
        ...options,
        relations: (file.data.relations || {}) as { [key: string]: string },
      }),
      file,
      (error) => {
        next(error)
      },
    )
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the jast tree.
 */
function mutate(
  options: void | Options | undefined = {},
): ReturnType<Plugin<[Options?] | void[], OoxastRoot, JastRoot>> {
  return (node, file) => {
    const result = toJast(node, {
      ...options,
      relations: (file.data.relations || {}) as { [key: string]: string },
    })
    return result
  }
}

/**
 * Plugin to bridge or mutate to jast.
 *
 * If a destination is given, runs the destination with the new mdast
 * tree (bridge-mode).
 * Without destination, returns the mdast tree: further plugins run on that
 * tree (mutate-mode).
 *
 * This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `jast-util-to-texast`.
 */
const reoffRejour = function (destination?: Processor | Options, options?: Options) {
  const relations = this.data('relations')

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
  if (relations) {
    settings = Object.assign({}, settings, { relations })
  }

  return processor ? bridge(processor, settings) : mutate(settings)
} as Plugin<[Processor, Options?], OoxastRoot> & Plugin<[Options?] | void[], OoxastRoot, JastRoot>

export default reoffRejour
