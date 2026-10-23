import { createVerify, generateKeyPairSync } from 'node:crypto'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { base64url, utf8 } from './encoding.js'
import { appJwt, pemToPkcs8 } from './github.js'
import { createGateway, entra, type IdentityProvider, oidc, testIdentity } from './index.js'

const SECRET = 'x'.repeat(40)
const SITE = 'https://example.org'

/** A pretend OpenID provider and GitHub, answering the gateway's fetches */
function fakeWorld({
  issuer = 'https://id.example.com',
  audience = 'client',
  tid,
}: { issuer?: string; audience?: string; tid?: string } = {}) {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
  const jwk = { ...publicKey.export({ format: 'jwk' }), kid: 'k1', alg: 'RS256', use: 'sig' }
  // Someone else's key, for forged tokens
  const forger = generateKeyPairSync('rsa', { modulusLength: 2048 }).privateKey
  let signingKey = privateKey
  let nonce = ''
  const github: { url: string; method: string; auth: string | null; body?: string }[] = []

  const sign = async (claims: object) => {
    const key = await crypto.subtle.importKey(
      'pkcs8',
      signingKey.export({ format: 'der', type: 'pkcs8' }),
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign'],
    )
    const data = `${base64url(utf8(JSON.stringify({ alg: 'RS256', kid: 'k1' })))}.${base64url(utf8(JSON.stringify(claims)))}`
    return `${data}.${base64url(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, utf8(data)))}`
  }

  const claims = (extra: object = {}) => ({
    iss: issuer,
    aud: audience,
    sub: 'user-1',
    oid: 'object-1',
    tid,
    name: 'Ada Editor',
    email: 'ada@example.org',
    nonce,
    exp: Math.floor(Date.now() / 1000) + 300,
    ...extra,
  })
  let tokenClaims: (() => object) | undefined

  vi.stubGlobal('fetch', async (input: string | URL | Request, init?: RequestInit) => {
    const url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url)
    if (url.pathname.endsWith('/.well-known/openid-configuration')) {
      return Response.json({
        issuer,
        authorization_endpoint: `${issuer}/authorize`,
        token_endpoint: `${issuer}/token`,
        jwks_uri: `${issuer}/jwks`,
      })
    }
    if (url.href === `${issuer}/jwks`) return Response.json({ keys: [jwk] })
    if (url.href === `${issuer}/token`)
      return Response.json({ id_token: await sign(tokenClaims ? tokenClaims() : claims()) })
    if (url.hostname === 'api.github.com') {
      github.push({
        url: url.pathname,
        method: init?.method ?? 'GET',
        auth: new Headers(init?.headers).get('Authorization'),
        body: init?.body as string,
      })
      return Response.json({ ok: true, path: url.pathname })
    }
    throw new Error(`Unexpected fetch ${url}`)
  })

  return {
    github,
    setNonce: (value: string) => {
      nonce = value
    },
    setClaims: (extra: object) => {
      tokenClaims = () => claims(extra)
    },
    forge: () => {
      signingKey = forger
    },
  }
}

/** Walk through sign-in as the browser would, and return the session the popup hands to the CMS */
async function signIn(
  gateway: ReturnType<typeof createGateway>,
  world?: ReturnType<typeof fakeWorld>,
) {
  const start = await gateway.fetch(
    new Request(`${SITE}/admin/auth?provider=github&site_id=example.org&scope=repo`),
  )
  expect(start.status).toBe(302)
  const location = new URL(start.headers.get('Location')!)
  const cookie = start.headers.get('Set-Cookie')!.split(';')[0]
  world?.setNonce(location.searchParams.get('nonce') ?? '')
  const callback = await gateway.fetch(
    new Request(`${SITE}/admin/callback?code=abc&state=${location.searchParams.get('state')}`, {
      headers: { Cookie: cookie },
    }),
  )
  const html = await callback.text()
  const message = JSON.parse(
    html.match(/const message = (".*?");/)![1].replaceAll('\\u003c', '<'),
  ) as string
  const result = JSON.parse(message.replace(/^authorization:github:(success|error):/, ''))
  return { status: callback.status, result, location, html }
}

