'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER(11).ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: Sequelize.STRING,
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imageLink:Sequelize.STRING,
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: Sequelize.STRING,
      productType: Sequelize.STRING,
    } )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};