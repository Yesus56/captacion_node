//data personal
import { Router } from "express";
const router = Router();

import { persona } from "../controller/persona.controller";
import {jwtoken} from '../middleware/veryfiToken';
//router.use()
// /api/perosnal
router.use(jwtoken);
router.post("/", persona);


export default router;
