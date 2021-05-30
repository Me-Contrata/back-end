FROM node:15-alpine As development
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM node:15-alpine As prod
WORKDIR /app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /app/dist ./dist
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start:prod" ]
