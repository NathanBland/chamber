'use strict';
const uuidv4 = require('uuid/v4')

module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4(Math.random()),
      allowNull: false,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Playlist.associate = function(models) {
    Playlist.hasMany(models.PlaylistSong)
    // associations can be defined here
  };
  return Playlist;
};