'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Songs', 
    'url',{
        type: Sequelize.STRING
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('url');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
