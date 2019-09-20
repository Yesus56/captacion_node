import { personas, Fp_nacimiento,Pais } from "../models";
import { Res } from "../helpers/helpers";


function persona(req,res){
    console.log('persona');

    res.json('persona')
}


export { persona };
