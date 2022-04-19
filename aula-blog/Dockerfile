FROM node:lts-alpine AS build

WORKDIR /srv/app

COPY . .

RUN apk add -vu \
   curl \
   alpine-sdk

RUN npm install

RUN npm install -g \
   nodemon \
   knex

#o nodemom fica observando o "index", caso ocorra alguma alteração  ele reinicia o javascritp para não ter que reiniciar o docker completo.
CMD ["nodemon", "index"]

FROM node:lts-alpine AS release

WORKDIR /srv/app

COPY --from=build /srv/app .

RUN adduser -DH unprivileged

USER unprivileged

CMD ["node", "index"]
