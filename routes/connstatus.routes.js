import { Router } from "express";
import * as controllerConnection from "../controllers/data.controller.js";
const router = Router();

router.get("/", controllerConnection.findConnStatus);

export default router;