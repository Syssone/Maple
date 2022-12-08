import * as winston from 'winston';

export * as formats from './formats';
import { createDefaultConfiguration } from './default-configuration';

// export * as winston from 'winston';
export const createLogger = (userConfiguration = {}) => {
  const configuration = createDefaultConfiguration();

  Object.assign(configuration, userConfiguration);

  return winston.createLogger(configuration);
};
