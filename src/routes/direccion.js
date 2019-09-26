//todo lo que tiene que ver con login y registro y recuperacion de calve
import { Router } from "express";
const router = Router();

import {
  getDireccion,
  insertDireccion,
  updateDireccion
} from "../controller/direccion.controllers";
import { jwtoken } from "../middleware/veryfiToken";

router.use(jwtoken);

// /api/direccion
router.get("/", getDireccion);
router.post("/", insertDireccion);
router.put("/", updateDireccion);

export default router;
