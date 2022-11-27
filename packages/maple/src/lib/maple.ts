import * as express from 'express';
import { Express, Request, Response } from 'express';

export class Maple {
  constructor(opt = {}) {
    // console.log('Maple');
  }

  start() {
    const app: Express = express();
    const port = 3000;

    app.get('/', (req: Request, res: Response) => {
      res.send('Maple!');
    });

    app.listen(port, () => {
      console.log(`Maple listening on port ${port}`);
    });
  }
}
