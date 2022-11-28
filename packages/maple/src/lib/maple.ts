import * as express from 'express';
import { Express, Request, Response } from 'express';

export class Maple {
  constructor(_opt: Record<string, unknown> = {}) {
    // console.log('Maple');
  }

  start() {
    const app: Express = express();
    const port = 3000;

    app.get('/', (_req: Request, res: Response) => {
      res.send('Maple!');
    });

    app.listen(port, () => {
      console.log(`Maple listening on port ${port}`);
    });
  }
}

export const maple = (options: {} | undefined) => new Maple(options);
