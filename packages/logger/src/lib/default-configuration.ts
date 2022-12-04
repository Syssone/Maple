import { transports } from 'winston';
import { LEVEL_LABEL, LEVELS } from './constants';
import { prettyPrint } from './formats';

export const createDefaultConfiguration = () => {
  return {
    level: LEVEL_LABEL,
    levels: LEVELS,
    format: prettyPrint(),
    transports: [new transports.Console()],
  };
};
