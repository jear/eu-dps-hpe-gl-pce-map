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


# Stage 1 - Build the app
#FROM node:18.17.0-alpine
#WORKDIR /app
#COPY package*.json ./
#RUN npm install -g npm@10.5.0
#COPY . .
#RUN npm run build
#
# Stage 2 - Create a new image with the build files
#FROM nginx:1.21.0-alpine
#COPY --from=0 /app/out /usr/share/nginx/html
