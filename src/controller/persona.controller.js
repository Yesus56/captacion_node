import { personas, Fp_nacimiento } from "../models";
import { Res } from "../helpers/helpers";
function persona(req, res) {
  let body = req.body;
  personas
    .findAll({
      include: [{ model: Fp_nacimiento, required: false }],
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

export { persona };
