/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona_respues1', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perosna_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    respuesta_id_1: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_2: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_3: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_4: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_5: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_6: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_7: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_8: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_9: {
      type: "INET",
      allowNull: false
    },
    respuesta_id_10: {
      type: "INET",
      allowNull: false
    }
  }, {
    tableName: 'persona_respues1'
  });
};
