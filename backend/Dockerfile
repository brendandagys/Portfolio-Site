FROM node:14.17-alpine
WORKDIR /usr/src/backend
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY ./dist ./dist
EXPOSE 5000
CMD ["node", "dist/server.js"]