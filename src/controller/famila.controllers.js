import { personas, Fp_nacimiento, Pais, Fc_patria,Saimes } from "../models";
import { Res } from "../helpers/helpers";
import _ from "underscore";


function getFamilia(req,res){

}

async function insertFamilia(req,res){
    let persona = req.persona
    let body = req.body;
    let token = req.newtoken.token
   let saime =  await Saimes.findOne({ where: {
        cedula: body.cedula,
        origen: body.origen
      }})
        saime = saime.dataValues;
        let pais = await Pais.findOne({ where: { alfa3: saime.pais_origen } });
        pais = pais.dataValues;
      let datos = {
       
        nacionalidad : body.origen ,
        cedula : body.cedula,
        pnombre: saime.primer_nombre,
        snombre: saime.segundo_nombre,
        papellido: saime.primer_apellido,
        sapellido: saime.segundo_apellido,
        fcha_nacimiento: saime.fecha_nacimiento,
        id_pais: pais.alfan

      }
    personas.create({datos}).then((result) => {
        if(_.isEmpty(result)){
            return res.status(403).json(Res(false,"su data no fue guardada", token))
        }
            return res.json(Res(true,result,token))
        }).catch((err) => {
            console.log(err);
            return res.status(500).json(Res(false,"error de servidor",token))
        });
}


function updateFamilia(req,res){

}

function deleteFamilia(req,res){

}


export{getFamilia,insertFamilia,updateFamilia,deleteFamilia}