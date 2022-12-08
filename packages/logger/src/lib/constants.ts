import { config } from 'winston';

export const LEVELS = config.npm.levels;
export const LEVEL_LABEL = 'silly';
export const LEVEL = LEVELS[LEVEL_LABEL];
