/**
 * Typst's parser as a Node.js addon (napi-rs), with the same API as `typast-syntax-wasm`.
 *
 * Loads, in order: a binary next to this package (`typast-syntax.<platform>.node`, from
 * `pnpm build:native`), the prebuilt binary package for the platform
 * (`typast-syntax-node-<platform>`), and finally `typast-syntax-wasm`, so it works on every
 * platform Node runs on (the WebAssembly module is only instantiated when it is used). Set `TYPAST_SYNTAX_BACKEND=wasm` to skip the native addon.
 */
import { createRequire } from 'node:module'
import * as wasm from 'typast-syntax-wasm'
import type { Binding, CstNode, ParseOptions, ParseResult } from 'typast-syntax-wasm'

export type {
  Binding,
  CstNode,
  ParseError,
  ParseMode,
  ParseOptions,
  ParseResult,
} from 'typast-syntax-wasm'

interface Native {
  parse(text: string, options?: ParseOptions): string
  parseCst(text: string, options?: ParseOptions): string
  typstVersion(): string
}

const require = createRequire(import.meta.url)

/** napi-rs platform name: `darwin-arm64`, `linux-x64-gnu`, `win32-x64-msvc`, … */
export function platform(): string {
  const { platform, arch } = process
  if (platform === 'linux') {
    const report = process.report?.getReport() as { header?: { glibcVersionRuntime?: string } }
    return `linux-${arch}-${report?.header?.glibcVersionRuntime ? 'gnu' : 'musl'}`
  }
  if (platform === 'win32') return `win32-${arch}-msvc`
  return `${platform}-${arch}`
}

function loadNative(): Native | undefined {
  if (process.env.TYPAST_SYNTAX_BACKEND === 'wasm') return undefined
  const name = platform()
  for (const candidate of [`../typast-syntax.${name}.node`, `typast-syntax-node-${name}`]) {
    try {
      return require(candidate) as Native
    } catch {
      // try the next one
    }
  }
  return undefined
}

function load(): { backend: 'native' | 'wasm'; binding: Binding } {
  const native = loadNative()
  if (native) {
    return {
      backend: 'native',
      binding: {
        parse: (text, options) => JSON.parse(native.parse(text, options)) as ParseResult,
        parseCst: (text, options) => JSON.parse(native.parseCst(text, options)) as CstNode,
        typstVersion: native.typstVersion(),
      },
    }
  }
  return { backend: 'wasm', binding: wasm }
}

const loaded = load()

/** Which implementation is in use. */
export const backend: 'native' | 'wasm' = loaded.backend

export const { parse, parseCst, typstVersion } = loaded.binding
