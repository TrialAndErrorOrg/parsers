/*
 * What an editor may do through the gateway. Everything is refused unless a
 * rule allows it: reads of the one repository, commits to the allowed
 * branches and paths, and the pull request calls Sveltia's editorial workflow
 * makes. Each check returns a reason when it refuses, or undefined.
 */

export interface Rules {
  /** `owner/name` of the content repository */
  repo: string
  /** Branches commits may go to. `*` matches within a name, `**` across slashes */
  branches: string[]
  /** Paths commits may touch. Any path if left out */
  paths?: string[]
  /** Refuse every write */
  readOnly: boolean
  /** Allow `repository_dispatch`, which Sveltia uses to trigger a deploy */
  dispatches: boolean
}

/** Match `value` against globs where `*` stays within one path segment and `**` crosses them */
export function matchesAny(value: string, globs: string[]) {
  return globs.some((glob) => {
    const pattern = glob
      .split('**')
      .map((part) => part.split('*').map(escape).join('[^/]*'))
      .join('.*')
    return new RegExp(`^${pattern}$`).test(value)
  })
}

const escape = (text: string) => text.replace(/[.+?^${}()|[\]\\]/g, '\\$&')

const sameRepo = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

/** A REST call, by method and path (without the API root) */
export function checkRest(
  rules: Rules,
  method: string,
  path: string,
  body: unknown,
): string | undefined {
  const prefix = `/repos/${rules.repo}`
  const inRepo =
    sameRepo(path.slice(0, prefix.length), prefix) &&
    (path.length === prefix.length || path[prefix.length] === '/')
  if (!inRepo) return 'Only the content repository can be reached through this gateway'

  if (method === 'GET' || method === 'HEAD') return undefined
  if (rules.readOnly) return 'This gateway is read-only'

  const rest = path.slice(prefix.length)
  const data = (body ?? {}) as Record<string, unknown>
  const branch = (name: unknown) =>
    typeof name === 'string' && matchesAny(name.replace(/^[^:]+:/, ''), rules.branches)
      ? undefined
      : `Branch "${name}" is not open for editing`

  // Branches, for the editorial workflow
  if (method === 'POST' && rest === '/git/refs')
    return branch(String(data.ref ?? '').replace(/^refs\/heads\//, ''))
  const ref = rest.match(/^\/git\/refs\/heads\/(.+)$/)
  if (ref && (method === 'PATCH' || method === 'DELETE')) return branch(decodeURIComponent(ref[1]))

  // Pull requests and their labels, for the editorial workflow
  if (method === 'POST' && rest === '/pulls') return branch(data.head) ?? branch(data.base)
  if (method === 'PATCH' && /^\/pulls\/\d+$/.test(rest))
    return data.base === undefined ? undefined : branch(data.base)
  if (method === 'PUT' && /^\/pulls\/\d+\/merge$/.test(rest)) return undefined
  if (
    /^\/issues\/\d+\/labels(?:\/[^/]+)?$/.test(rest) &&
    ['POST', 'PUT', 'DELETE'].includes(method)
  )
    return undefined

  // "Publish" button that triggers a deploy
  if (method === 'POST' && rest === '/dispatches' && rules.dispatches) return undefined

  return `${method} ${rest || '/'} is not allowed through this gateway`
}

const ALLOWED_MUTATIONS = new Set([
  'createCommitOnBranch',
  'markPullRequestReadyForReview',
  'convertPullRequestToDraft',
])

/** A GraphQL request body */
export function checkGraphql(rules: Rules, body: unknown): string | undefined {
  const { query, variables = {} } = (body ?? {}) as {
    query?: unknown
    variables?: Record<string, any>
  }
  if (typeof query !== 'string') return 'Malformed GraphQL request'
  const text = withoutStrings(query)

  // Sveltia passes the repository as variables
  if (
    variables.owner !== undefined &&
    variables.repo !== undefined &&
    !sameRepo(`${variables.owner}/${variables.repo}`, rules.repo)
  ) {
    return 'Only the content repository can be reached through this gateway'
  }
  for (const match of query.matchAll(
    /repository\s*\(\s*owner\s*:\s*"([^"]*)"\s*,\s*name\s*:\s*"([^"]*)"/g,
  )) {
    if (!sameRepo(`${match[1]}/${match[2]}`, rules.repo))
      return 'Only the content repository can be reached through this gateway'
  }

  if (/\bsubscription\b/.test(text)) return 'GraphQL subscriptions are not allowed'
  if (!/\bmutation\b/.test(text)) return undefined
  if (rules.readOnly) return 'This gateway is read-only'

  for (const field of topLevelFields(text.slice(text.search(/\bmutation\b/)))) {
    if (!ALLOWED_MUTATIONS.has(field))
      return `The GraphQL mutation ${field} is not allowed through this gateway`
    if (field === 'createCommitOnBranch') {
      const reason = checkCommit(rules, variables.input)
      if (reason) return reason
    }
  }
  return undefined
}

/** A commit through `createCommitOnBranch`. Its input has to come as a variable, so it can be checked */
function checkCommit(rules: Rules, input: any): string | undefined {
  if (!input?.branch || !input.fileChanges)
    return 'Commits must pass their input as the $input variable'
  const { repositoryNameWithOwner, branchName } = input.branch
  if (
    typeof repositoryNameWithOwner !== 'string' ||
    !sameRepo(repositoryNameWithOwner, rules.repo)
  ) {
    return 'Only the content repository can be reached through this gateway'
  }
  if (typeof branchName !== 'string' || !matchesAny(branchName, rules.branches))
    return `Branch "${branchName}" is not open for editing`
  if (rules.paths) {
    const paths = [
      ...(input.fileChanges.additions ?? []),
      ...(input.fileChanges.deletions ?? []),
    ].map((change: { path: string }) => change.path)
    const outside = paths.find(
      (path) => typeof path !== 'string' || !matchesAny(path, rules.paths!),
    )
    if (outside !== undefined) return `"${outside}" is outside the folders open for editing`
  }
  return undefined
}

/** Blank out string literals and comments, so their contents can't look like operations */
function withoutStrings(query: string) {
  return query
    .replace(/"""[\s\S]*?"""/g, '""')
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/#[^\n]*/g, '')
}

/** The fields selected at the top of an operation, e.g. `createCommitOnBranch` (aliases resolved) */
export function topLevelFields(operation: string) {
  const fields: string[] = []
  let depth = 0
  let parens = 0
  let buffer = ''
  // Every name left in the buffer is a field: aliases ("name:") are dropped first
  const flush = () => {
    fields.push(...(buffer.replace(/\w+\s*:/g, ' ').match(/[a-z_]\w*/gi) ?? []))
    buffer = ''
  }
  for (const char of operation) {
    if (char === '(') {
      if (depth === 1 && parens === 0) flush()
      parens++
    } else if (char === ')') {
      parens--
    } else if (parens > 0) {
      continue
    } else if (char === '{') {
      if (depth === 1) flush()
      depth++
    } else if (char === '}') {
      if (depth === 1) flush()
      depth--
      if (depth === 0) break
    } else if (depth === 1) {
      buffer += char
    }
  }
  return fields
}
