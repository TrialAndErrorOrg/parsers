import { toJast, Options } from 'ooxast-util-to-jast'
import { Root as JastRoot } from 'jjast'
import { Root as OoxastRoot } from 'ooxast'
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
): void | Transformer<OoxastRoot, OoxastRoot> {
  return (node, file, next) => {
    //@ts-ignore there should be a better way to cast this
    destination.run(toJast(node, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode.
 * Further transformers run on the texast tree.
 */
function mutate(
  options: void | Options | undefined = {}
): ReturnType<Plugin<[Options?] | void[], OoxastRoot, OoxastRoot>> {
  //Transformer<OoxastRoot, OoxastRoot> | void {
  //@ts-ignore there should be a better way to cast this
  //THIS IS FINE
  return (node) => {
    const result = toJast(node, options) as JastRoot
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
const reoffRejour = function (
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
} as Plugin<[Processor, Options?], OoxastRoot> &
  Plugin<[Options?] | void[], OoxastRoot, JastRoot>

export default reoffRejour
