FROM node:4.8.1

WORKDIR /src
ADD . /src

RUN npm install
EXPOSE 8080

CMD ["node","app.js"]

