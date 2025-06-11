FROM node:20-bullseye as builder
ENV NODE_ENV build
USER node
WORKDIR /home/node
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY --chown=node:node . .
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

FROM node:20-bullseye
ENV NODE_ENV production
USER node
WORKDIR /home/node
COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
CMD ["node", "dist/src/main.js"]