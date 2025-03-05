import { Router } from "express";
import { createCategory, createSubCategory, getAllCategories, getCategory } from "./category.controller";
const router:Router = Router();

router.get('/', getAllCategories);
router.get('/:id', getCategory);

router.post('/', createCategory);
router.post('/:id/', createSubCategory);

export default router;

