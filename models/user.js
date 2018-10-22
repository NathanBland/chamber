'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    id: DataTypes.UUID,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    //
  };
  return User;
};