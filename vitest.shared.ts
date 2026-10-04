import { defineConfig } from 'vitest/config'

/**
 * Shared Vitest config for every lib. Each lib's `vitest.config.ts` re-exports this, so
 * `pnpm --filter <lib> test` and the root `vitest.config.ts` (all projects) behave the same.
 */

// Resolve workspace packages to their `src` via the `@jote/source` export condition,
// so tests run against source without building dependencies first.
const conditions = ['@jote/source', 'module', 'node', 'development|production']

// Snapshots were written by Jest with these (pre-Jest-29 default) settings.
export const snapshotFormat = { escapeString: true, printBasicPrototype: true }

export default defineConfig({
  resolve: { conditions },
  ssr: { resolve: { conditions } },
  test: {
    environment: 'node',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    snapshotFormat,
    // Never write snapshot files implicitly (not even new ones); update deliberately with `vitest -u`.
    update: 'none',
  },
})
