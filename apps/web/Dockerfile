FROM node:20.0-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/code

COPY ../../dist/apps/web/ ./

RUN npm install glob rimraf

RUN npm install

RUN echo 'alias ng="npx ng"' >> ~/.bashrc

COPY . .

# SSR execution
CMD ["node", "dist/src/main"]
