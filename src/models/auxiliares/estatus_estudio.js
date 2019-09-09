/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estatus_estudio', {
    id_estatus_estudio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'estatus_estudio'
  });
};
