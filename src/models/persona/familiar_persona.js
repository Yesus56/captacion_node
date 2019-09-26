/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "familiar_persona",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_persona: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona",
          key: "id"
        }
      },
      id_persona_familia: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona",
          key: "id"
        }
      },
      afinidad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "familiar_persona",
      schema: "persona",
      timestamps: false
    }
  );
};
