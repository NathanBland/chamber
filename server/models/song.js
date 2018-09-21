'use strict';
const uuidv4 = require('uuid/v4')

module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4(Math.random()),
      allowNull: false,
      autoIncrement: false,
    },
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // Song.belongsTo(models.PlaylistSong)
    // associations can be defined here
  };
  return Song;
};