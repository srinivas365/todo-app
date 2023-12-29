FROM node:16

# Create app directory
WORKDIR /srv/todo-app

COPY package.json ./

RUN npm install

COPY . .

CMD ["node","app.js"]

EXPOSE 3000
