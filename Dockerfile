FROM node:18-alpine AS builder
WORKDIR /app

# Add this environment variable to fix the OpenSSL issue
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 8080
# Add this environment variable to the runner as well
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8080

CMD ["node", "server.js"]