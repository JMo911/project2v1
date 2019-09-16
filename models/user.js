module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  return User
}