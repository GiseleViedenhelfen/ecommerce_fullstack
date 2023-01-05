"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    brand: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.STRING,
    imageLink: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    category: sequelize_1.DataTypes.STRING,
    productType: sequelize_1.DataTypes.STRING
}, {
    sequelize: _1.default,
    modelName: 'products',
    timestamps: false,
});
exports.default = Product;
//# sourceMappingURL=product.model.js.map