require("dotenv").config();
const logger = require("pino")();
const express = require("express");
const mongoose = require("mongoose");

// .env variables
const Port = process.env.PORT || 4000;
const Database_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/reminder";

// Creating App
const app = express();

// Database Connection - Creating server
mongoose.connect(Database_url).then(() => {
  app.listen(Port, () => {
    logger.info(`Server is running on port ${Port}`);
  });
});
