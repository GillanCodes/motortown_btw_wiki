import { Router } from "express";
import { createCategory, createSubCategory, getAllCategories } from "./category.controller";
const router:Router = Router();

router.get('/', getAllCategories);

router.post('/', createCategory);
router.post('/:id/', createSubCategory);

export default router;

