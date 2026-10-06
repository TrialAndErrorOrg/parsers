# typast-syntax-wasm

Typst's own parser ([`typst-syntax`](https://crates.io/crates/typst-syntax) 0.15.1) compiled to
WebAssembly, producing [`typast`](../typast) trees. Runs in browsers and Node.js.

Most code should use [`typast-util-from-string`](../typast-util-from-string), which picks this
package in the browser and [`typast-syntax-node`](../typast-syntax-node) in Node.js.

## Use

```ts
import { parse, parseCst } from 'typast-syntax-wasm'

const { tree, errors } = parse('= Hello\n\nSome *bold* text.')
// tree: typast Root, errors: [{ message, hints?, position }]

parse('x^2', { mode: 'math' }) // 'markup' (default), 'math' or 'code'
parse('1 + 2', { positions: false })

parseCst('*a*') // Typst's lossless concrete syntax tree: { kind, text?, children?, position? }
```

In Node.js the module is read from disk and instantiated on first use. In the browser it is
fetched and instantiated with top-level `await` when the package is imported, so `parse` stays
synchronous; bundlers (webpack 5, Vite) emit the `.wasm` file through the
`new URL('…', import.meta.url)` pattern.

## Build

The compiled module in `pkg/` is checked in, so nothing here needs Rust. To rebuild it after
changing the Rust crates (`crates/typast-syntax`, `rust/`):

```sh
cargo install wasm-bindgen-cli --version 0.2.129   # must match the wasm-bindgen crate
pnpm --filter typast-syntax-wasm build:wasm
```

The toolchain is pinned in `rust-toolchain.toml`; CI rebuilds `pkg/` and fails if it differs.

## License

GPL-3.0-or-later
