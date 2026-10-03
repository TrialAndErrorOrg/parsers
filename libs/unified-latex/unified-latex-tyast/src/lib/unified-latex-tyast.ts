import type { Root as LatexRoot } from '@unified-latex/unified-latex-types'
import type { Root as TyastRoot } from 'tyast'
import type { Plugin, Processor as UnifiedProcessor } from 'unified'
import { toTyast, type Options } from 'unified-latex-util-to-tyast'

export type { Options }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode: runs the destination processor with the new tyast tree.
 */
const bridge: Plugin<[Processor, Options?], LatexRoot> = function (destination, options) {
  return (node, file, next) => {
    destination.run(toTyast(node, file, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode: further transformers run on the tyast tree.
 */
const mutate: Plugin<[Options?], LatexRoot, TyastRoot> = function (options) {
  return (node, file) => toTyast(node, file, options)
}

/**
 * unified plugin that turns a unified-latex tree into a tyast (Typst) tree.
 *
 * With a destination processor, runs it on the tyast tree (bridge-mode).
 * Without one, returns the tyast tree so further plugins (e.g. `tyast-stringify`) run on it
 * (mutate-mode).
 *
 * @param destination Optional unified processor, or the options.
 * @param options Options passed to `unified-latex-util-to-tyast`.
 */
const unifiedLatexTyast = function (
  this: Processor,
  destination?: Processor | Options,
  options?: Options,
) {
  if (typeof destination === 'function') {
    return (bridge as unknown as (this: Processor, d: Processor, o?: Options) => unknown).call(this, destination, options)
  }
  return (mutate as unknown as (this: Processor, o?: Options) => unknown).call(this, destination ?? options)
} as unknown as Plugin<[(Processor | Options)?, Options?], LatexRoot, TyastRoot>

export default unifiedLatexTyast
