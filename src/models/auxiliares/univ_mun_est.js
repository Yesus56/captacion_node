/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('univ_mun_est', {
    id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    universidad_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    municipio_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    carrera_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'univ_mun_est'
  });
};
