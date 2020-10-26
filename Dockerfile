FROM node:14-slim

RUN apt-get update && apt-get upgrade -y

WORKDIR /app/www/

COPY . .

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]