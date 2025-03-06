import { Router } from "express";
import { createVehicle, getAllVehicles } from "./vehicle.controller";
let multerMiddleware = require("../../middlewares/multer.middleware");
const router:Router = Router();

router.get('/', getAllVehicles);

router.post('/', multerMiddleware, createVehicle);


export default router;

