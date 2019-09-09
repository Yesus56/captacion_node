/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cne_parroquia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parroquia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mun: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cne_parroquia'
  });
};
