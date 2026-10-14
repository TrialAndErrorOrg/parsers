import { describe, expect, it } from 'vitest'
import { checkGraphql, checkRest, matchesAny, type Rules, topLevelFields } from './rules.js'

const rules: Rules = {
  repo: 'acme/site',
  branches: ['main', 'cms/**'],
  paths: ['content/**', 'static/uploads/*'],
  readOnly: false,
  dispatches: true,
}

describe('matchesAny', () => {
  it('keeps * within a segment and lets ** cross them', () => {
    expect(matchesAny('cms/posts/hello', ['cms/**'])).toBe(true)
    expect(matchesAny('static/uploads/a.png', ['static/uploads/*'])).toBe(true)
    expect(matchesAny('static/uploads/x/a.png', ['static/uploads/*'])).toBe(false)
    expect(matchesAny('mainline', ['main'])).toBe(false)
  })
})

describe('checkRest', () => {
  it('allows reads of the repository only', () => {
    expect(checkRest(rules, 'GET', '/repos/acme/site/git/trees/abc', undefined)).toBeUndefined()
    expect(checkRest(rules, 'GET', '/repos/ACME/Site', undefined)).toBeUndefined()
    expect(checkRest(rules, 'GET', '/repos/acme/site-private/contents', undefined)).toBeTruthy()
    expect(checkRest(rules, 'GET', '/repos/acme/other', undefined)).toBeTruthy()
    expect(checkRest(rules, 'GET', '/user/repos', undefined)).toBeTruthy()
  })

  it('allows branches and pull requests on open branches only', () => {
    expect(
      checkRest(rules, 'POST', '/repos/acme/site/git/refs', { ref: 'refs/heads/cms/posts/hello' }),
    ).toBeUndefined()
    expect(
      checkRest(rules, 'POST', '/repos/acme/site/git/refs', { ref: 'refs/heads/release' }),
    ).toBeTruthy()
    expect(
      checkRest(rules, 'DELETE', '/repos/acme/site/git/refs/heads/cms%2Fposts%2Fhello', undefined),
    ).toBeUndefined()
    expect(checkRest(rules, 'PATCH', '/repos/acme/site/git/refs/heads/release', {})).toBeTruthy()
    expect(
      checkRest(rules, 'POST', '/repos/acme/site/pulls', { head: 'cms/posts/hello', base: 'main' }),
    ).toBeUndefined()
    expect(
      checkRest(rules, 'POST', '/repos/acme/site/pulls', {
        head: 'cms/posts/hello',
        base: 'release',
      }),
    ).toBeTruthy()
    expect(checkRest(rules, 'PUT', '/repos/acme/site/pulls/4/merge', {})).toBeUndefined()
    expect(
      checkRest(rules, 'POST', '/repos/acme/site/issues/4/labels', { labels: ['x'] }),
    ).toBeUndefined()
    expect(
      checkRest(rules, 'PATCH', '/repos/acme/site/issues/4', { labels: ['x'] }),
    ).toBeUndefined()
    expect(
      checkRest(rules, 'PATCH', '/repos/acme/site/issues/4', { labels: ['x'], state: 'closed' }),
    ).toBeTruthy()
  })

  it('refuses everything else that writes', () => {
    expect(checkRest(rules, 'PUT', '/repos/acme/site/contents/README.md', {})).toBeTruthy()
    expect(checkRest(rules, 'POST', '/repos/acme/site/forks', {})).toBeTruthy()
    expect(checkRest(rules, 'DELETE', '/repos/acme/site', undefined)).toBeTruthy()
    expect(checkRest(rules, 'POST', '/repos/acme/site/dispatches', {})).toBeUndefined()
    expect(
      checkRest({ ...rules, dispatches: false }, 'POST', '/repos/acme/site/dispatches', {}),
    ).toBeTruthy()
    expect(
      checkRest({ ...rules, readOnly: true }, 'POST', '/repos/acme/site/git/refs', {
        ref: 'refs/heads/main',
      }),
    ).toBeTruthy()
  })
})

