FROM node:14.15.5
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm","start"]
