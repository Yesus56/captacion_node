/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_cuenta', {
    id_tipo_cuenta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tipo_cuenta'
  });
};
