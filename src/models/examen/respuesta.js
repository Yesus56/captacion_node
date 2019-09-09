/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('respuesta', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pregunta_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Preguntas',
        key: 'id'
      }
    },
    respuestas: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'respuesta'
  });
};
