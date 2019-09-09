//data personal
import { Router } from "express";
const router = Router();

import { persona } from "../controller/persona.controller";

// /api/perosnal
router.post("/", persona);

export default router;
