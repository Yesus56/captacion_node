/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saime', {
    origen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cedula: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pais_origen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primer_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    segundo_nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    primer_apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    segundo_apellido: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    naturalizado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_ult_actualizacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'saime'
  });
};
