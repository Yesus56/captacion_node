/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "paises_alfa",
    {
      alfa2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre_paises: {
        type: DataTypes.STRING,
        allowNull: false
      },
      alfan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      alfa3: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "paises_alfa",
      schema: "demograficos",
      timestamps: false
    }
  );
};
