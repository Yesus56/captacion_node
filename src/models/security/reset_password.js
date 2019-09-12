/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reset_password', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'reset_password'
  });
};
