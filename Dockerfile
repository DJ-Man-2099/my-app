# Builder Image
FROM node:alpine AS builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

#NGINX Server Image
FROM nginx
COPY --from=builder /app/.next /usr/share/nginx/html/_next
COPY ./public /usr/share/nginx/html/public
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
