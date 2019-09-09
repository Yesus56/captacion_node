/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "persona_sc_nacimiento",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_persona_sc: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona_sc",
          key: "id"
        }
      },
      id_estado: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_parroquia: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "persona_sc_nacimiento",
      schema: "persona",
      timestamps: false
    }
  );
};
