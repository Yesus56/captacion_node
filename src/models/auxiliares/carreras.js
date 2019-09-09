/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carreras', {
    id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carrera: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'carreras'
  });
};
