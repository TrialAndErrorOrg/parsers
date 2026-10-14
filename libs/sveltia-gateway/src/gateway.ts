import { randomString } from './encoding.js'
import { type GitHubCredentials, githubTokens } from './github.js'
import type { Editor, IdentityProvider } from './identity.js'
import { popupResponse } from './popup.js'
import { checkGraphql, checkRest, type Rules } from './rules.js'
import { seal, unseal } from './signed.js'

export interface GatewayOptions {
  /** Who editors are: `entra()`, `google()`, `oidc()` or, locally, `testIdentity()` */
  identity: IdentityProvider
  /** The content repository and how to reach it */
  github: GitHubCredentials & {
    /** `owner/name` */
    repo: string
    /** For GitHub Enterprise Server. Defaults to `https://api.github.com` */
    apiRoot?: string
  }
  /** At least 32 random characters. Signs sessions and sign-in attempts */
  sessionSecret: string
  /** Where the gateway's routes live, e.g. `/admin` for `/admin/auth`. Defaults to the root */
  basePath?: string
  /** Branches editors may commit to. Defaults to `main` plus `cms/**`, the editorial workflow's branches */
  branches?: string[]
  /** Paths editors may change, e.g. `["content/**", "static/uploads/**"]`. Any path if left out */
  paths?: string[]
  /** Refuse every write. For trying the gateway out */
  readOnly?: boolean
  /** Allow the CMS to trigger a deploy through `repository_dispatch`. Defaults to true */
  dispatches?: boolean
  /** How long a sign-in lasts, in seconds. Defaults to 8 hours */
  sessionTtl?: number
  /**
   * Origins of the sites whose CMS may use this gateway, e.g.
   * `["https://example.org"]`. Only needed when the gateway runs elsewhere
   * than the CMS (say, on a Worker). The gateway's own origin is always allowed.
   */
  allowedOrigins?: string[]
  /** The gateway's public URL, when it can't be told from the request (behind some proxies) */
  publicUrl?: string
  /** Called with every refused request and failed sign-in, e.g. for logging */
  onRefused?: (reason: string, request: Request) => void
}

export interface Gateway {
  /** Handle a request. Answers 404 for paths outside the gateway */
  fetch(request: Request): Promise<Response>
  /** Whether a request is for one of the gateway's routes */
  handles(request: Request): boolean
}

const ATTEMPT_COOKIE = 'sveltia-gateway-attempt'

interface Attempt {
  state: string
  nonce: string
  codeVerifier: string
}

