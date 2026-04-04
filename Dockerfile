# Stage 1: Build
FROM node:24-alpine AS build
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY astro.config.mjs tsconfig.json ./
COPY src/ src/
COPY public/ public/
COPY brand/ brand/

# Build
RUN npx astro build

# Stage 2: Production runtime
FROM node:24-alpine AS runtime
WORKDIR /app

# Install nginx for reverse proxy with gzip
RUN apk add --no-cache nginx

# Copy package files and install production deps only
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile --prod

# Copy built output (server + static assets)
COPY --from=build /app/dist ./dist

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Startup script: run Node + nginx
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 80

CMD ["/entrypoint.sh"]
