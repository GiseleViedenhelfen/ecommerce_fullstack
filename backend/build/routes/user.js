"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
class UserRouter {
    constructor(controller) {
        this.controller = controller;
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.post('/users', (req, res) => {
            this.controller.getUser(req, res);
        });
    }
}
const userController = new user_controller_1.default();
const userRoutes = new UserRouter(userController);
exports.default = userRoutes.router;
//# sourceMappingURL=user.js.map