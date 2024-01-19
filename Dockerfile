FROM node:18

WORKDIR /my-app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm","start" ]