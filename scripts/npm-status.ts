#!/usr/bin/env node
/**
 * Compare each publishable workspace package's version with what's on npm.
 *
 *   pnpm npm-status          # print the table
 *   pnpm npm-status --sync   # bump package.json versions that are BEHIND npm up to npm's latest
 *
 * Run --sync once before the first Changesets release, otherwise `changeset version` bumps from a
 * stale version and either collides with an existing npm version or moves `latest` backwards.
 */
import { execFile } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { promisify } from 'node:util'
import { publishablePackages, workspaceRoot } from './workspace-packages.ts'

const run = promisify(execFile)
const sync = process.argv.includes('--sync')

type Status = 'ok' | 'unpublished' | 'behind-npm' | 'ahead-of-npm' | 'no-version'

const cmp = (a: string, b: string) => {
  const pa = a.split(/[.-]/).map(Number)
  const pb = b.split(/[.-]/).map(Number)
  for (let i = 0; i < 3; i++) if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) - (pb[i] ?? 0)
  return 0
}

const npmInfo = async (name: string) => {
  try {
    const { stdout } = await run('npm', ['view', name, 'dist-tags.latest', 'repository.url', '--json'])
    const json = JSON.parse(stdout)
    return { latest: json['dist-tags.latest'] as string, repo: (json['repository.url'] ?? '') as string }
  } catch {
    return undefined
  }
}

const rows = await Promise.all(
  publishablePackages().map(async (pkg) => {
    const info = await npmInfo(pkg.name)
    let status: Status
    if (!pkg.version) status = 'no-version'
    else if (!info) status = 'unpublished'
    else {
      const c = cmp(pkg.version, info.latest)
      status = c === 0 ? 'ok' : c < 0 ? 'behind-npm' : 'ahead-of-npm'
    }
    const foreign = info && !/TrialAndErrorOrg\//i.test(info.repo) ? info.repo : ''
    return { ...pkg, npm: info?.latest ?? '-', status, foreign }
  }),
)

console.log(['package', 'repo', 'npm', 'status', 'note'].join('\t'))
for (const r of rows) {
  const note = r.foreign ? `npm name owned by another project? (${r.foreign})` : ''
  console.log([r.name, r.version ?? '-', r.npm, r.status, note].join('\t'))
}

const count = (s: Status) => rows.filter((r) => r.status === s).length
console.log(
  `\n${rows.length} packages: ${count('ok')} in sync, ${count('behind-npm')} behind npm, ` +
    `${count('ahead-of-npm')} ahead of npm, ${count('unpublished')} unpublished, ${count('no-version')} without version`,
)

if (sync) {
  for (const r of rows.filter((r) => r.status === 'behind-npm' && !r.foreign)) {
    const file = join(r.path, 'package.json')
    const text = await readFile(file, 'utf8')
    await writeFile(file, text.replace(/("version":\s*")[^"]+(")/, `$1${r.npm}$2`))
    console.log(`synced ${relative(workspaceRoot, file)}: ${r.version} -> ${r.npm}`)
  }
}
