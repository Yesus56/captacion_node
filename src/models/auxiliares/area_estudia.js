/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area_estudia', {
    id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'area_estudia'
  });
};
