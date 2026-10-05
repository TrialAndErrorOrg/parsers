import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

export interface WorkspacePackage {
  name: string
  version?: string
  path: string
  private: boolean
}

export const workspaceRoot = resolve(import.meta.dirname, '..')

/** All packages in pnpm-workspace.yaml (excluding the root), as pnpm sees them. */
export function workspacePackages(): WorkspacePackage[] {
  const out = execFileSync('pnpm', ['ls', '--recursive', '--depth', '-1', '--json'], {
    cwd: workspaceRoot,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  })
  return (JSON.parse(out) as WorkspacePackage[])
    .filter((pkg) => resolve(pkg.path) !== workspaceRoot && pkg.name)
    .map((pkg) => ({ ...pkg, private: Boolean(pkg.private) }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

/** Publishable = not private and inside libs/. */
export function publishablePackages(): WorkspacePackage[] {
  return workspacePackages().filter(
    (pkg) => !pkg.private && resolve(pkg.path).startsWith(resolve(workspaceRoot, 'libs') + '/'),
  )
}
