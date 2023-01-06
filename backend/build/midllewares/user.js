"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../database/models/user.model");
const user_1 = require("../service/user");
class LoginMiddle {
    constructor(userService = new user_1.default()) {
        this.userService = userService;
        this.model = user_model_1.default;
        this.LoginValidation = async (req, res, next) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: 'All fields must be filled' });
            }
            const login = await this.model.findOne({ where: { email }, raw: true });
            if (!login) {
                return res.status(400).json({ message: 'Incorrect email or password' });
            }
            const token = await this.userService.Login(email, password);
            if (!token) {
                return res.status(403).json({ message: 'All fields must be filled' });
            }
            next();
        };
        this.validateAuth = async (req, res, next) => {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(401).json({ message: 'Incorrect email or password' });
            }
            next();
        };
    }
}
exports.default = LoginMiddle;
//# sourceMappingURL=user.js.map