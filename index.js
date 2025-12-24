require("./tracing"); // must be FIRST
const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./logger.js');
const PORT = process.env.PORT;
const {trace} = require("@opentelemetry/api");
const tracer = trace.getTracer("order-service")

const { client } = require("./metrics");


logger.info("server started",{port:PORT});


app.get("/metrics", async (req, res) => {
  logger.info("in the metrics api");
 res.set("Content-Type", client.register.contentType);
 //const span = tracer.startspan("create-order-metrics");
 //span.end();
  res.end(await client.register.metrics());
});


app.listen(PORT,()=>{
	
	console.log(`server started at port ${PORT}`)

})
