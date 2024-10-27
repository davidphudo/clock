// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;
import { WinstonTransport } from '@axiomhq/winston';

const {
  AXIOM_DATASET,
  AXIOM_TOKEN,
  AXIOM_ORG_ID
} = process.env;

// tslint:disable-next-line:no-shadowed-variable
const myFormat = printf(({ level, message, timestamp }: any) => {
  return `${timestamp} ${level}: ${message}`;
});

const configuredTransports: any = [
  new transports.Console({
    level: 'debug'
  }),
];

if (AXIOM_TOKEN !== undefined) {
  configuredTransports.push(new WinstonTransport({
    token: AXIOM_TOKEN ? AXIOM_TOKEN.trim() : '',
    dataset: AXIOM_DATASET ? AXIOM_DATASET.trim() : '',
    orgId: AXIOM_ORG_ID ? AXIOM_ORG_ID.trim() : ''
  }));
}

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  defaultMeta: {
    service: `clock`
  },
  transports: configuredTransports
});

export default logger;