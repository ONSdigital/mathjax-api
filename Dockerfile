FROM node:4

WORKDIR /usr/mathjax

RUN npm install https://github.com/carlhuk/mathjax-api/tarball/master

EXPOSE 8010
CMD ["node", "mathjax-api/app.js"]

