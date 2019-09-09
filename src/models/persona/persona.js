/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nacionalidad: {
      type: DataTypes.CHAR,
      allowNull: false,
      unique: true
    },
    cedula: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pnombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    snombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    papellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sapellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fcha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'persona',
    schema: "persona",
    timestamps: false
  });
};
