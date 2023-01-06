"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jwt = require("jsonwebtoken");
const JWT_SECRET = 'jwt_secret';
const tokenGenerate = (user) => {
    const token = Jwt.sign({ userId: user.id }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
    return token;
};
exports.default = tokenGenerate;
//# sourceMappingURL=jwtGenerator.js.map