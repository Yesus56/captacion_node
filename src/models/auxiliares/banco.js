/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banco', {
    nombre_banco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_banco: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'banco'
  });
};
