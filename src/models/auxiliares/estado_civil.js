/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estado_civil', {
    id_estado_civil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'estado_civil'
  });
};
