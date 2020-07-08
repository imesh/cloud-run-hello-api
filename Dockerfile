FROM node:12-slim
ADD server.js /app/
WORKDIR app/
CMD node server.js
