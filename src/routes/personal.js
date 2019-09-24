//data personal
import { Router } from "express";
const router = Router();

import { insertpersona } from "../controller/persona.controller";
import {jwtoken} from '../middleware/veryfiToken';
//router.use()
// /api/perosnal
router.use(jwtoken);
router.post("/", insertpersona);


export default router;
