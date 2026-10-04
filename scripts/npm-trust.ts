#!/usr/bin/env node
/**
 * Configure npm trusted publishing (OIDC) for every publishable workspace package that exists on npm.
 *
 *   pnpm npm-trust          # print the `npm trust github ...` commands (dry run)
 *   pnpm npm-trust --run    # run them, 2s apart
 *
 * Requires npm >= 11.15.0 (`npm i -g npm@latest`), `npm login` as a maintainer of the packages and
 * account-level 2FA. On the first 2FA prompt in the browser tick "skip 2FA for the next 5 minutes";
 * ~80 packages fit in that window. A package that already has a trusted publisher errors; check
 * with `npm trust list <pkg>` and `npm trust revoke <pkg> --id <id>` first if you need to replace it.
 * Never-published packages can't be configured yet: publish them once first (see docs/releasing.md).
 */
import { execFile, spawnSync } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import { promisify } from 'node:util'
import { publishablePackages } from './workspace-packages.ts'

const REPOSITORY = 'TrialAndErrorOrg/parsers'
const WORKFLOW = 'release.yml'

const run = promisify(execFile)
const execute = process.argv.includes('--run')

// on npm AND ours (skips names like `jast` / `ojs-api` that belong to someone else)
const exists = async (name: string) =>
  run('npm', ['view', name, 'repository.url']).then(
    ({ stdout }) => /TrialAndErrorOrg\//i.test(stdout),
    () => false,
  )

const pkgs = publishablePackages()
const published = (
  await Promise.all(pkgs.map(async (p) => ((await exists(p.name)) ? p : null)))
).filter((p) => p !== null)
const skipped = pkgs.filter((p) => !published.includes(p))

const args = (name: string) => [
  'trust',
  'github',
  name,
  '--repository',
  REPOSITORY,
  '--file',
  WORKFLOW,
  '--allow-publish',
  '--yes',
]

if (skipped.length) {
  console.error(
    `# skipping ${skipped.length} packages not on npm (or not ours):${skipped.map((p) => p.name).join(', ')}`,
  )
}

for (const pkg of published) {
  if (!execute) {
    console.log(['npm', ...args(pkg.name)].join(' '))
    continue
  }
  console.log(`→ ${pkg.name}`)
  const res = spawnSync('npm', args(pkg.name), { stdio: 'inherit' })
  if (res.status !== 0) console.error(`  failed (exit ${res.status}); continuing`)
  await sleep(2000)
}
