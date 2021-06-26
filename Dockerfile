# BUILD
FROM node:14-alpine AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# RUN
FROM node:14-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/src/app/dist ./dist
COPY swagger.yaml ./dist
COPY .env ./dist

EXPOSE 8000

CMD ["npm start"]