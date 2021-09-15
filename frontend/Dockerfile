FROM node:alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY ./src ./src
COPY ./public ./public

EXPOSE 3000

CMD ["npm", "start"]