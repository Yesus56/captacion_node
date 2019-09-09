import Sequelize from "sequelize";
import { db } from "../database/database";

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

//tablas foraneas
personas.hasMany(Fp_nacimiento, { foreingkey:'personaId', sourceKey: 'id'})
export {
  Saimes,
  Fc_patria,
  Ff_persona,
  personas,
  Fp_nacimiento,
  Fpp_sc,
  P_sc,
  Fp_sc_nacimiento
};
