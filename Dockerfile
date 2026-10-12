FROM node:20-bullseye AS builder
USER node
WORKDIR /home/node
COPY --chown=node:node package*.json .npmrc ./
COPY --chown=node:node patches ./patches
RUN npm ci
COPY --chown=node:node . .
RUN npx prisma generate && npm run build

FROM node:20-bullseye
ENV NODE_ENV=production
USER node
WORKDIR /home/node
COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules ./node_modules
COPY --from=builder --chown=node:node /home/node/dist ./dist
COPY --from=builder --chown=node:node /home/node/public ./public
COPY --from=builder --chown=node:node /home/node/prisma ./prisma
EXPOSE 3000
CMD ["node", "dist/src/main.js"]
