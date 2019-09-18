//data personal
import { Router } from "express";
const router = Router();

import { persona } from "../controller/login.controller";
router.use()
// /api/perosnal
router.post("/", persona);


export default router;
