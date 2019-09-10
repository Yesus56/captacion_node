import { Pais, Estado, Municipio, Paroquia, Parroquia } from "../models";

function getPais(req, res) {
  Pais.findAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => {});
}

function getEstado(req, res) {
  Estado.findAll({atributer : {
    exclude : ['id']
  }})
    .then(result => {
      res.json(result);
    })
    .catch(err => {});
}

function getMunicipio(req, res) {
  Municipio.findAll({ where: edo })
    .then(result => {
      res.json(result);
    })
    .catch(err => {});
}

function getParroquia(req, res) {
  Parroquia.findAll({ where: mun })
    .then(result => {
      res.json(result);
    })
    .catch(err => {});
}

async function getEspa(req, res) {
   const estados = await Estado.findAll({atributer : {exclude : ['id']}}).catch(err => {});
   const pais = await Pais.findAll().catch(err => {})

   res.json({estados, pais})
  }

export { getEstado, getMunicipio, getPais, getParroquia, getEspa };
