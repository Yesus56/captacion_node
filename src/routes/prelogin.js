//todo lo que tiene que ver con login y registro y recuperacion de calve
import { Router } from "express";
const router = Router();

import { saime } from "../controller/saime.controller";

// /api/prelogin
router.post("/", saime);

export default router;
