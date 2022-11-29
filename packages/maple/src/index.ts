import { maple } from './lib/maple';
import {} from '@maple/utils';
import resolveCwd = require('resolve-cwd');

console.log(resolveCwd('@maple/utils/index.html'));
maple({ port: 3000 }).start();
