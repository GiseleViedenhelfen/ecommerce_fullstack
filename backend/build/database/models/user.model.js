"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
    role: sequelize_1.DataTypes.STRING,
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=user.model.js.map