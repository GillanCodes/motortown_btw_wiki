import { Router } from "express";
import { addPartToVehicle, createVehicle, deleteVehicle, getAllVehicles, getVehicle } from "./vehicle.controller";
let multerMiddleware = require("../../middlewares/multer.middleware");
const router:Router = Router();

router.get('/', getAllVehicles);
router.get('/:id', getVehicle);

router.post('/', multerMiddleware, createVehicle);

router.patch('/:vehicleId/addpart/:partId', addPartToVehicle)

router.delete('/:id', deleteVehicle);

export default router;

