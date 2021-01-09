FROM node:10.16.0 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.9-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
