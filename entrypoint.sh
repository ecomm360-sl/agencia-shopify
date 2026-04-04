#!/bin/sh
# Start Node.js Astro server on internal port (nginx proxies 80 → 4321)
HOST=127.0.0.1 PORT=4321 node dist/server/entry.mjs &

# Start nginx in foreground (reverse proxy with gzip on port 80)
nginx -g 'daemon off;'
