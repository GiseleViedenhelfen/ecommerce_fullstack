'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert( "users", [
      {
        id: 1,
        name: 'Gisele Portella',
        email: 'gisele_Portella@gmail.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'customer',
      },
      {
        id: 2,
        name: 'Lucas Portella',
        email: 'lucas_Portella@gmail.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller',
      },
      {
        id: 3,
        name: 'Gabriela Ligabue',
        email: 'gabriela_ligabue@gmail.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer',
      },
    ]

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
