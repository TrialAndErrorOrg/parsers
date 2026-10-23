#!/bin/sh
# Starts the image and requests every route the server renders itself, so a runtime package
# missing from the image's dependencies fails here instead of on the live site. Run by
# .github/workflows/site.yml and by scripts/release.sh.
#
#   apps/site/scripts/smoke-test.sh ghcr.io/trialanderrororg/site:<tag>
set -eu

image=$1
name=site-smoke-$$
port=${SMOKE_PORT:-4321}

docker run -d --platform linux/amd64 --name "$name" -p "$port:4321" -e ONEPASSWORD=false -e ADMIN_AUTH=microsoft \
	-e ADMIN_SESSION_SECRET="$(openssl rand -hex 32)" "$image" >/dev/null
trap 'status=$?; [ "$status" -eq 0 ] || docker logs "$name"; docker rm -f "$name" >/dev/null' EXIT

# An amd64 image on an ARM Mac runs emulated and starts slower
for _ in $(seq 1 60); do curl -sf -o /dev/null "localhost:$port/" && break; sleep 1; done

expect() {
	status=$(curl -s -o /dev/null -w '%{http_code}' "localhost:$port$2")
	[ "$status" = "$1" ] || { echo "::error::$2 answered $status, expected $1"; exit 1; }
}
expect 200 /
expect 200 /admin/
expect 200 /admin/config.yml
expect 401 /admin/api/v3/user
expect 401 /preview/blog/x
expect 401 /preview/page/x
expect 401 '/api/draft?secret=x&slug=x'
expect 404 /journal/files/x/x.pdf
expect 200 '/_image?href=%2Ffavicon-32x32.png&w=16&h=16&f=webp'
echo "Smoke test passed"
