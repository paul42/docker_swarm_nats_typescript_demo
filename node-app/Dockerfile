FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json .
COPY . /usr/src/app
RUN npm install
RUN npm run prestart
CMD [ "npm","start" ]