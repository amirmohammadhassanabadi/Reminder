require("dotenv").config();
const logger = require("pino")();

logger.info(process.env.Port)