#!/usr/bin/env node
/**
 * Mirror every released package into its own read-only repo, TrialAndErrorOrg/<name> (scope
 * dropped): one snapshot commit of the package's directory per release, tagged v<version>.
 *
 *   pnpm split                # mirror every package whose current version isn't mirrored yet
 *   pnpm split --dry-run      # only print what would be mirrored
 *   pnpm split reoff-parse    # only these packages
 *
 * A version counts as released once its `<name>@<version>` tag exists here (Changesets pushes it
 * on publish); the snapshot is that tag's tree, so unreleased changes on main never leak out.
 * Snapshots go on top of the mirror's existing history, so nothing is ever force-pushed, and
 * rerunning is safe: a version whose tag is already in the mirror is skipped. Missing repos are
 * created; description, topics (`keywords`) and homepage (the package's directory here) are synced
 * on every snapshot.
 *
 * Needs GH_TOKEN with Administration + Contents write on the org's repos (in CI: the split GitHub
 * App, see docs/releasing.md). Locally it falls back to `gh auth token`.
 */
import { execFile, execFileSync } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { promisify } from 'node:util'
import { publishablePackages, workspaceRoot } from './workspace-packages.ts'

const ORG = 'TrialAndErrorOrg'
const MONOREPO = `${ORG}/trialanderror`
// committer of the snapshot commits
const BOT = ['github-actions[bot]', '41898282+github-actions[bot]@users.noreply.github.com']

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const only = args.filter((arg) => !arg.startsWith('--'))

const token =
  process.env.GH_TOKEN ?? execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim()

const exec = promisify(execFile)
// in CI the token is the only git credential; locally the user's own credential helper is used
const auth = process.env.GH_TOKEN
  ? [
      '-c',
      `http.https://github.com/.extraheader=AUTHORIZATION: basic ${Buffer.from(`x-access-token:${token}`).toString('base64')}`,
    ]
  : []
const git = async (gitArgs: string[], env?: Record<string, string>) =>
  (
    await exec('git', [...auth, ...gitArgs], {
      cwd: workspaceRoot,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0', ...env },
    })
  ).stdout.trim()

const api = async <T>(method: string, path: string, body?: unknown): Promise<T | undefined> => {
  const res = await fetch(`https://api.github.com/${path}`, {
    method,
    headers: {
      accept: 'application/vnd.github+json',
      authorization: `Bearer ${token}`,
      'x-github-api-version': '2022-11-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === 404 && method === 'GET') return undefined
  if (!res.ok) throw new Error(`${method} ${path}: ${res.status} ${await res.text()}`)
  return res.status === 204 ? undefined : ((await res.json()) as T)
}

/** GitHub topics: lowercase letters, digits and hyphens, at most 50 characters, at most 20. */
const toTopics = (keywords: string[] = []) =>
  [
    ...new Set(
      keywords
        .map((k) =>
          k
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 50),
        )
        .filter(Boolean),
    ),
  ].slice(0, 20)

/** Run `fn` over `items`, at most `limit` at a time. */
const pool = async <T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>) => {
  const results: R[] = []
  let next = 0
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (next < items.length) {
        const i = next++
        results[i] = await fn(items[i])
      }
    }),
  )
  return results
}

const all = publishablePackages()
// the platform packages of typast-syntax-node live inside it and are mirrored along with it
const packages = all.filter(
  (pkg) =>
    !all.some((outer) => outer !== pkg && pkg.path.startsWith(outer.path + sep)) &&
    (only.length === 0 || only.includes(pkg.name)),
)

interface Plan {
  name: string
  version: string
  dir: string
  repo: string
  commit: string
  manifest: { description?: string; keywords?: string[] }
  existing?: { default_branch: string; archived: boolean }
}

const plans = (
  await pool(packages, 8, async (pkg): Promise<Plan | undefined> => {
    const tag = `${pkg.name}@${pkg.version}`
    const commit = await git(['rev-parse', '--verify', '-q', `refs/tags/${tag}^{commit}`]).catch(
      () => '',
    )
    if (!commit) {
      console.log(`- ${tag}: not released, skipped`)
      return
    }
    const repo = pkg.name.replace(/^@[^/]+\//, '')
    const existing = await api<Plan['existing']>('GET', `repos/${ORG}/${repo}`)
    if (existing?.archived) {
      console.warn(`! ${tag}: ${ORG}/${repo} is archived, skipped`)
      return
    }
    if (existing && (await api('GET', `repos/${ORG}/${repo}/git/ref/tags/v${pkg.version}`))) {
      console.log(`- ${tag}: already mirrored`)
      return
    }
    const manifest = JSON.parse(await readFile(join(pkg.path, 'package.json'), 'utf8'))
    const dir = relative(workspaceRoot, pkg.path).split(sep).join('/')
    return { name: pkg.name, version: pkg.version!, dir, repo, commit, manifest, existing }
  })
).filter((plan) => plan !== undefined)

if (dryRun) {
  for (const p of plans)
    console.log(`+ ${p.name}@${p.version}: would mirror ${p.dir} to ${ORG}/${p.repo}`)
  process.exit(0)
}

// one at a time: they all fetch into and push from the same repository
let failed = 0
for (const p of plans) {
  try {
    const url = `https://github.com/${ORG}/${p.repo}.git`
    const homepage = `https://github.com/${MONOREPO}/tree/main/${p.dir}`
    const settings = {
      description: p.manifest.description ?? '',
      homepage,
      has_issues: false,
      has_projects: false,
      has_wiki: false,
    }

    if (!p.existing) await api('POST', `orgs/${ORG}/repos`, { name: p.repo, ...settings })
    const branch = p.existing?.default_branch ?? 'main'
    const head = p.existing
      ? (
          await api<{ object: { sha: string } }>(
            'GET',
            `repos/${ORG}/${p.repo}/git/ref/heads/${branch}`,
          )
        )?.object.sha
      : undefined
    if (head) await git(['fetch', '--quiet', '--no-tags', '--depth=1', url, head])

    const date = await git(['log', '-1', '--format=%cI', p.commit])
    const snapshot = await git(
      [
        'commit-tree',
        `${p.commit}:${p.dir}`,
        ...(head ? ['-p', head] : []),
        '-m',
        `${p.name}@${p.version}`,
        '-m',
        `Snapshot of ${p.dir} at ${MONOREPO}@${p.commit}.\nThis repository is a read-only mirror; development happens in ${MONOREPO}.`,
      ],
      {
        GIT_AUTHOR_NAME: BOT[0],
        GIT_AUTHOR_EMAIL: BOT[1],
        GIT_AUTHOR_DATE: date,
        GIT_COMMITTER_NAME: BOT[0],
        GIT_COMMITTER_EMAIL: BOT[1],
        GIT_COMMITTER_DATE: date,
      },
    )
    await git([
      'push',
      '--quiet',
      url,
      `${snapshot}:refs/heads/${branch}`,
      `${snapshot}:refs/tags/v${p.version}`,
    ])

    await api('PATCH', `repos/${ORG}/${p.repo}`, settings)
    await api('PUT', `repos/${ORG}/${p.repo}/topics`, { names: toTopics(p.manifest.keywords) })
    console.log(`+ ${p.name}@${p.version}: mirrored to ${ORG}/${p.repo}`)
  } catch (error) {
    failed++
    console.error(`! ${p.name}@${p.version}: ${error instanceof Error ? error.message : error}`)
  }
}

if (failed) process.exit(1)
