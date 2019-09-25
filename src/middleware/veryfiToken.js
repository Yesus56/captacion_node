import jwt from "jsonwebtoken";
import { Token } from "../models";
import _ from "underscore";
const jwtoken = async (req, res, next) => {
  let tokenreq = req.get("token");
  let tokendb = await Token.find({ token: tokenreq });
  //console.log(tokendb);

  if (_.isEmpty(tokendb)) {
    return res.status(401).json({
      ok: false,
      err: "no atorizado"
    });
  } else {
    jwt.verify(tokenreq, process.env.PRIVATE, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err
        });
      } else {
        let newtoken = new Token({
          token: jwt.sign(
            {
              nacionalidad: decoded.nacionalidad,
              cedula: decoded.cedula,
              pnombre: decoded.pnombre,
              snombre: decoded.snombre,
              papellido: decoded.papellido,
              sapellido: decoded.spaellido,
              persona : decoded.persona
            },
            process.env.PRIVATE,
            { expiresIn: process.env.CADUCIDAD_TOKEN }
          )
        });

        let tokenupdate = `${decoded.nacionalidad}-${decoded.cedula}`;
        
    
        let tokenprueba = await Token.findOneAndUpdate({cedula :tokenupdate }, {
          cedula: decoded.nacionalidad + "-" + decoded.cedula,
          token: newtoken.token
        });
       
       await tokenprueba.save((err, DBtoken) => {
      
          req.persona = decoded.persona;
          req.newtoken = newtoken;
          next();
        });

      }
    });
  }
};

export { jwtoken };
