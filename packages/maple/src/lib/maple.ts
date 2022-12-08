/* eslint-disable @typescript-eslint/no-unused-vars */
import * as express from 'express';
import { Express, Request, Response } from 'express';
import resolveCwd = require('resolve-cwd');
import { createLogger } from '@maple/logger';
import {} from '@maple/database';
import {} from '@maple/utils';

export class Maple {
  constructor(_opt: Record<string, unknown> = {}) {
    createLogger({}).log('INFO', 'Maple starting');
  }

  start() {
    const app: Express = express();
    const port = 3000;
    const buildPath = resolveCwd('@maple/admin/admin-ui/index.html').replace(
      'index.html',
      ''
    );

    app.use('/admin', express.static(buildPath));

    const rootRouter = express.Router();
    /*
     * all your other routes go here
     */

    rootRouter.get('(/*)?', async (req, res, next) => {
      res.sendFile(resolveCwd('@maple/admin/admin-ui/index.html'));
    });
    app.use('/admin', rootRouter);
    app.get('/', (_req: Request, res: Response) => {
      res.send('Maple!');
    });
    app.listen(port, () => {
      createLogger({}).log('info', `Maple listening on port ${port}`);
    });
  }
}

export const maple = (options: {} | undefined) => new Maple(options);
