FROM node:latest AS build
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install
CMD ["npm", "run","build"]

 
