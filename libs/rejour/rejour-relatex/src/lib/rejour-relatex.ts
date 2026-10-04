import { toTexast, type Options } from 'jast-util-to-texast'
import type { Root as JastRoot } from 'jast-types'
import type { Root as TexastRoot } from 'texast'
import type { Processor } from 'unified'
import type { VFile } from 'vfile'

/**
 * Transform for bridge-mode: runs the destination processor on the texast tree.
 */
export type TransformBridge = (tree: JastRoot, file: VFile) => Promise<undefined>

/**
 * Transform for mutate-mode: further transformers run on the texast tree.
 */
export type TransformMutate = (tree: JastRoot, file: VFile) => TexastRoot

/**
 * `toTexast` is typed as taking texast nodes, but what it is handed (and handles) is jast.
 */
function jastToTexast(tree: JastRoot, options: Options): TexastRoot {
  // TODO: [rejour-relatex] Cast JastRoot to TexastRoot better
  return toTexast(tree as unknown as TexastRoot, options) as TexastRoot
}

/**
 * Plugin to bridge or mutate to relatex
 *
 * If a destination is given, runs the destination with the new texast
 * tree (bridge-mode).
 * Without destination, returns the texast tree: further plugins run on that
 * tree (mutate-mode).
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `jast-util-to-texast`.
 */
// Mutate-mode comes last: `.use()` infers the plugin's input and output from the last overload.
function rejourRelatex(
  destination: Processor<any, any, any, any, any>,
  options?: Options | null | undefined,
): TransformBridge
function rejourRelatex(options?: Options | null | undefined): TransformMutate
function rejourRelatex(
  destination?: Processor<any, any, any, any, any> | Options | null | undefined,
  options?: Options | null | undefined,
): TransformBridge | TransformMutate {
  const processor = destination && 'run' in destination ? destination : undefined
  let settings: Options = (processor ? options : (destination as Options | null | undefined)) ?? {}

  if (settings.document === undefined || settings.document === null) {
    settings = { ...settings, document: true }
  }

  if (processor) {
    return async (tree, file) => {
      await processor.run(jastToTexast(tree, settings), file)
      return undefined
    }
  }

  return (tree) => jastToTexast(tree, settings)
}

export default rejourRelatex
