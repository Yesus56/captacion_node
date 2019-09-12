/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_token', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'auth_token'
  });
};
