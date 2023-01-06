"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const bCryptPasswordValidation = (password, hash) => bcrypt.compareSync(password, hash);
exports.default = bCryptPasswordValidation;
//# sourceMappingURL=bCryptPassVal.js.map