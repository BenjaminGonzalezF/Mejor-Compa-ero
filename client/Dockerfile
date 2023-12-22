FROM node:18-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "client"]