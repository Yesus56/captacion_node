/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona_respuesta', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_persona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_respuesta: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'respuesta',
        key: 'id'
      }
    }
  }, {
    tableName: 'persona_respuesta'
  });
};
