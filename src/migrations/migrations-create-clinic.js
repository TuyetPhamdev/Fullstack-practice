'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //ko muốn mất thông tin cũ, muốn thêm thông tin mới -> tạo trong migrations 1 file mới -> addColumns
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clinics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clinics');
  }
};