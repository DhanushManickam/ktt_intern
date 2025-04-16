'use strict';

const { sequelize } = require('../db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('data', 'mobile_no', {
      type: Sequelize.STRING 
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('data', 'mobile_no');
  }
};
