import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserController from './controller/user.controller';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    const userController = new UserController();
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.get('/users', userController.getUser);
  }
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();