FROM node:latest
WORKDIR /usr/app
COPY package.json package.json
COPY server.json server.json
run npm install
CMD node server.js