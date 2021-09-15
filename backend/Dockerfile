FROM node:alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY ./dist ./dist

EXPOSE 5000

CMD ["node", "dist/server.js"]