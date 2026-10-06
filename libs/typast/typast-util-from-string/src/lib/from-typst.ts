import type { Root } from 'typast'
import type { ParseError, ParseMode } from 'typast-syntax-wasm'
// `typast-syntax-node` in Node.js (native, falling back to WebAssembly), `typast-syntax-wasm`
// elsewhere: see `imports` in package.json.
import { parse } from '#parser'

export interface Options {
  /**
   * Which syntax the source starts in: a `.typ` file is markup.
   * @default 'markup'
   */
  mode?: ParseMode
  /**
   * Add unist `position`s (line, column, UTF-16 offset) to every node.
   * @default true
   */
  positions?: boolean
  /**
   * Called for each syntax error. The tree is built regardless: what the parser could not make
   * sense of becomes `error` nodes holding the source text.
   */
  onerror?: (error: ParseError) => void
}

/**
 * Parse Typst source into a `typast` tree, with Typst's own parser (`typst-syntax`).
 *
 * @param value Typst source, or anything with a `toString()` (such as a VFile).
 */
export function fromTypst(value: string | { toString(): string }, options: Options = {}): Root {
  const { tree, errors } = parse(String(value), {
    mode: options.mode,
    positions: options.positions,
  })
  if (options.onerror) for (const error of errors) options.onerror(error)
  return tree
}
