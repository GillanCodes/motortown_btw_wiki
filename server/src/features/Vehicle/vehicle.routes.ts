import { Router } from "express";
import { addPartToVehicle, createVehicle, getAllVehicles, getVehicle } from "./vehicle.controller";
let multerMiddleware = require("../../middlewares/multer.middleware");
const router:Router = Router();

router.get('/', getAllVehicles);
router.get('/:id', getVehicle);

router.post('/', multerMiddleware, createVehicle);

router.patch('/:vehicleId/addpart/:partId', addPartToVehicle)

export default router;

