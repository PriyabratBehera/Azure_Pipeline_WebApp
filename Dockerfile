FROM node:24-alpine

WORKDIR /app

COPY backend/package*.json ./backend/

RUN cd backend && npm install --omit=dev

COPY backend ./backend
COPY frontend ./frontend

ENV APP_ENV=Docker
ENV SERVER_NAME="Docker Container"

EXPOSE 5000

CMD ["node", "backend/server.js"]