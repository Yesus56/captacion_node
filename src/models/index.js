import Sequelize from "sequelize";
import { db } from "../config/database";

//saime
import saimes from "./saime/saimes.js";
const Saimes = saimes(db.saime, Sequelize);

//persona
import c_patria from "./persona/c_patria";
import f_persona from "./persona/familiar_persona";
import Personas from "./persona/persona";
import p_nacimiento from "./persona/persona_nacimiento";
import pp_sc from "./persona/persona_persona_sc";
import Persona_sc from "./persona/persona_sc";
import p_sc_nacimiento from "./persona/persona_sc_nacimiento";
import cne_estadp from "./demograficos/cne_estado";
import cne_municipio from "./demograficos/cne_municipio";
import cne_parroquia from "./demograficos/cne_parroquia";
import cne_pais_alf from "./demograficos/paises_alfa";


//security
import user from './security/user';

//carnet de la patria
const Fc_patria = c_patria(db.captacion, Sequelize);
//familiar persona
const Ff_persona = f_persona(db.captacion, Sequelize);
// tabla perosna
const personas = Personas(db.captacion, Sequelize);
// tabla persona nacimeinto
const Fp_nacimiento = p_nacimiento(db.captacion, Sequelize);
// tabla muchos a muhcos persona s/c a persona
const Fpp_sc = pp_sc(db.captacion, Sequelize);
//perosna sc
const P_sc = Persona_sc(db.captacion, Sequelize);
// tabla de nacimiento de persona s/c
const Fp_sc_nacimiento = p_sc_nacimiento(db.captacion, Sequelize);
//tabla estado municipio parroquia pais
const Estado = cne_estadp(db.captacion, Sequelize);
const Municipio = cne_municipio(db.captacion, Sequelize);
const Parroquia = cne_parroquia(db.captacion, Sequelize);
const Pais = cne_pais_alf(db.captacion, Sequelize);


//tabla de user
const User = user(db.captacion,Sequelize);
//tablas foraneas
personas.hasMany(Fp_nacimiento, { foreignKey: "id_persona", sourceKey: "id" });
personas.hasMany(Ff_persona, { foreignKey: "id_persona", sourceKey: "id" });
personas.hasMany(Pais, { foreignKey: "alfan", sourceKey: "id_pais" });

Ff_persona.hasMany(personas, {
  foreignKey: "id",
  sourceKey: "id_perosna_familia"
});

Fp_nacimiento.hasMany(Estado, { foreignKey: "edo", sourceKey: "id_estado" });
Fp_nacimiento.hasMany(Municipio, {
  foreignKey: "mun",
  sourceKey: "id_municipio"
});
Fp_nacimiento.hasMany(Parroquia, {
  foreignKey: "id",
  sourceKey: "id_parroquia"
});

personas.hasOne(User, {foreignKey:"id_personas",  sourceKey: "id" })

export {
  Saimes,
  Fc_patria,
  Ff_persona,
  personas,
  Fp_nacimiento,
  Fpp_sc,
  P_sc,
  Fp_sc_nacimiento,
  Estado,
  Municipio,
  Parroquia,
  Pais,
  User
};