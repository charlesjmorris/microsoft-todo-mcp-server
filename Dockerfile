FROM node:20-slim
WORKDIR /app
COPY package*.json tsconfig.json tsup.config.ts ./
COPY src/ ./src/
RUN npm install
RUN npm run build
RUN npm install -g supergateway
EXPOSE 3000
CMD ["supergateway", "--stdio", "node /app/dist/cli.js", "--port", "3000"]
