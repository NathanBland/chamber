'use strict';
const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlaylistSongs', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: uuidv4(Math.random()),
        allowNull: false,
        autoIncrement: false,
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      playlistId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Playlists',
          key: 'id',
          as: 'playlistId',
        }
      },
      SongId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Songs',
          key: 'id',
          as: 'songId',
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlaylistSongs');
  }
};