FROM node:22-alpine AS base
RUN apk add --no-cache openssl
WORKDIR /app

FROM base AS build
# stub, without `DATABASE_URL` Prisma fails to `prebuild`
ARG DATABASE_URL=postgresql://usr:pwd@localhost:5432/db
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runtime
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY --from=build /app/dist ./dist
COPY scripts/docker-entrypoint.sh ./
USER node
EXPOSE 3000
CMD ["sh", "docker-entrypoint.sh"]