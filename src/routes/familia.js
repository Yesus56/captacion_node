//todo lo que tiene que ver con login y registro y recuperacion de calve
import { Router } from "express";
const router = Router();

import {
  deleteFamilia,
  getFamilia,
  insertFamilia,
  updateFamilia
} from "../controller/famila.controllers";
import { jwtoken } from "../middleware/veryfiToken";
router.use(jwtoken);
// /api/familia
router.get("/", getFamilia);
router.post("/", insertFamilia);
router.put("/", updateFamilia);
router.delete("/", deleteFamilia);
export default router;
