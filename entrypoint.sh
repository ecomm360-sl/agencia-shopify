#!/bin/sh
# Start Node.js Astro server in background
node dist/server/entry.mjs &

# Start nginx in foreground (reverse proxy with gzip)
nginx -g 'daemon off;'
