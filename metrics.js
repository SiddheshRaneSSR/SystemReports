const client = require("prom-client");

// Default Node metrics (CPU, memory, event loop)
client.collectDefaultMetrics();

const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request latency",
  labelNames: ["method", "route", "status"],
  buckets: [0.1, 0.3, 0.5, 1, 2, 5]
});

module.exports = {
  client,
  httpRequestDuration
};

