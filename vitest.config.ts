import { defineConfig } from 'vitest/config'
import { snapshotFormat } from './vitest.shared.ts'

// Runs every lib's tests in one Vitest process (`pnpm vitest`), e.g. for editor integrations.
// `pnpm test` runs them per package through Turborepo instead.
export default defineConfig({
  test: {
    projects: ['libs/*/vitest.config.ts', 'libs/*/*/vitest.config.ts'],
    // Root-level options (not taken from the project configs when running all projects at once).
    update: 'none',
    snapshotFormat,
  },
})
