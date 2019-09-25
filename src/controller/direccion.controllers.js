import {Direccion,Estado,Municipio,Parroquia} from '../models';
import _ from 'underscore';
import {Res} from '../helpers/helpers';
function getDireccion(req,res){
    let persona = req.persona ;
    let token = req.newtoken.token;

    Direccion.findOne({where : {id_persona : persona}}).then((result) => {
        if(_.isEmpty(result)){
            return res.status(403).json(Res(false,"su data no fue guardada", token));
        }
        return res.json(Res(true,result,token));
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(Res(false,"error de servidor",token));
    });
}


function insertDireccion(req,res){
    let body = req.body;
    let persona = req.persona;
    let token = req.newtoken.token;

    let datos = {
      id_persona: persona,
      id_estado: body.estado,
      id_municipio: body.municipio,
      id_parroquia: body.parroquia,
      direccion: body.direccion,
      casa: body.casa ,
      celular: body.celular
    }   
    Direccion.create(datos).then((result) => {
        if(_.isEmpty(result)){
            return res.status(403).json(Res(false,"su data no fue guardada", token))
        }

        return res.json(Res(true,result,token))
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(Res(false,"error de servidor",token))
    });
}


function updateDireccion(req,res){
    let body = req.body;
    let persona = req.persona;
    let token = req.newtoken.token;
    let datos = {
        
        id_estado: body.estado,
        id_municipio: body.municipio,
        id_parroquia: body.parroquia,
        direccion: body.direccion,
        casa: body.casa ,
        celular: body.celular
      }   

    Direccion.update(datos,{where:{id_persona: persona}}).then((result) => {
        if(_.isEmpty(result)){
            return res.status(403).json(Res(false,"su data no fue guardada", token))
        }

        return res.json(Res(true,result,token))
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(Res(false,"error de servidor",token))
    });
}

export {
    getDireccion,
    insertDireccion,
    updateDireccion
}