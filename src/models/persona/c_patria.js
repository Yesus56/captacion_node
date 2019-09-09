/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "c_patria",
    {
      id: {
        type: DataTypes.BIGINT,
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
        },
        unique: true
      },
      cod_patria: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "c_patria",
      schema: "persona",
      timestamps: false
    }
  );
};
