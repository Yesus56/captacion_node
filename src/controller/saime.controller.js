import { Saimes, personas } from "../models";
import { Res } from "../helpers/helpers";

export function saime(req, res) {
  const body = req.body;
  if (!body.cedula || !body.origen) {
    return res.status(400).json(Res(false, "datos vacios"));
  }
  Saimes.findAll({
    attributes: [
      "origen",
      "cedula",
      "primer_nombre",
      "segundo_nombre",
      "primer_apellido",
      "segundo_apellido",
      "fecha_nacimiento"
    ],
    where: {
      cedula: body.cedula,
      origen: body.origen
    }
  })
    .then(result => {
      if (result == "") {
        return res
          .status(400)
          .json(Res(false, "verifique sus datos y vuelva a intentarlo"));
      }

      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json(
          Res(false, "error al ejecutar su consulta favor volver a intentar")
        );
    });
}
