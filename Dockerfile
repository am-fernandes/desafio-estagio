FROM node:14-slim

RUN apt-get update && apt-get upgrade -y

WORKDIR /app/www/

COPY ./api .

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]