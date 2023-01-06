import * as express from 'express';
import * as bodyParser from 'body-parser';
import UserController from './controller/user.controller';
import LoginValidation from './midllewares/user'

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    const userController = new UserController();
    const loginMiddle = new LoginValidation();
    this.config();
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.get('/users', loginMiddle.LoginValidation, userController.login);
    this.app.get('/validate', loginMiddle.validateAuth, userController.validate);
  }
  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App();