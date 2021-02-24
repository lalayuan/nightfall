FROM node:14.15

ARG NPM_TOKEN

WORKDIR /app

COPY ./package.json ./.npmrc ./package-lock.json ./
RUN npm ci
RUN rm -f .npmrc

EXPOSE 80
CMD npm start
