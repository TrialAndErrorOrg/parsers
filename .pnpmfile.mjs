// pnpm hooks for the whole workspace.

/**
 * Strip the `@jote/source` export condition from published package.json files. It points at
 * `src/index.ts`, which is only there for go-to-definition and tests inside this repo (see
 * `customConditions` in tsconfig.base.json) and isn't in the tarball.
 */
function stripSourceCondition(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return entry
  return Object.fromEntries(
    Object.entries(entry)
      .filter(([key]) => key !== '@jote/source')
      .map(([key, value]) => [key, stripSourceCondition(value)]),
  )
}

export const hooks = {
  beforePacking(pkg) {
    if (pkg.exports) pkg.exports = stripSourceCondition(pkg.exports)
    return pkg
  },
}
