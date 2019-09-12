/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_personas: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'id'
      },
      unique: true
    }
  }, {
    tableName: 'user',
    schema: "security",
    timestamps:false
  });
};
