// Try the gateway locally with Sveltia CMS, without an identity provider or a
// GitHub App: everyone is signed in as a test editor, GitHub is reached with
// your own token, and writes are refused.
//
//   pnpm build
//   REPO=owner/name GITHUB_TOKEN=$(gh auth token) node examples/node/server.mjs
//   open http://localhost:8788/admin/

import { createServer } from 'node:http'
import { randomBytes } from 'node:crypto'
import { createGateway, testIdentity } from '../../dist/index.js'

const repo = process.env.REPO
const branch = process.env.BRANCH ?? 'main'
if (!repo || !process.env.GITHUB_TOKEN) throw new Error('Set REPO=owner/name and GITHUB_TOKEN')

const gateway = createGateway({
  identity: testIdentity(),
  github: { repo, token: process.env.GITHUB_TOKEN },
  sessionSecret: randomBytes(32).toString('hex'),
  basePath: '/admin',
  branches: [branch, 'cms/**'],
  readOnly: process.env.READ_ONLY !== 'false',
})

const page = `<!doctype html>
<html><head><meta charset="utf-8"><title>Sveltia gateway test</title>
<link href="/admin/config.yml" type="application/yaml" rel="cms-config-url"></head>
<body><script src="https://unpkg.com/@sveltia/cms@0.227.0/dist/sveltia-cms.js"></script></body></html>`

const config = (origin) => `backend:
  name: github
  repo: ${repo}
  branch: ${branch}
  base_url: ${origin}
  auth_endpoint: admin/auth
  api_root: ${origin}/admin/api
media_folder: ${process.env.MEDIA ?? 'static/uploads'}
collections:
  - name: files
    label: Files
    folder: ${process.env.FOLDER ?? '.'}
    extension: ${process.env.EXTENSION ?? 'md'}
    fields: [{ name: title, label: Title, widget: string }]
`

createServer(async (req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`)
  if (url.pathname === '/admin/' || url.pathname === '/admin')
    return send(res, new Response(page, { headers: { 'Content-Type': 'text/html' } }))
  if (url.pathname === '/admin/config.yml')
    return send(
      res,
      new Response(config(url.origin), { headers: { 'Content-Type': 'application/yaml' } }),
    )

  const body =
    req.method === 'GET' || req.method === 'HEAD'
      ? undefined
      : await new Response(req).arrayBuffer()
  const request = new Request(url, { method: req.method, headers: req.headers, body })
  send(res, await gateway.fetch(request))
}).listen(8788, () => console.log('http://localhost:8788/admin/'))

async function send(res, response) {
  res.writeHead(response.status, Object.fromEntries(response.headers))
  res.end(Buffer.from(await response.arrayBuffer()))
}
