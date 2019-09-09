/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dependencia', {
    1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pública: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'dependencia'
  });
};