const api = (
  gateway: ReturnType<typeof createGateway>,
  token: string,
  path: string,
  init: RequestInit = {},
) =>
  gateway.fetch(
    new Request(`${SITE}/admin/api${path}`, {
      ...init,
      headers: { Authorization: `token ${token}`, ...init.headers },
    }),
  )

beforeEach(() => {
  vi.restoreAllMocks()
})
afterEach(() => {
  vi.unstubAllGlobals()
})

describe('sign-in', () => {
  it('signs an editor in through any OpenID provider and answers /user from the session', async () => {
    const world = fakeWorld()
    const gateway = createGateway({
      identity: oidc({ issuer: 'https://id.example.com', clientId: 'client', clientSecret: 's' }),
      github: { repo: 'acme/site', token: 'ghp_test' },
      sessionSecret: SECRET,
      basePath: '/admin',
    })
    const { status, result, location } = await signIn(gateway, world)
    expect(location.origin + location.pathname).toBe('https://id.example.com/authorize')
    expect(location.searchParams.get('code_challenge_method')).toBe('S256')
    expect(location.searchParams.get('redirect_uri')).toBe(`${SITE}/admin/callback`)
    expect(status).toBe(200)
    expect(result.token).toBeTruthy()

    const user = await (await api(gateway, result.token, '/v3/user')).json()
    expect(user).toMatchObject({ id: 'user-1', name: 'Ada Editor', email: 'ada@example.org' })
    expect(world.github).toHaveLength(0)
  })

  it('checks the tenant for Entra', async () => {
    const tenant = '11111111-2222-3333-4444-555555555555'
    const world = fakeWorld({
      issuer: `https://login.microsoftonline.com/${tenant}/v2.0`,
      tid: tenant,
    })
    const gateway = createGateway({
      identity: entra({ tenantId: tenant, clientId: 'client', clientSecret: 's' }),
      github: { repo: 'acme/site', token: 't' },
      sessionSecret: SECRET,
      basePath: '/admin',
    })
    const ok = await signIn(gateway, world)
    expect(ok.result.token).toBeTruthy()
    expect(ok.location.searchParams.get('prompt')).toBe('select_account')
    const user = await (await api(gateway, ok.result.token, '/user')).json()
    expect(user.id).toBe('object-1')

    world.setClaims({ tid: 'someone-else' })
    const refused = await signIn(gateway, world)
    expect(refused.status).toBe(403)
    expect(refused.result.error).toMatch(/may not edit/)
  })

  it('refuses tokens with the wrong audience, nonce or signature', async () => {
    const world = fakeWorld()
    const gateway = createGateway({
      identity: oidc({ issuer: 'https://id.example.com', clientId: 'client' }),
      github: { repo: 'acme/site', token: 't' },
      sessionSecret: SECRET,
      basePath: '/admin',
    })
    world.setClaims({ aud: 'another-app' })
    expect((await signIn(gateway, world)).result.error).toMatch(/another app/)
    world.setClaims({ nonce: 'replayed' })
    expect((await signIn(gateway, world)).result.error).toMatch(/another sign-in/)
    world.setClaims({ exp: 1 })
    expect((await signIn(gateway, world)).result.error).toMatch(/expired/)
    world.setClaims({})
    expect((await signIn(gateway, world)).result.token).toBeTruthy()
    world.forge()
    expect((await signIn(gateway, world)).result.error).toMatch(/signature/)
  })

  it('refuses a callback without the matching attempt cookie', async () => {
    fakeWorld()
    const gateway = createGateway({
      identity: testIdentity(),
      github: { repo: 'acme/site', token: 't' },
      sessionSecret: SECRET,
      basePath: '/admin',
    })
    const response = await gateway.fetch(new Request(`${SITE}/admin/callback?code=x&state=forged`))
    expect(response.status).toBe(403)
  })

  it('only hands the token to allowed origins', async () => {
    fakeWorld()
    const gateway = createGateway({
      identity: testIdentity(),
      github: { repo: 'acme/site', token: 't' },
      sessionSecret: SECRET,
      basePath: '/admin',
      allowedOrigins: ['https://cms.example.net'],
    })
    const { html } = await signIn(gateway)
    expect(html).toContain('const allowed = ["https://example.org","https://cms.example.net"]')
  })
})

