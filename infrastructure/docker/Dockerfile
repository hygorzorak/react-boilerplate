##
## Base
##
FROM node:18.12.0 AS base

USER node
RUN mkdir -p /home/node/
WORKDIR /home/node/

##
## Build dependencies
##
FROM base AS build
COPY --chown=node ./ ./

RUN npm install
RUN npm run build

EXPOSE 3001