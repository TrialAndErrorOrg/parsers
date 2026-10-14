/**
 * Node.js entry: instantiates the WebAssembly module synchronously, from disk, on first use.
 */
import { readFileSync } from 'node:fs'
import * as raw from '../pkg/typast_syntax_wasm.js'
import { wrap } from './api.js'

let instantiated = false

function ready() {
  if (instantiated) return
  raw.initSync({
    module: readFileSync(new URL('../pkg/typast_syntax_wasm_bg.wasm', import.meta.url)),
  })
  instantiated = true
}

export const { parse, parseCst, typstVersion } = wrap(raw, ready)
export type { Binding, CstNode, ParseError, ParseMode, ParseOptions, ParseResult } from './api.js'
