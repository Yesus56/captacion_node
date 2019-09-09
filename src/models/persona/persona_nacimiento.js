/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "persona_nacimiento",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      personaId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "persona",
          key: "id"
        },
        unique: true
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
      tableName: "persona_nacimiento",
      schema: "persona",
      timestamps: false
    }
  );
};
