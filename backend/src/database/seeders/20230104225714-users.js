'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert( "users", [
      {
        id: 1,
        name: 'Gisele Portella',
        email: 'gisele_Portella@gmail.com',
        password: '$2a$12$5phZ2ddNad.cxVr6dNreNOsHgoMLEr1maCsoUmZFID.pB25I0A/H2', 
        // senhaGi
        role: 'customer',
      },
      {
        id: 2,
        name: 'Lucas Portella',
        email: 'lucas_Portella@gmail.com',
        password: '$2a$12$PXaM2xOnS0mOEAvJ.szHYOrBzVDtNR2KEEn.m8PJKBX6/HYQ3SHaS',
        // senha_Lucas!
        role: 'seller',
      },
      {
        id: 3,
        name: 'Gabriela Ligabue',
        email: 'gabriela_ligabue@gmail.com',
        password: '$2a$12$z8px6nSczhT7R/9Mdtt/tOwnrh3jdhDeL8npFB9ywbp4TG8Fnimay',
        // passGab1
        role: 'customer',
      },
    ]

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
