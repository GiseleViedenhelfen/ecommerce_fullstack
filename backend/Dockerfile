FROM node:16.14-alpine
WORKDIR /backend
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3001
RUN npx tsc
CMD ["npm", "start"]