/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "persona_sc",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      primer_nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      segundo_nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      primer_apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
      segundo_apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_pais: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "persona_sc",
      schema: "persona",
      timestamps: false
    }
  );
};
