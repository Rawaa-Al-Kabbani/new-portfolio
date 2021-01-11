FROM node:14.15.4 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.9-alpine
WORKDIR /data/nginx/cache
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx.conf.template /nginx.conf.template
CMD /bin/sh -c "envsubst '\$API_BASE_URL \$API_HOST \$PORT \$RESOLVER' < /nginx.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
