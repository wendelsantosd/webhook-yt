FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm -g install pnpm --force

RUN cd /app/ && pnpm install

CMD [ "pnpm", "start" ]
