# STAGE 1
FROM node:10-alpine as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm config set unsafe-perm true
RUN npm install -g typescript
RUN npm install -g ts-node
USER node
RUN npm install
COPY --chown=node:node . .
RUN npm run build

# STAGE 2
FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install --production
COPY --from=builder /home/node/app/build ./build

COPY --chown=node:node .env .
COPY --chown=node:node  /config ./config
COPY --chown=node:node  /public ./public
COPY --chown=node:node  .sequelizerc-prod .sequelizerc

RUN npm install -g sequelize-cli
RUN sequelize db:migrate

EXPOSE 3010
CMD [ "node", "build/server.js" ]