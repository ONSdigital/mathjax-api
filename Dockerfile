FROM node:4

WORKDIR /src

COPY . /src
RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]

