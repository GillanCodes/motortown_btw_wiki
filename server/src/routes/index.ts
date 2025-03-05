// Routes Imports
import categoryRoutes from "../features/Category/category.routes";
import partRoutes from "../features/Part/part.routes";

//Router Init
import { Router } from "express";
const router:Router = Router();

//Router declaration
router.use('/category', categoryRoutes);
router.use('/part', partRoutes);

//Export
export default router;
