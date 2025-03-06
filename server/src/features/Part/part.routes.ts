import { Router } from "express";
import { createPart, editPart, getAllParts } from "./part.controller";
const router:Router = Router();

router.get('/', getAllParts);

router.post('/', createPart);

router.put('/:id', editPart);

export default router;

