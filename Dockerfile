FROM node:15-alpine
WORKDIR /app/
VOLUME [ "/app/" ]
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start:prod" ]