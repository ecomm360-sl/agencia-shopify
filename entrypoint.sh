#!/bin/sh
# Override any external PORT/HOST (e.g. Easypanel sets PORT=80)
# Node listens internally on 4321, nginx proxies 80 → 4321
export HOST=127.0.0.1
export PORT=4321

# Start Node.js Astro server in background
node dist/server/entry.mjs &

# Start nginx in foreground (reverse proxy with gzip on port 80)
nginx -g 'daemon off;'
