"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../service/user");
class UserController {
    constructor(userService = new user_1.default()) {
        this.userService = userService;
        this.getUser = async (req, res) => {
            const { email } = req.body;
            console.log(email);
            const user = await this.userService.getUser(email);
            console.log(user);
            return res.status(200).json({ message: 'usuário existente' });
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map