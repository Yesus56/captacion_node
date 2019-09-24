import { personas, Fp_nacimiento,Pais, Fc_patria } from "../models";
import { Res } from "../helpers/helpers";
import _ from 'underscore';


function getPersona(req,res){
    token = req.newtoken.token;
    let body = req.body;

    Fc_patria.findOne({where:body.idPersona}).then((result) => {
        if(_.isEmpty(result)){
            res.json({
                ok: true,
                token: token,
                message: 0
            })
        }else{
            res.json({
                ok: true,
                token: token,
                message: result[0].dataValues.id
            })
        }
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({
            ok: false ,
            token:rtoken,
            message: "error en el servidor"
        });
    });
}


function insertpersona(req,res){
    console.log('persona');
    token = req.newtoken.token;
    let body = req.body;

    let createData = {
        estadoCivil : body.idPersona,
        estadoCivl : body.estadoCivil,
        codigoPatria : body.codigoPatria || "n/p"
    };

    Fc_patria.create(createData).then((result) => {
        if(!_.isEmpty){
           return res.json({
                ok:true,
                token:token,
                message: "data"
            })
        }else{
            
        }
    }).catch((err) => {
        console.log(err)
        return res.status(500).json({
            ok: false ,
            token:rtoken,
            message: "error en el servidor"
        });

    });
    
}

function updatePersona(req,res){
    let body = req.body;
    token = req.newtoken.token;
    updateData = {
        estadoCivl : body.estadoCivil,
        codigoPatria : body.codigoPatria || "n/p"
    }

    Fc_patria.update(updateData,{where:body.idPersona}).then((result) => {
        if(!_.isEmpty(result)){
            res.json({
                ok:true,
                token : token,
                message: result
            });
        }else{
            res.status(400).json({
                ok:false,
                token: token,
                message: "no puede hacer esta operacion"
            })
        }
    }).catch((err) => {
        res.status(500).json({
            ok: false,
            token:token,
            message:"error al tratar de actualizar"
        })
    });

}




export {getPersona,  insertpersona ,  updatePersona};
