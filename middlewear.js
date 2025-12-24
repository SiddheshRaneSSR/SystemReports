const { httpRequestDuration } = require("./metrics");

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer({
    method: req.method,
    route: req.path
  });

  res.on("finish", () => {
    end({ status: res.statusCode });
  });

  next();
});

