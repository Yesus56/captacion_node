/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Preguntas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    preguntas: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Preguntas'
  });
};
