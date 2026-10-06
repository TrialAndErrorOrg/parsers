import { describe, expect, it, vi } from 'vitest'
import * as wasm from 'typast-syntax-wasm'
import { backend, parse, parseCst, typstVersion } from './index.js'

const sample = `#import "@preview/x:1.0.0": *
#set text(size: 10pt, lang: "en")

= Intro <intro>

Some *bold* and _emph_ text with $x^2 + sqrt(y)$, a ref @intro and #footnote[a note].

- one
- two

$ sum_(i=0)^n i = (n(n+1))/2 $ // trailing comment
`

describe('typast-syntax-node', () => {
  it('uses the native addon when it is built', () => {
    expect(['native', 'wasm']).toContain(backend)
  })

  it('agrees with the WebAssembly build', () => {
    expect(parse(sample)).toEqual(wasm.parse(sample))
    expect(parseCst(sample)).toEqual(wasm.parseCst(sample))
    expect(typstVersion).toBe(wasm.typstVersion)
  })

  it('falls back to WebAssembly', async () => {
    vi.stubEnv('TYPAST_SYNTAX_BACKEND', 'wasm')
    vi.resetModules()
    const fallback = await import('./index.js')
    expect(fallback.backend).toBe('wasm')
    expect(fallback.parse(sample)).toEqual(parse(sample))
    vi.unstubAllEnvs()
  })
})
