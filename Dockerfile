# Builder
FROM node:14.17.5-alpine AS build

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ./package* ./

RUN NODE_ENV=development npm install && npm cache clean --force

COPY . .

RUN npm run build

# Runtime

FROM nginx:alpine AS runtime

COPY docker/nginx/default.conf /etc/nginx/conf.d

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
