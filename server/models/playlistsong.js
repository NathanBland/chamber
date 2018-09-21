'use strict';
const uuidv4 = require('uuid/v4')

module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4(Math.random()),
      allowNull: false,
      autoIncrement: false,
    },
    title: DataTypes.STRING
  }, {});
  PlaylistSong.associate = (models) => {
    PlaylistSong.belongsTo(models.Playlist)
    PlaylistSong.hasOne(models.Song)
    // associations can be defined here
  };
  return PlaylistSong;
};