describe('the GitHub proxy', () => {
  async function setup(options: Partial<Parameters<typeof createGateway>[0]> = {}) {
    const world = fakeWorld()
    const gateway = createGateway({
      identity: testIdentity(),
      github: { repo: 'acme/site', token: 'ghp_server_side' },
      sessionSecret: SECRET,
      basePath: '/admin',
      paths: ['content/**'],
      ...options,
    })
    const { result } = await signIn(gateway)
    return { world, gateway, token: result.token as string }
  }

  it("passes allowed calls to GitHub with the server's token, never the editor's", async () => {
    const { world, gateway, token } = await setup()
    const response = await api(gateway, token, '/v3/repos/acme/site/git/trees/main?recursive=1')
    expect(response.status).toBe(200)
    expect(world.github).toEqual([
      {
        url: '/repos/acme/site/git/trees/main',
        method: 'GET',
        auth: 'Bearer ghp_server_side',
        body: undefined,
      },
    ])
  })

  it('says editors may push, since an app token gets no permissions from GitHub', async () => {
    const { gateway, token } = await setup()
    const repository = await (await api(gateway, token, '/v3/repos/acme/site')).json()
    expect(repository.permissions).toMatchObject({ push: true, pull: true, admin: false })

    // Read-only still opens, and refuses the writes themselves
    const readOnly = await setup({ readOnly: true })
    const opened = await (await api(readOnly.gateway, readOnly.token, '/v3/repos/acme/site')).json()
    expect(opened.permissions).toMatchObject({ push: true })
    const write = await api(readOnly.gateway, readOnly.token, '/v3/repos/acme/site/git/refs', {
      method: 'POST',
      body: JSON.stringify({ ref: 'refs/heads/cms/x', sha: 'abc' }),
    })
    expect(write.status).toBe(403)
  })

  it('refuses requests without a valid session', async () => {
    const { gateway, token } = await setup()
    expect((await api(gateway, '', '/user')).status).toBe(401)
    expect((await api(gateway, `${token.slice(0, -2)}xx`, '/user')).status).toBe(401)
    const otherGateway = createGateway({
      identity: testIdentity(),
      github: { repo: 'acme/site', token: 't' },
      sessionSecret: 'y'.repeat(40),
    })
    expect(
      (
        await otherGateway.fetch(
          new Request(`${SITE}/api/user`, { headers: { Authorization: `token ${token}` } }),
        )
      ).status,
    ).toBe(401)
  })

  it('tells other routes who is signed in', async () => {
    const { gateway, token } = await setup()
    const editor = (authorization?: string) =>
      gateway.editor(
        new Request(`${SITE}/admin/ojs/submissions`, {
          headers: authorization ? { Authorization: authorization } : {},
        }),
      )
    expect(await editor(`Bearer ${token}`)).toMatchObject({ email: expect.any(String) })
    expect(await editor()).toBeUndefined()
    expect(await editor(`Bearer ${token.slice(0, -2)}xx`)).toBeUndefined()
  })

  it('applies the rules', async () => {
    const { world, gateway, token } = await setup()
    expect((await api(gateway, token, '/v3/repos/acme/other')).status).toBe(403)
    const commit = (path: string) =>
      api(gateway, token, '/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query:
            'mutation($input: CreateCommitOnBranchInput!) { createCommitOnBranch(input: $input) { commit { oid } } }',
          variables: {
            input: {
              branch: { repositoryNameWithOwner: 'acme/site', branchName: 'main' },
              fileChanges: { additions: [{ path, contents: '' }] },
            },
          },
        }),
      })
    expect((await commit('content/a.md')).status).toBe(200)
    expect((await commit('.github/workflows/x.yml')).status).toBe(403)
    expect(world.github.map((call) => call.url)).toEqual(['/graphql'])
  })

  it('answers CORS preflights for allowed origins only', async () => {
    const { gateway } = await setup({ allowedOrigins: ['https://cms.example.net'] })
    const preflight = (origin: string) =>
      gateway.fetch(
        new Request(`${SITE}/admin/api/v3/user`, {
          method: 'OPTIONS',
          headers: { Origin: origin },
        }),
      )
    expect(
      (await preflight('https://cms.example.net')).headers.get('Access-Control-Allow-Origin'),
    ).toBe('https://cms.example.net')
    expect(
      (await preflight('https://evil.example')).headers.get('Access-Control-Allow-Origin'),
    ).toBeNull()
  })

  it('ignores paths outside its base', async () => {
    const { gateway } = await setup()
    expect(gateway.handles(new Request(`${SITE}/blog`))).toBe(false)
    expect((await gateway.fetch(new Request(`${SITE}/admin/other`))).status).toBe(404)
  })
})

