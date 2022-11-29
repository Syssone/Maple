import { maple } from './lib/maple';
import resolveCwd = require('resolve-cwd');
import { Logger } from '@maple/logger';

Logger(resolveCwd('@maple/utils'));
maple({ port: 3000 }).start();
