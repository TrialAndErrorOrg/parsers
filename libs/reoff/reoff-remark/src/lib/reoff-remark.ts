import type { Root as MdastRoot } from 'mdast'
import type { Root as OoxastRoot } from 'ooxast'
import { toMdast, type Options } from 'ooxast-util-to-mdast'
import type { Processor } from 'unified'
import type { VFile } from 'vfile'

/** Bridge-mode transformer: runs `destination` on the new mdast tree, then returns nothing. */
type TransformBridge = (tree: OoxastRoot, file: VFile) => Promise<undefined>

/** Mutate-mode transformer: further plugins run on the returned mdast tree. */
type TransformMutate = (tree: OoxastRoot, file: VFile) => MdastRoot

/**
 * Plugin to bridge or mutate to remark
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
 *   Options passed to `ooxast-util-to-mdast`.
 */
export default function reoffRemark(
  destination?: Processor | Options | null | undefined,
  options?: Options | null | undefined,
): TransformBridge | TransformMutate {
  const processor = typeof destination === 'function' ? destination : undefined
  let settings = (processor ? options : (destination as Options | null | undefined)) ?? undefined

  if (settings?.document === undefined || settings.document === null) {
    settings = Object.assign({}, settings, { document: true })
  }

  if (processor) {
    return async (tree, file) => {
      // Bridge-mode has always converted without `file`, so footnotes and relations stay out.
      await processor.run(toMdast(tree, settings), file)
      return undefined
    }
  }

  return (tree, file) => toMdast(tree, file, settings)
}