describe('GitHub App keys', () => {
  it("turns GitHub's PKCS#1 key into one Web Crypto can sign with", async () => {
    const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
    const pkcs1 = privateKey.export({ format: 'pem', type: 'pkcs1' }) as string
    expect(pkcs1).toContain('BEGIN RSA PRIVATE KEY')
    expect(pemToPkcs8(pkcs1)).toEqual(
      new Uint8Array(privateKey.export({ format: 'der', type: 'pkcs8' })),
    )

    const jwt = await appJwt('123', pkcs1.replace(/\n/g, '\\n'))
    const [header, payload, signature] = jwt.split('.')
    const verify = createVerify('RSA-SHA256').update(`${header}.${payload}`)
    expect(verify.verify(publicKey, Buffer.from(signature, 'base64url'))).toBe(true)
    expect(JSON.parse(Buffer.from(payload, 'base64url').toString())).toMatchObject({ iss: '123' })
  })

  it('asks for an installation token limited to the repository, and reuses it', async () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 })
    const calls: { url: string; body?: string }[] = []
    vi.stubGlobal('fetch', async (input: string, init?: RequestInit) => {
      calls.push({ url: input, body: init?.body as string })
      if (input.endsWith('/repos/acme/site/installation')) return Response.json({ id: 42 })
      if (input.endsWith('/app/installations/42/access_tokens')) {
        return Response.json({
          token: 'ghs_installation',
          expires_at: new Date(Date.now() + 3600_000).toISOString(),
        })
      }
      return Response.json({ auth: new Headers(init?.headers).get('Authorization') })
    })
    const gateway = createGateway({
      identity: testIdentity() as IdentityProvider,
      github: {
        repo: 'acme/site',
        appId: 123,
        privateKey: privateKey.export({ format: 'pem', type: 'pkcs1' }) as string,
      },
      sessionSecret: SECRET,
    })
    const { result } = await (async () => {
      const start = await gateway.fetch(new Request(`${SITE}/auth`))
      const location = new URL(start.headers.get('Location')!)
      const callback = await gateway.fetch(
        new Request(`${SITE}/callback?code=x&state=${location.searchParams.get('state')}`, {
          headers: { Cookie: start.headers.get('Set-Cookie')!.split(';')[0] },
        }),
      )
      const message = JSON.parse(
        (await callback.text()).match(/const message = (".*?");/)![1],
      ) as string
      return { result: JSON.parse(message.replace(/^authorization:github:success:/, '')) }
    })()
    const call = () =>
      gateway.fetch(
        new Request(`${SITE}/api/repos/acme/site`, {
          headers: { Authorization: `token ${result.token}` },
        }),
      )
    expect(await (await call()).json()).toMatchObject({ auth: 'Bearer ghs_installation' })
    await call()
    expect(calls.filter((c) => c.url.includes('access_tokens'))).toHaveLength(1)
    expect(JSON.parse(calls.find((c) => c.url.includes('access_tokens'))!.body!)).toEqual({
      repositories: ['site'],
      permissions: { contents: 'write', pull_requests: 'write' },
    })
  })
})
