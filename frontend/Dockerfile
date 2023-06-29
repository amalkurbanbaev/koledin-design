FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn --frozen-lockfile install
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_STRAPI_API_TOKEN="b6a96eb6cafa613a181cb9a064a5eb2c2d1aa04a24d22b8c5d694ca287dbcce678408d907ee74227b2b3c6367071369fd9266bcffc3940f0dec452c10ba8c1e1ed1725d2002b5d5f144e9bd4a0434c2b72647ac15de80d00b41f06094f68afce72ddd5bb3ef30a464ea5553f6e779ee11a1ba1693f083c862dbfeeeda9a1ef3f" NEXT_PUBLIC_PAGE_LIMIT=6 NEXT_PUBLIC_STRAPI_API_URL="http://admin.koledin.com"
RUN yarn build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV NEXT_PUBLIC_STRAPI_API_TOKEN="32a7973e46aa1aa9c100a289e26de38eb274b9fe7ce14ecb5735df248a94f5f7d87b193d2f994be62bad3271e1cc11dba75730dec8d12e787a9dea8f93738bba634169cfeb61f7243658456dd7a62bb29d8c6ea911e6a3851010b4cf69264738c3ccebfc0f6f76f5dbd8651c598cf99dba50265fa8b6eaaa9acbaa2ad345442f" NEXT_PUBLIC_PAGE_LIMIT=6 NEXT_PUBLIC_STRAPI_API_URL="http://admin.koledin.com"

CMD ["node", "server.js"]