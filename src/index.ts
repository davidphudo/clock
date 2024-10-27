import dotenv from 'dotenv';
dotenv.config();

import logger from './logger'

const {
  MESSAGE
} = process.env;

setInterval(() => {
  logger.info(`${MESSAGE}: ${new Date()}`)
}, 1000)