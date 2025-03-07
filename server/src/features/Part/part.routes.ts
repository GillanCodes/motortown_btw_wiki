import { Router } from "express";
import { createPart, editPart, getAllParts, getPart } from "./part.controller";
const router:Router = Router();

router.get('/', getAllParts);
router.get('/:id', getPart);

router.post('/', createPart);

router.put('/:id', editPart);

export default router;

