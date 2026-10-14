# typast-syntax-node

Typst's own parser ([`typst-syntax`](https://crates.io/crates/typst-syntax) 0.15.1) as a Node.js
addon (napi-rs), producing [`typast`](../typast) trees. Same API as
[`typast-syntax-wasm`](../typast-syntax-wasm), about 30 % faster.

Most code should use [`typast-util-from-string`](../typast-util-from-string), which picks this
package in Node.js.

## Use

```ts
import { backend, parse, parseCst } from 'typast-syntax-node'

const { tree, errors } = parse('= Hello\n\nSome *bold* text.')
backend // 'native' or 'wasm'
```

## Loading

In order:

1. `typast-syntax.<platform>.node` next to the package (from `pnpm build:native`);
2. the prebuilt binary package for the platform, `typast-syntax-node-<platform>` (`darwin-arm64`,
   `darwin-x64`, `linux-x64-gnu`, `linux-arm64-gnu`, `win32-x64-msvc`);
3. `typast-syntax-wasm`, so it works everywhere Node runs.

Set `TYPAST_SYNTAX_BACKEND=wasm` to skip the native addon.

## Build

```sh
pnpm --filter typast-syntax-node build:native   # needs Rust (see rust-toolchain.toml)
```

`build` only compiles the TypeScript loader, so the rest of the monorepo builds without Rust.

## License

GPL-3.0-or-later
