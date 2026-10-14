import type { Position, Root } from 'typast'

/** Which syntax the source starts in: a `.typ` file is markup. */
export type ParseMode = 'markup' | 'math' | 'code'

export interface ParseOptions {
  /** @default 'markup' */
  mode?: ParseMode
  /** Add unist `position`s to every node. @default true */
  positions?: boolean
}

/** A syntax error, as reported by Typst's parser. */
export interface ParseError {
  message: string
  hints?: string[]
  position: Position
}

export interface ParseResult {
  tree: Root
  errors: ParseError[]
}

/** A node of Typst's concrete syntax tree: every token, including whitespace and punctuation. */
export interface CstNode {
  /** `typst_syntax::SyntaxKind` name: `Markup`, `Heading`, `Text`, `Space`, … */
  kind: string
  /** leaves only */
  text?: string
  /** inner nodes only */
  children?: CstNode[]
  position?: Position
}

/** What both bindings (WebAssembly, napi-rs) expose. */
export interface Binding {
  /** Parse Typst source into a typast tree and the parser's errors. */
  parse(text: string, options?: ParseOptions): ParseResult
  /** Parse Typst source into Typst's lossless concrete syntax tree. */
  parseCst(text: string, options?: ParseOptions): CstNode
  /** The `typst-syntax` version the parser follows, e.g. `0.15.1`. */
  typstVersion: string
}

/** The `typst-syntax` version the Rust crates are built against (checked by the tests). */
export const typstVersion = '0.15.1'

type Raw = (text: string, mode: string, positions: boolean) => string

/**
 * Wrap the raw wasm-bindgen exports (which return JSON strings). `ready` runs before every call,
 * to instantiate the module on first use.
 */
export function wrap(raw: { parse: Raw; parseCst: Raw }, ready: () => void = () => {}): Binding {
  return {
    parse(text, options = {}) {
      ready()
      return JSON.parse(raw.parse(text, options.mode ?? 'markup', options.positions ?? true))
    },
    parseCst(text, options = {}) {
      ready()
      return JSON.parse(raw.parseCst(text, options.mode ?? 'markup', options.positions ?? true))
    },
    typstVersion,
  }
}
