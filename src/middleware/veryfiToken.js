import jwt from "jsonwebtoken";
import { Token } from "../models";
import _ from "underscore";
const jwtoken = async (req, res, next) => {
  let tokenreq = req.get("token");
  let tokendb =  await Token.find({token : tokenreq});
 console.log(tokenreq);
 

  if (_.isEmpty(tokendb)) {
    return res.status(401).json({
      ok: false,
      errr: "no atorizado"
    });
  } else {
    jwt.verify(tokenreq, process.env.PRIVATE, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err
        });
      } else {
        
          let newtoken = new Token({
              token: jwt.sign(
                  {
                      nacionaldiad: decoded.nacionalidad,
                      cedula: decoded.cedula,
                      pnombre: decoded.pnombre,
                      snombre: decoded.snombre,
                      papellido: decoded.papellido,
                      sapellido: decoded.spaellido
                    },
                    process.env.PRIVATE,
                    { expiresIn: process.env.CADUCIDAD_TOKEN }
                    )
                });
        Token.findOneAndUpdate({token : tokenreq}, {token: newtoken})
        req.usuario = decoded;
        req.newtoken = newtoken;
        console.log(req.usuario);
        next();


      }

    });
  }
};

export { jwtoken };
