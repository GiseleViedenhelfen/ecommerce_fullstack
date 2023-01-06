"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../service/user");
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'jwt_secret';
class UserController {
    constructor(userService = new user_1.default()) {
        this.userService = userService;
        this.login = async (req, res) => {
            const { email, password } = req.body;
            const { authorization } = req.headers;
            console.log(authorization);
            const token = await this.userService.Login(email, password);
            return res.status(200).json(token);
        };
        this.validate = async (req, res) => {
            const { authorization } = req.headers;
            const newAuthorization = authorization.replace('Bearer ', '');
            const userData = jwt.verify(newAuthorization, JWT_SECRET);
            const role = await this.userService.validate(userData);
            return res.status(200).json({ role });
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map