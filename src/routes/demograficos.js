//data personal
import { Router } from "express";
const router = Router();

import {
  getEstado,
  getPais,
  getMunicipio,
  getParroquia,
  getEspa
} from "../controller/demograficos.controllers";

// /api/demografico
router.get("/estado", getEstado);
router.get("/municipio", getMunicipio);
router.get("/parroquia", getParroquia);
router.get("/pais", getPais);
router.get("/getEspa", getEspa);

export default router;
