FROM node:current-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
USER 1000:1000
CMD [ "npm", "start"]