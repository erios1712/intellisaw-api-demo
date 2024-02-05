import { Router } from "express";
import viewCtrl from "../controllers/views.controllers.js";
import auth from "../middlewares/auth.middlewares.js";
const router = Router();

//rutas de vistas
router.get(["/"], viewCtrl.login);
router.get(["/dispositivos-conectados"], auth.verifyToken, viewCtrl.dispositivosConectados);
router.get(["/consulta-datos"], auth.verifyToken, viewCtrl.consultarDatos);

export default router;