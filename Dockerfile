FROM node:12.16.1-stretch
LABEL maintainer="Rami Serapian"

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /www/var
COPY . /www/var

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]
