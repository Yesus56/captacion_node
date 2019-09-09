/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "persona_persona_sc",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_personasc: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona_sc",
          key: "id"
        }
      },
      id_persona: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona",
          key: "id"
        }
      }
    },
    {
      tableName: "persona_persona_sc",
      schema: "persona",
      timestamps: false
    }
  );
};