export function createGateway(options: GatewayOptions): Gateway {
  if (!options.sessionSecret || options.sessionSecret.length < 32)
    throw new Error('sessionSecret must be at least 32 characters')
  const base = (options.basePath ?? '').replace(/\/$/, '')
  const apiRoot = (options.github.apiRoot ?? 'https://api.github.com').replace(/\/$/, '')
  const tokens = githubTokens(options.github, options.github.repo, apiRoot)
  const rules: Rules = {
    repo: options.github.repo,
    branches: options.branches ?? ['main', 'cms/**'],
    paths: options.paths,
    readOnly: options.readOnly ?? false,
    dispatches: options.dispatches ?? true,
  }
  const ttl = options.sessionTtl ?? 8 * 60 * 60
  const secret = options.sessionSecret

  const publicOrigin = (request: Request) => new URL(options.publicUrl ?? request.url).origin
  const allowedOrigins = (request: Request) => [
    publicOrigin(request),
    ...(options.allowedOrigins ?? []).map((o) => new URL(o).origin),
  ]
  const callbackUrl = (request: Request) => `${publicOrigin(request)}${base}/callback`
  const refuse = (reason: string, request: Request, status = 403) => {
    options.onRefused?.(reason, request)
    return json({ message: reason }, status)
  }

  const route = (request: Request) => {
    const path = new URL(request.url).pathname
    if (base && path !== base && !path.startsWith(`${base}/`)) return undefined
    return path.slice(base.length) || '/'
  }

  async function signIn(request: Request) {
    const attempt: Attempt = {
      state: randomString(),
      nonce: randomString(),
      codeVerifier: randomString(48),
    }
    const url = await options.identity.authorizationUrl({
      ...attempt,
      redirectUri: callbackUrl(request),
    })
    return new Response(null, {
      status: 302,
      headers: {
        Location: url,
        'Cache-Control': 'no-store',
        'Set-Cookie': cookie(
          ATTEMPT_COOKIE,
          await seal(secret, attempt, 10 * 60),
          base || '/',
          request,
          10 * 60,
        ),
      },
    })
  }

  async function callback(request: Request) {
    const url = new URL(request.url)
    const attempt = await unseal<Attempt>(secret, readCookie(request, ATTEMPT_COOKIE))
    const clear = cookie(ATTEMPT_COOKIE, '', base || '/', request, 0)
    const code = url.searchParams.get('code')
    const fail = (reason: string) => {
      options.onRefused?.(reason, request)
      const response = popupResponse({ error: reason }, allowedOrigins(request))
      response.headers.append('Set-Cookie', clear)
      return response
    }

    if (url.searchParams.get('error'))
      return fail(url.searchParams.get('error_description') ?? url.searchParams.get('error')!)
    if (!code || !attempt || url.searchParams.get('state') !== attempt.state)
      return fail('The sign-in expired or was started elsewhere. Please try again.')
    let editor: Editor
    try {
      editor = await options.identity.finish(code, {
        ...attempt,
        redirectUri: callbackUrl(request),
      })
    } catch (error) {
      return fail(error instanceof Error ? error.message : 'Sign-in failed')
    }
    const response = popupResponse(
      { token: await seal(secret, { editor }, ttl) },
      allowedOrigins(request),
    )
    response.headers.append('Set-Cookie', clear)
    return response
  }

  async function api(request: Request, path: string) {
    const cors = corsHeaders(request, allowedOrigins(request))
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })
    const withCors = (response: Response) => {
      for (const [name, value] of Object.entries(cors)) response.headers.set(name, value)
      return response
    }

    const token = request.headers.get('Authorization')?.replace(/^(token|bearer)\s+/i, '')
    const session = await unseal<{ editor: Editor }>(secret, token)
    if (!session) return withCors(refuse('Not signed in, or the sign-in has expired', request, 401))
    const { editor } = session

    // Sveltia calls a custom api_root the way it calls GitHub Enterprise: REST under /v3
    path = path.replace(/^\/v3(?=\/|$)/, '')

    // Who is signed in. Sveltia puts the name in commit messages
    if (path === '/user') {
      return withCors(
        json({
          id: editor.id,
          login: editor.email ?? editor.id,
          name: editor.name,
          email: editor.email ?? null,
          avatar_url: null,
          html_url: null,
          type: 'User',
          bot: false,
        }),
      )
    }
    // Invitations belong to GitHub accounts, which editors don't have
    if (path === '/user/repository_invitations') return withCors(json([]))

    const body =
      request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.text()
    let parsed: unknown
    try {
      parsed = body ? JSON.parse(body) : undefined
    } catch {
      return withCors(refuse('Malformed request body', request, 400))
    }
    const reason =
      path === '/graphql'
        ? checkGraphql(rules, parsed)
        : checkRest(rules, request.method, path, parsed)
    if (reason) return withCors(refuse(reason, request))

    const upstream = await fetch(`${apiRoot}${path}${new URL(request.url).search}`, {
      method: request.method,
      body,
      headers: {
        Authorization: `Bearer ${await tokens.token()}`,
        Accept: request.headers.get('Accept') ?? 'application/vnd.github+json',
        'Content-Type': request.headers.get('Content-Type') ?? 'application/json',
        'User-Agent': 'sveltia-gateway',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    const headers = new Headers()
    for (const name of [
      'content-type',
      'etag',
      'last-modified',
      'link',
      'x-ratelimit-remaining',
      'x-ratelimit-reset',
    ]) {
      const value = upstream.headers.get(name)
      if (value) headers.set(name, value)
    }
    headers.set('Cache-Control', 'no-store')
    return withCors(new Response(upstream.body, { status: upstream.status, headers }))
  }

  return {
    handles: (request) => route(request) !== undefined,
    async fetch(request) {
      const path = route(request)
      if (path === '/auth' && request.method === 'GET') return signIn(request)
      if (path === '/callback' && request.method === 'GET') return callback(request)
      if (path === '/api' || path?.startsWith('/api/')) return api(request, path.slice(4))
      return new Response('Not found', { status: 404 })
    },
  }
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })

function corsHeaders(request: Request, allowed: string[]): Record<string, string> {
  const origin = request.headers.get('Origin')
  if (!origin || !allowed.includes(origin)) return {}
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type, Accept',
    'Access-Control-Max-Age': '600',
    Vary: 'Origin',
  }
}

function readCookie(request: Request, name: string) {
  for (const part of request.headers.get('Cookie')?.split(';') ?? []) {
    const [key, ...value] = part.trim().split('=')
    if (key === name) return decodeURIComponent(value.join('='))
  }
  return undefined
}

function cookie(name: string, value: string, path: string, request: Request, maxAge: number) {
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : ''
  return `${name}=${encodeURIComponent(value)}; Path=${path}; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`
}
