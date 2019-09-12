import { Saimes, personas, User,Pais } from "../models";
import { Res } from "../helpers/helpers";
import _ from "underscore";
import { userInfo } from "os";

function register(req, res) {
  let body = req.body;
    
  personas
    .findAll({
      include: [{ model: User }],
      where: {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula
      }
    })
    .then(async result => {
      // let user = result[0].user.dataValue || {};
      // let persona = result[0].persona.dataValue || {};
      
      if (_.isEmpty(result)) {
        let saime = await Saimes.findAll({
          where: {
            origen: body.nacionalidad,
            cedula: body.cedula
          }
        });
        saime = saime[0].dataValues;
        let pais = await Pais.findOne({where : {alfa3:saime.pais_origen}})
        pais = pais.dataValues;
        let persona = {
            nacionalidad : saime.origen,
            cedula : saime.cedula,
            pnombre : saime.primer_nombre,
            snombre: saime.segundo_nombre,
            papellido: saime.primer_apellido,
            sapellido: saime.segundo_apellido,
            fcha_nacimiento: saime.fecha_nacimiento,
            id_pais : pais.alfan
        };
      var createPersona = await personas.create(persona).then((result) => {
           return result;
        }).catch((err) => {
           return res.status(400).josn('error inesperado');
        });
      createPersona = createPersona.dataValues;
      }
      let personaId = createPersona || result[0].dataValues.id;
      if (result[0].dataValues.user == null) {
           let usuario = {
              password : body.password,
               correo : body.email,
               id_personas : personaId
           };
       await  User.create(usuario).then((result) => {
             return res.json('usuario creado')
         }).catch((err) => {
            return res.status(400).json('error');
         });
      }else{
        return res.json('ya tiene un usuario registrado');
      }
      
      
    })
    .catch(err => {
        console.log(err);
        return res.json('error');
    });
}


function persona(req, res) {
    let body = req.body;
    personas
      .findAll({
        include: [{ model: Fp_nacimiento, required: false },{model: Pais}],
        where: {
          cedula: body.cedula,
          nacionalidad: body.nacionalidad
        }
      })
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  }
  


export { persona, register };