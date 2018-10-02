'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    UserId: DataTypes.UUID
  }, {});
  Library.associate = function(models) {
    // associations can be defined here
  };
  return Library;
};