"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md5 = require('md5');
const user_model_1 = require("../database/models/user.model");
const bCryptPassVal_1 = require("../helpers/bCryptPassVal");
const jwtGenerator_1 = require("../helpers/jwtGenerator");
class UserService {
    constructor() {
        this.model = user_model_1.default;
    }
    async Login(email, password) {
        const user = await this.model.findOne({ where: { email } });
        if (!(0, bCryptPassVal_1.default)(password, user.password)) {
            return null;
        }
        const token = (0, jwtGenerator_1.default)(user);
        return token;
    }
    async validate(userData) {
        const { userId } = userData;
        const user = await this.model.findOne({ where: { id: userId } });
        return user.role;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.js.map