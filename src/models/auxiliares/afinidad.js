/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('afinidad', {
    id_afinidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'afinidad'
  });
};
