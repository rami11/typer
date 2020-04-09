FROM node:12.16.1

LABEL maintainer="Rami Serapian"

ENV NODE_ENV=production \
    PORT=8080

RUN apt-get update && \
    apt-get install vim -y \
    rm -rf /var/lib/apt/lists/*

WORKDIR /var/www

COPY package.json .
RUN npm install

COPY . .

EXPOSE $PORT

ENTRYPOINT ["npm"]
CMD ["start"]
