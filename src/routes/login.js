//todo lo que tiene que ver con login y registro y recuperacion de calve
import { Router } from "express";
const router = Router();

import { saime } from "../controller/saime.controller";
import {register,login} from '../controller/login.controller';
// /api/prelogin
router.post("/", login);
router.post("/register", register);
export default router;
