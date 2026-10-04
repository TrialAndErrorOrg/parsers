import type { Root as LatexRoot } from '@unified-latex/unified-latex-types'
import type { Root as typastRoot } from 'typast'
import type { Plugin, Processor as UnifiedProcessor } from 'unified'
import { totypast, type Options } from 'unified-latex-util-to-typast'

export type { Options }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Processor = UnifiedProcessor<any, any, any, any>

/**
 * Bridge-mode: runs the destination processor with the new typast tree.
 */
const bridge: Plugin<[Processor, Options?], LatexRoot> = function (destination, options) {
  return (node, file, next) => {
    destination.run(totypast(node, file, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode: further transformers run on the typast tree.
 */
const mutate: Plugin<[Options?], LatexRoot, typastRoot> = function (options) {
  return (node, file) => totypast(node, file, options)
}

/**
 * unified plugin that turns a unified-latex tree into a typast (Typst) tree.
 *
 * With a destination processor, runs it on the typast tree (bridge-mode).
 * Without one, returns the typast tree so further plugins (e.g. `typast-stringify`) run on it
 * (mutate-mode).
 *
 * @param destination Optional unified processor, or the options.
 * @param options Options passed to `unified-latex-util-to-typast`.
 */
const unifiedLatextypast = function (
  this: Processor,
  destination?: Processor | Options,
  options?: Options,
) {
  if (typeof destination === 'function') {
    return (bridge as unknown as (this: Processor, d: Processor, o?: Options) => unknown).call(this, destination, options)
  }
  return (mutate as unknown as (this: Processor, o?: Options) => unknown).call(this, destination ?? options)
} as unknown as Plugin<[(Processor | Options)?, Options?], LatexRoot, typastRoot>

export default unifiedLatextypast
