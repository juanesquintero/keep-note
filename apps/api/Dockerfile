FROM node:20.0-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/code

COPY ../../dist/apps/api/ ./

RUN npm install --only=prod

CMD ["node", "dist/src/main"]
