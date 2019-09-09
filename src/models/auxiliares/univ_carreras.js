/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('univ_carreras', {
    id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    universidad_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carrera_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'univ_carreras'
  });
};
