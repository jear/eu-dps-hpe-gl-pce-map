# the lazy version
FROM nginx:alpine
COPY . /usr/share/nginx/html

# Multi-stage build example
#FROM node:14
#
#WORKDIR /app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#FROM nginx:1.29-alpine
#COPY --from=build /app/dist /usr/share/nginx/html
