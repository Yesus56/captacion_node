/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'pais'
  });
};
