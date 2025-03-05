import { Router } from "express";
import { createPart, getAllParts } from "./part.controller";
const router:Router = Router();

router.get('/', getAllParts);

router.post('/', createPart);

export default router;

