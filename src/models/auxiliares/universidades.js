/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('universidades', {
    id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'universidades'
  });
};
