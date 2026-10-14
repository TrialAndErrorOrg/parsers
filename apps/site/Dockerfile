# Packaging only. CI (.github/workflows/site.yml) builds the site and runs
# `pnpm --filter site deploy --prod <dir>`, which leaves the built site with
# just its production dependencies. This image copies that directory in, so
# it builds in seconds and holds no source or build tools.
#
# Production dependencies are only what the server loads at runtime: Astro
# bundles itself into dist/server, so astro and everything used only while
# building are devDependencies in package.json. A package the server imports
# has to be a dependency, or the image fails CI's smoke test.
#
# The base is Alpine, so the packages with native code (sharp, varlock) need
# their musl builds, which pnpm only installs when asked:
#
# Locally, the same: pnpm turbo run build --filter=site...
#                    pnpm --filter site deploy --prod --legacy --os=linux --cpu=x64 --libc=musl /tmp/site
#                    docker build --platform linux/amd64 -f apps/site/Dockerfile /tmp/site
# then run `pnpm install` again: the deploy leaves the workspace's own install
# marked as production-only.
#
# The image holds no secrets. It starts the server through varlock, which reads
# them from 1Password (.env.schema) with the OP_TOKEN it is given.
FROM node:24-alpine
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4321
WORKDIR /app
COPY --chown=node:node . .
USER node
EXPOSE 4321
# Node asks, so the check doesn't depend on what the base image ships
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s \
  CMD ["node", "-e", "fetch('http://127.0.0.1:4321/').then(r=>process.exit(r.ok?0:1),()=>process.exit(1))"]
CMD ["node_modules/.bin/varlock", "run", "--", "node", "dist/server/entry.mjs"]
