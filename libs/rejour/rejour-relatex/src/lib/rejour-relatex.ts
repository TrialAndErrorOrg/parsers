import { toTexast, Options } from 'jast-util-to-texast'
import { Root as JastRoot } from 'jast-types'
import { Root as TexastRoot } from 'texast'
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
    //@ts-expect-error there should be a better way to cast this
    destination.run(toTexast(node, options), file, (error) => {
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
): ReturnType<Plugin<[Options?] | void[], JastRoot, TexastRoot>> {
  //Transformer<JastRoot, JastRoot> | void {
  return (node) => {
    // TODO: [rejour-relatex] Cast JastRoot to TexastRoot better
    //@ts-expect-error there should be a better way to cast this
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
  Plugin<[Options?] | void[], JastRoot, TexastRoot>

export default rejourRelatex
