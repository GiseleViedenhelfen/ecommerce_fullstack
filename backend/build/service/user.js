"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../database/models/user.model");
class UserService {
    constructor() {
        this.model = user_model_1.default;
    }
    async getUser(mail) {
        const user = await this.model.findOne({ where: { mail } });
        return user;
    }
}
exports.default = UserService;
//# sourceMappingURL=user.js.map