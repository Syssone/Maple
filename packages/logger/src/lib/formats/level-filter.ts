import { format } from 'winston';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const levelFilter = (...levels: any[]) => {
  return format((info) =>
    levels.some((level) => info.level.includes(level)) ? info : false
  )();
};
