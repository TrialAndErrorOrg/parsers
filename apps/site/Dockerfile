# Packaging only. CI (.github/workflows/site.yml) builds the site and runs
# `pnpm --filter site deploy --prod <dir>`, which leaves the built site with
# just its production dependencies. This image copies that directory in, so
# it builds in seconds and holds no source or build tools.
#
# Locally, the same: pnpm turbo run build --filter=site...
#                    pnpm --filter site deploy --prod --legacy /tmp/site
#                    docker build -f apps/site/Dockerfile /tmp/site
# then run `pnpm install` again: the deploy leaves the workspace's own install
# marked as production-only.
FROM node:24-slim
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4321
WORKDIR /app
COPY --chown=node:node . .
USER node
EXPOSE 4321
CMD ["node", "dist/server/entry.mjs"]
