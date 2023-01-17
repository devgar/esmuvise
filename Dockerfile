FROM gplane/pnpm:7.25.0-node18-bullseye

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm i

COPY . .
RUN pnpm run build

EXPOSE 3000
CMD [ "node", "frontend/.output/server/index.mjs"]
