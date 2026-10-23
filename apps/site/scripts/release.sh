#!/usr/bin/env bash
# What .github/workflows/site.yml does, on this machine: build the site, package it, build the
# image, smoke test it, push it to ghcr.io and have Coolify deploy it. For when CI can't, such
# as from a branch other than main.
#
#   apps/site/scripts/release.sh              # all of it
#   apps/site/scripts/release.sh --no-deploy  # build, test and push, leave the running site alone
#   apps/site/scripts/release.sh --local      # only build and test the image
#
# Needs Docker, the 1Password app (the build's secrets and Coolify's deploy token) and, to push,
# `docker login ghcr.io` with a GitHub token that has write:packages. It pulls site-content first,
# from beside this repository or from CONTENT_DIR (relative to apps/site, as for `pnpm dev`).
set -euo pipefail

push=true
deploy=true
for arg in "$@"; do
	case $arg in
		--no-deploy) deploy=false ;;
		--local) push=false deploy=false ;;
		*) echo "Unknown option: $arg" >&2 && exit 1 ;;
	esac
done

image=ghcr.io/trialanderrororg/site
site=$(cd "$(dirname "$0")/.." && pwd)
root=$(cd "$site/../.." && pwd)
content=$(cd "$site" && cd "${CONTENT_DIR:-../../../site-content}" && pwd)

tag=$(git -C "$root" rev-parse HEAD)
if [ -n "$(git -C "$root" status --porcelain)" ]; then
	echo "Uncommitted changes go into this build, so it's tagged $tag-dirty"
	tag=$tag-dirty
fi

echo "› Pulling site-content ($content)"
git -C "$content" pull --ff-only

cd "$root"
echo "› Building"
pnpm install --frozen-lockfile
pnpm turbo run build --filter=site...

echo "› Packaging"
package=$(mktemp -d)
# pnpm deploy leaves the workspace's own install marked production-only, so put it back after
trap 'rm -rf "$package"; echo "› Restoring the workspace install"; (cd "$root" && pnpm install --frozen-lockfile >/dev/null)' EXIT
pnpm --filter site deploy --prod --legacy --os=linux --cpu=x64 --libc=musl "$package/site"

echo "› Building the image"
docker build "$package/site" -f apps/site/Dockerfile --platform linux/amd64 \
	--label org.opencontainers.image.source=https://github.com/TrialAndErrorOrg/trialanderror \
	--label org.opencontainers.image.revision="$tag" \
	-t "$image:latest" -t "$image:$tag"

echo "› Smoke test"
"$site/scripts/smoke-test.sh" "$image:$tag"

if ! $push; then
	echo "Built $image:$tag, not pushed"
	exit 0
fi
echo "› Pushing"
docker push "$image:$tag"
docker push "$image:latest"

if ! $deploy; then
	echo "Pushed $image:$tag, not deployed"
	exit 0
fi
echo "› Deploying"
# .env.schema only loads the deploy token in CI, so read it here. Set in the environment, it wins
cd "$site"
# shellcheck disable=SC2016 # expanded by the inner shell, after varlock has filled them in
COOLIFY_TOKEN=$(op read --account trialanderror "op://Website/Coolify Website Deploy Token/credential") \
	pnpm exec varlock run -- sh -c 'curl --fail --silent --show-error -H "Authorization: Bearer $COOLIFY_TOKEN" "$COOLIFY_DEPLOY_URL"'
echo
echo "Deployed $image:$tag"
