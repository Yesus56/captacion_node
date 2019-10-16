import {
  personas,
  Fp_nacimiento,
  Pais,
  Fc_patria,
  Saimes,
  Ff_persona
} from "../models";
import { Res } from "../helpers/helpers";
import _ from "underscore";
import colors from "colors";

function getFamilia(req, res) {}

async function insertFamilia(req, res) {
  let persona = req.persona;
  let body = req.body;
  let token = req.newtoken.token;
  let personaexite;
  if (!_.isEmpty(body.cedula)) {
    personaexite = await personas.findOne({
      where: { nacionalidad: body.nacionalidad, cedula: body.cedula }
    });
  }

  if (_.isEmpty(personaexite)) {
    if (!_.isEmpty(body.cedula)) {
      let saime = await Saimes.findOne({
        where: {
          cedula: body.cedula,
          origen: body.nacionalidad
        }
      });
      saime = saime.dataValues;
      let pais = await Pais.findOne({ where: { alfa3: saime.pais_origen } });
      pais = pais.dataValues;
      var datos = {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula,
        pnombre: saime.primer_nombre,
        snombre: saime.segundo_nombre,
        papellido: saime.primer_apellido,
        sapellido: saime.segundo_apellido,
        fcha_nacimiento: saime.fecha_nacimiento,
        id_pais: pais.alfan
      };
    } else {
      var datos = {
        nacionalidad: body.nacionalidad,
        cedula: Date.now().toString(),
        pnombre: body.primer_nombre,
        snombre: body.segundo_nombre,
        papellido: body.primer_apellido,
        sapellido: body.segundo_apellido,
        fcha_nacimiento: body.fecha_nacimiento,
        id_pais: body.alfan
      };
    }

    console.log(datos);
    var createPersona = await personas.create(datos);
    createPersona = createPersona.dataValues;
    let datosnacimiento = {
      id_persona: createPersona.id,
      id_estado: body.estado,
      id_municipio: body.municipio,
      id_parroquia: body.parroquia
    };
    Fp_nacimiento.create(datosnacimiento);
  } else {
    personaexite = personaexite.dataValues.id;
  }
  console.log(createPersona);

  let id_familiar = personaexite || createPersona.id;
  let data = {
    id_persona: persona,
    id_persona_familia: id_familiar,
    afinidad_id: body.afinidad
  };
  console.log(data);
  Ff_persona.create(data)
    .then(async result => {
      if (_.isEmpty(result)) {
        return res.status(400).json(Res(false, "data no guardada", token));
      } else {
        let familia = await Ff_persona.findAll({
          where: { id_persona: persona },
          raw: true
        });
        console.log((familia[0].id = "asdasda"));
        return res.json(Res(true, familia, token));
      }
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(Res(false, "error de servidor", token));
    });
}

async function updateFamilia(req, res) {
  let body = req.body;
  let token = req.newtoken.token;
  let persona = req.persona;
  let familiar = await personas.findOne({
    where: { id: body.familiar },
    raw: true
  });
  let datos, saime;
  console.log('familiar');
console.log(_.isEmpty(body.cedula))
  if (familiar.nacionalidad == "N" && _.isNull(body.cedula)) {
    console.log('heyy')
    datos = {
      nacionalidad: body.nacionalidad,
      pnombre: body.primer_nombre,
      snombre: body.segundo_nombre,
      papellido: body.primer_apellido,
      sapellido: body.segundo_apellido,
      fcha_nacimiento: body.fecha_nacimiento,
      id_pais: body.alfan
    };
    await personas.update(datos, { where: { id: body.familiar } });
  
  } else if (familiar.nacionalidad == "N") {
    console.log('actualziacion')
    let familiarExiste = await personas.findOne({
      where: { cedula: body.cedula, nacionalidad: body.nacionalidad },
      raw: true
    });
    
    if (familiarExiste.id !== body.familiar ) {
      let prueba = { id_persona_familia: familiarExiste.id };
      Ff_persona.update(prueba, {
        where: { id_persona_familia: body.familiar }
      })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });

      //console.log(persona_fami);
      console.log("actualizando persona");
    } else {
      saime = await Saimes.findAll({
        where: {
          origen: body.nacionalidad,
          cedula: body.cedula
        },
        raw: true
      });
      let pais = {alfan: ""};
      if(!_.isEmpty(saime) ){
         pais = await Pais.findAll({
          where: { alfa3: saime.pais_origen },
          raw: true
        });
      }
      console.log(body);
      datos = {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula,
        pnombre: saime.primer_nombre || body.primer_nombre,
        snombre: saime.segundo_nombre || body.segundo_nombre ,
        papellido: saime.primer_apellido || body.primer_apellido ,
        sapellido: saime.segundo_apellido || body.segundo_apellido,
        fcha_nacimiento: saime.fecha_nacimiento || body.fecha_nacimiento,
        id_pais: pais.alfan || body.alfan
      };
      console.log("/////////////".blue)       
      console.log(datos)
      console.log("/////////////".blue)
      await personas.update(datos, { where: { id: body.familiar } });
        await Ff_persona.update(
        { afinidad_id: body.afinidad },
        { where: { id_persona: persona } }
      );
      let datosNacimiento = {
        id_estado: body.estado,
        id_municipio: body.municipio,
        id_parroquia: body.parroquia
      };

      await Fp_nacimiento.update(datosNacimiento, {
        where: { id_persona: body.familiar }
      });
    }
  }

  return res.json(Res(true, familiar, token));
}

function deleteFamilia(req, res) {}

export { getFamilia, insertFamilia, updateFamilia, deleteFamilia };
