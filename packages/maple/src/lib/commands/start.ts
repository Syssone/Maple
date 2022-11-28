import { maple } from '../index';

/**
 * `$ maple start`
 */
module.exports = async () => {
  const appDir = process.cwd();

  return maple({ appDir }).start();
};
