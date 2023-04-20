FROM node:18.15-alpine3.17 as builder

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

CMD ["node", "-r", "dotenv/config", "build"]