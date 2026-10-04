import { fileURLToPath } from 'node:url'

// Built with webpack (`next build --webpack` / `next dev --webpack`), not Turbopack: the
// workspace libs are consumed from TypeScript source, which needs a custom resolve condition
// (`@jote/source`) and `.js` → `.ts` extension aliasing for their NodeNext-style specifiers.
// Turbopack has neither (no `conditionNames`, no `extensionAlias`; see vercel/next.js#82945).
const SOURCE_CONDITION = '@jote/source'

/** Prepend the source condition to every `conditionNames` list webpack/Next sets up. */
function addSourceCondition(resolve) {
  if (!resolve) return
  resolve.conditionNames = [SOURCE_CONDITION, ...(resolve.conditionNames ?? ['...'])]
}

function walkRules(rules) {
  for (const rule of rules ?? []) {
    if (!rule || typeof rule !== 'object') continue
    if (rule.resolve?.conditionNames) addSourceCondition(rule.resolve)
    walkRules(rule.oneOf)
    walkRules(rule.rules)
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Trace from the monorepo root so the standalone output includes workspace packages
  // (and keeps the `.next/standalone/apps/converter/server.js` layout).
  outputFileTracingRoot: fileURLToPath(new URL('../../', import.meta.url)),
  experimental: {
    // Type-check (and load tsconfig) through the `tsc` CLI: TypeScript 7 ships no JS API.
    useTypeScriptCli: true,
  },
  // Workspace libs are consumed from TypeScript source (see `@jote/source` below).
  transpilePackages: [
    'docx-to-vfile',
    'reoff-parse',
    'reoff-clean',
    'reoff-markup-to-style',
    'reoff-unified-latex',
    'unified-latex-stringify',
  ],
  webpack: (config) => {
    // Resolve workspace packages to their `src/index.ts` instead of the built `dist`.
    addSourceCondition(config.resolve)
    walkRules(config.module?.rules)
    // Sources use NodeNext-style `.js` specifiers for `.ts` files.
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
    }
    return config
  },
}

export default nextConfig
