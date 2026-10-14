import { createGateway, entra } from 'sveltia-gateway'

/*
 * The gateway on its own Worker, for a CMS hosted anywhere else. Secrets
 * (wrangler secret put): ENTRA_CLIENT_SECRET, GITHUB_APP_PRIVATE_KEY,
 * SESSION_SECRET. The rest is in wrangler.toml.
 */

interface Env {
  ENTRA_TENANT_ID: string
  ENTRA_CLIENT_ID: string
  ENTRA_CLIENT_SECRET: string
  GITHUB_APP_ID: string
  GITHUB_APP_PRIVATE_KEY: string
  REPO: string
  SESSION_SECRET: string
  /** Comma-separated origins of the sites whose CMS uses this Worker */
  ALLOWED_ORIGINS: string
}

let gateway: ReturnType<typeof createGateway> | undefined

export default {
  fetch(request: Request, env: Env) {
    gateway ??= createGateway({
      identity: entra({
        tenantId: env.ENTRA_TENANT_ID,
        clientId: env.ENTRA_CLIENT_ID,
        clientSecret: env.ENTRA_CLIENT_SECRET,
      }),
      github: { repo: env.REPO, appId: env.GITHUB_APP_ID, privateKey: env.GITHUB_APP_PRIVATE_KEY },
      sessionSecret: env.SESSION_SECRET,
      allowedOrigins: env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()),
    })
    return gateway.fetch(request)
  },
}
