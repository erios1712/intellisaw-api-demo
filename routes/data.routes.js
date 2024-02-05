import { Router } from "express";
import * as controllerData from "../controllers/data.controller.js";
const router = Router();

router.get("/:param1/:param2", controllerData.findAll);

export default router;