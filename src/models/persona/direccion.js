/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccion', {
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
        model: 'persona',
        key: 'id'
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
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    casa: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'n/p'
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'n/p'
    }
  }, {
    tableName: 'direccion',
    schema: "persona",
    timestamps: false
  });
};
