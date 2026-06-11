FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/
RUN pnpm install --filter frontend...
COPY frontend ./frontend/
RUN cd frontend && pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/frontend/public ./frontend/public
COPY --from=builder /app/frontend/.next/standalone ./frontend/
COPY --from=builder /app/frontend/.next/static ./frontend/.next/static
EXPOSE 3000
CMD ["node", "frontend/server.js"]
