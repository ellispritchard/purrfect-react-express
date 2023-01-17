FROM node:18 as build

WORKDIR /build

COPY package.json package-lock.json .
COPY tsconfig.json .
COPY webpack.config.prod.js postcss.config.js tailwind.config.js .

RUN npm install

COPY client client/
COPY src src/

RUN npm run build:prod

RUN npm install --omit=dev

##
FROM node:alpine3.17 as prod
RUN apk --no-cache add ca-certificates libc6-compat

WORKDIR /app
COPY --from=build /build/node_modules node_modules/
COPY --from=build /build/dist dist/
COPY --from=build /build/public public/

EXPOSE 3000
CMD ["/usr/local/bin/node", "dist/server.js"]
