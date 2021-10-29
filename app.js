const express = require("express");
const mongoose = require("mongoose");
const config = require("./lib/config");

const app = express();
mongoose.connect(config.mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
app.use(express.json());
app.use("/api/v1", require("./controllers"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Local http://localhost:${port}/`));
