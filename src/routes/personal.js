//data personal
import { Router } from "express";
const router = Router();

import { persona } from "../controller/login.controller";

// /api/login
router.post("/", persona);


export default router;
