/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sexo', {
    id_sexo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'sexo'
  });
};
