FROM node:18.20.0 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install .

EXPOSE 3000

CMD ["npm", "run", "start"]
