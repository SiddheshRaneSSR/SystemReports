const winston = require("winston");
const LokiTransport = require("winston-loki");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new LokiTransport({
      host: "http://loki:3100",
      labels: { app: "node-app" }
    })
  ]
});

module.exports = logger;

