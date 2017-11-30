FROM node:latest
RUN npm install webpack -g
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN webpack
ENV PORT=4000
CMD [ “/usr/local/bin/node/output”, “./myCode.js” ]
EXPOSE 4000
