import { format } from 'winston';

export const logErrors = format((info) => {
  if (info instanceof Error) {
    return {
      ...info,
      message: `${info.message}${info.stack ? `\n${info.stack}` : ''}`,
    };
  }

  return info;
});
