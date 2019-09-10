/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "cne_estado",
    {
      edo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: "cne_estado",
      schema: "demograficos",
      timestamps: false,
      beforeFind : function(option){
        options.attributes.exclude = ['id'];
        return options;
      }
    }
  );
};
