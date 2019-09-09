/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cne_municipio', {
    mun: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cne_municipio'
  });
};
