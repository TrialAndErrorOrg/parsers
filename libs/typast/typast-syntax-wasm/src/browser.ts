/**
 * Browser entry: fetches and instantiates the WebAssembly module with top-level `await`, so
 * `parse` is synchronous once the module is imported. Bundlers (webpack 5, Vite, …) emit the
 * `.wasm` file as an asset through the `new URL(…, import.meta.url)` pattern.
 */
import init, * as raw from '../pkg/typast_syntax_wasm.js'
import { wrap } from './api.js'

await init({ module_or_path: new URL('../pkg/typast_syntax_wasm_bg.wasm', import.meta.url) })

export const { parse, parseCst, typstVersion } = wrap(raw)
export type { Binding, CstNode, ParseError, ParseMode, ParseOptions, ParseResult } from './api.js'
