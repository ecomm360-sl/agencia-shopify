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

# Copy built output (server + static assets)
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80

CMD ["node", "dist/server/entry.mjs"]
