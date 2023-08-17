FROM node:alpine

WORKDIR /usr/app

COPY . /usr/app

RUN npm i

RUN npm start