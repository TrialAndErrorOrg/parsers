import type { Plugin, Processor as UnifiedProcessor, Transformer } from 'unified'
import type { Root as OoxastRoot } from 'ooxast'
import type { Root as TyastRoot } from 'tyast'
import { toTyast, type Options } from 'ooxast-util-to-tyast'
import type { Root as XastRoot } from 'xast'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Processor = UnifiedProcessor<any, any, any, any>

export type { Options }

/**
 * Bridge-mode: run the destination processor with the new tyast tree.
 */
function bridge(destination: Processor, options?: Options): Transformer<OoxastRoot> {
  return (node, file, next) => {
    destination.run(toTyast(node as unknown as XastRoot, file, options), file, (error) => {
      next(error)
    })
  }
}

/**
 * Mutate-mode: further plugins run on the tyast tree.
 */
function mutate(options?: Options): Transformer<OoxastRoot, TyastRoot> {
  return (node, file) => toTyast(node as unknown as XastRoot, file, options)
}

/**
 * `reoff` plugin to go from Word (`ooxast`) to Typst (`tyast`).
 *
 * Use it after `reoff-parse` (and optionally `reoff-clean`, `reoff-markup-to-style`) and
 * before `tyast-stringify`:
 *
 * ```ts
 * unified().use(reoffParse).use(reoffTyast, options).use(tyastStringify).process(vfile)
 * ```
 *
 * Given a processor as first argument it runs that processor on the tyast tree instead
 * (bridge mode), like `remark-rehype`.
 */
const reoffTyast = function (
  this: Processor,
  destination?: Processor | Options,
  options?: Options,
) {
  if (destination && typeof destination === 'function') {
    return bridge(destination as Processor, options)
  }
  return mutate((destination as Options | undefined) ?? options)
} as Plugin<[(Processor | Options)?, Options?], OoxastRoot, TyastRoot>

export default reoffTyast
