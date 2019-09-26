//todo lo que tiene que ver con login y registro y recuperacion de calve
import { Router } from "express";
const router = Router();

import { register, login } from "../controller/login.controller";
// /api/login
router.post("/", login);
router.post("/register", register);
export default router;
