"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const user_controller_1 = require("./controller/user.controller");
const user_1 = require("./midllewares/user");
class App {
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        const userController = new user_controller_1.default();
        const loginMiddle = new user_1.default();
        this.config();
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.app.get('/users', loginMiddle.LoginValidation, userController.login);
        this.app.get('/validate', loginMiddle.validateAuth, userController.validate);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
exports.app = new App().app;
//# sourceMappingURL=app.js.map