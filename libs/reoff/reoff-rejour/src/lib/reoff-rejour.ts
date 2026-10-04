import { toJast, Options } from 'ooxast-util-to-jast'
import { Root as JastRoot } from 'jast-types'
import { Root as OoxastRoot } from 'ooxast'
import { Plugin, Processor as UnifiedProcessor, Transformer } from 'unified'
type VFile = Parameters<Transformer<OoxastRoot, OoxastRoot>>[1]
type Processor = UnifiedProcessor<any, any, any, any, any>

declare module 'unified' {
  interface Data {
    /**
     * Relations (`rId` to target) for reoff-rejour to use instead of the ones reoff-parse
     * stored on the file.
     */
    relations?: { [key: string]: string } | undefined
  }
}

/**
 * The document's relations, which reoff-parse stores per part (`document`, `footnotes`,
 * `endnotes`) on the VFile.
 */
function documentRelations(file: VFile): { [key: string]: string } {
  // `relations` is declared on vfile's DataMap by docx-to-vfile, which this package doesn't depend on.
  const relations = file.data.relations as { document?: { [key: string]: string } } | undefined
  return relations?.document ?? {}
}

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
        relations: options?.relations ?? documentRelations(file),
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
    // Pass the file along: footnotes, styles and relations are read from its data.
    const result = toJast(node, file, {
      ...options,
      relations: options?.relations ?? documentRelations(file),
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
 *   Options passed to `ooxast-util-to-jast`.
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