const commit = (branchName: string, paths: string[], repositoryNameWithOwner = 'acme/site') => ({
  query:
    'mutation($input: CreateCommitOnBranchInput!) { createCommitOnBranch(input: $input) { commit { oid } } }',
  variables: {
    input: {
      branch: { repositoryNameWithOwner, branchName },
      fileChanges: { additions: paths.map((path) => ({ path, contents: '' })) },
    },
  },
})

const createRef = (name: string) => ({
  query: 'mutation($input: CreateRefInput!) { createRef(input: $input) { ref { name } } }',
  variables: { input: { repositoryId: 'R_1', name, oid: 'abc' } },
})

describe('checkGraphql', () => {
  it('allows queries about the repository', () => {
    expect(
      checkGraphql(rules, {
        query:
          'query($owner: String!, $repo: String!) { repository(owner: $owner, name: $repo) { id } }',
        variables: { owner: 'acme', repo: 'site' },
      }),
    ).toBeUndefined()
    expect(
      checkGraphql(rules, { query: '{ repository(owner: "acme", name: "other") { id } }' }),
    ).toBeTruthy()
    expect(
      checkGraphql(rules, { query: 'query { x }', variables: { owner: 'acme', repo: 'other' } }),
    ).toBeTruthy()
  })

  it('allows commits to open branches and paths', () => {
    expect(checkGraphql(rules, commit('main', ['content/posts/a.md']))).toBeUndefined()
    expect(checkGraphql(rules, commit('release', ['content/posts/a.md']))).toMatch(/release/)
    expect(checkGraphql(rules, commit('main', ['package.json']))).toMatch(/package.json/)
    expect(checkGraphql(rules, commit('main', ['content/a.md'], 'acme/other'))).toBeTruthy()
    expect(
      checkGraphql({ ...rules, readOnly: true }, commit('main', ['content/a.md'])),
    ).toBeTruthy()
  })

  it('allows new branches only where editing is open', () => {
    expect(checkGraphql(rules, createRef('refs/heads/cms/posts/hello'))).toBeUndefined()
    expect(checkGraphql(rules, createRef('refs/heads/release'))).toMatch(/release/)
    expect(checkGraphql(rules, createRef('refs/tags/cms/v1'))).toBeTruthy()
    expect(
      checkGraphql({ ...rules, readOnly: true }, createRef('refs/heads/cms/posts/hello')),
    ).toBeTruthy()
    expect(
      checkGraphql(rules, {
        query: 'mutation { createRef(input: {name: "refs/heads/release"}) { ref { name } } }',
      }),
    ).toMatch(/\$input/)
  })

  it('refuses other mutations, also when hidden behind an alias or a query', () => {
    expect(
      checkGraphql(rules, {
        query: 'mutation { deleteRef(input: {refId: "x"}) { clientMutationId } }',
      }),
    ).toMatch(/deleteRef/)
    expect(
      checkGraphql(rules, {
        query:
          'mutation { ok: createCommitOnBranch(input: $input) { x } evil: deleteRepository { x } }',
        variables: commit('main', ['content/a.md']).variables,
      }),
    ).toMatch(/deleteRepository/)
    expect(
      checkGraphql(rules, { query: 'query A { x } mutation B { deleteRef(input: {}) { x } }' }),
    ).toBeTruthy()
    expect(
      checkGraphql(rules, {
        query: 'mutation { createCommitOnBranch(input: {branch: {}}) { x } }',
      }),
    ).toMatch(/\$input/)
  })

  it('is not fooled by strings that mention mutations', () => {
    expect(
      checkGraphql(rules, {
        query:
          '{ repository(owner: "acme", name: "site") { object(expression: "mutation { deleteRef }") { id } } }',
      }),
    ).toBeUndefined()
  })
})

describe('topLevelFields', () => {
  it('lists the fields at the top of an operation', () => {
    expect(
      topLevelFields(
        'mutation M($a: X!) { one: createCommitOnBranch(input: $a) { commit { oid } } two __typename }',
      ),
    ).toEqual(['createCommitOnBranch', 'two', '__typename'])
  })
})
