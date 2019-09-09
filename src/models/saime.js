import Sequelize from "sequelize";
import { db } from "../database/database";

const Saime = db.saime.define(
  "saime",
  {
    origen: {
      type: Sequelize.STRING
    },
    cedula: {
      type: Sequelize.BIGINT
    },
    pais_origen: {
      type: Sequelize.STRING
    },
    nacionalidad: {
      type: Sequelize.STRING
    },
    primer_nombre: {
      type: Sequelize.STRING
    },
    segundo_nombre: {
      type: Sequelize.STRING
    },
    primer_apellido: {
      type: Sequelize.STRING
    },
    segundo_apellido: {
      type: Sequelize.STRING
    },
    fecha_nacimiento: {
      type: Sequelize.DATE
    },
    naturalizado: {
      type: Sequelize.INTEGER
    },
    sexo: {
      type: Sequelize.STRING
    }
  },
  {
    schema: "saime",
    timestamps: false
  }
);

export default Saime;
