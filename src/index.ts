import dotenv from 'dotenv';
dotenv.config();

import logger from './logger'

const {
  MESSAGE
} = process.env;

logger.info('Version 0.2.0.');

setInterval(() => {
  logger.info(`${MESSAGE}: ${new Date()}`)
}, 60000)