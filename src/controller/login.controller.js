import { Saimes, personas, User, Pais,Token} from "../models";
import TokenSchema from '../models/security/token';
import bcrypt from 'bcrypt';
import { Res } from "../helpers/helpers";
import _ from "underscore";
import { userInfo } from "os";
import jwt from 'jsonwebtoken';

function register(req, res) {
  let body = req.body;
  //consultamos a la persona para saber s exite
  personas
    .findAll({
      include: [{ model: User }],
      where: {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula
      }
    })
    .then(async result => {

      //si no exite entramos en el if
      if (_.isEmpty(result)) {
        //pedimos los daotos de saime para agregarlo
        let saime = await Saimes.findAll({
          where: {
            origen: body.nacionalidad,
            cedula: body.cedula
          }
        });
        saime = saime[0].dataValues;
        //pedimos el pais para agregarlo con la data que envio saime
        let pais = await Pais.findOne({ where: { alfa3: saime.pais_origen } });
        pais = pais.dataValues;
        let persona = {
          nacionalidad: saime.origen,
          cedula: saime.cedula,
          pnombre: saime.primer_nombre,
          snombre: saime.segundo_nombre,
          papellido: saime.primer_apellido,
          sapellido: saime.segundo_apellido,
          fcha_nacimiento: saime.fecha_nacimiento,
          id_pais: pais.alfan
        };
        //creamos a la persona devolviendo la data 
        var createPersona = await personas
          .create(persona)
          .then(result => {
            return result;
          })
          .catch(err => {
            return res.status(400).json("error inesperado");
          });
        createPersona = createPersona.dataValues.id;
    
      }

      let personaId = createPersona || result[0].dataValues.id;
      //verificamos que no tenga un usuario ya creado
      if (_.isEmpty(result) || result[0].dataValues.user == null ) {
        //verificamos que el correo no este registrado ateriormente
        User.findAndCountAll({where:{ correo : body.email}}).then( async (result) => {
          if(result.count < 1){
            let usuario = {
              password: bcrypt.hashSync(body.password,10),
              correo: body.email,
              id_personas: personaId
            };

            await User.create(usuario)
            .then(result => {
              return res.json("usuario creado");
            })
            .catch(err => {
              return res.status(400).json("error al crear el usuario");
            });
          }else{
            return res.json('ese correo ya existe')

          }


        }).catch((err) => {
          res.json('error al preguntar si ese correo esta registrado')
        });
     
      } else {
        return res.json("ya tiene un usuario registrado");
      }
    })
    .catch(err => {
      console.log(err);
      return res.json("error");
    });
}

function persona(req, res) {
  let body = req.body;
 
  personas
    .findAll({
      include: [{ model: Fp_nacimiento, required: false }, { model: Pais }],
      where: {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula
      }
    })
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
}


function login(req,res){
  let body = req.body
 // console.log(req);
 
  personas.findOne({
    include: [{ model: User , required: true}],
    where: {
        nacionalidad: body.nacionalidad,
        cedula: body.cedula
    }
  }).then((result) => {
    if(!_.isEmpty(result)){
      let usuario = result.dataValues

       if(bcrypt.compareSync(body.password , usuario.user.password)){
        //console.log(usuario)
       let token = new Token({ 
         cedula: usuario.nacionalidad+"-"+usuario.cedula, 
         token : jwt.sign({
          nacionaldiad : usuario.nacionalidad,
          cedula : usuario.cedula,
          pnombre : usuario.pnombre,
          snombre : usuario.snombre,
          papellido: usuario.papellido,
          sapellido : usuario.spaellido,
        }, process.env.PRIVATE, 
        {expiresIn: process.env.CADUCIDAD_TOKEN})
        
      });

      Token.findOne({cedula:`${usuario.nacionalidad}-${usuario.cedula}` })
        
        token.save((err, DBtoken) => {
          res.json({
            ok:true,
            DBtoken
          });
        })

       }else{
         res.json('no autorizado');
       }

    }else{
      res.json('usuario no existe');
    }
  }).catch((err) => {
    console.log(err)
    res.json(err);
  });
}

export { persona, register,login };
