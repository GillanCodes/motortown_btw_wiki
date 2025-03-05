// Routes Imports
import categoryRoutes from "../features/Category/category.routes";

//Router Init
import { Router } from "express";
const router:Router = Router();

//Router declaration
router.use('/category', categoryRoutes);

//Export
export default router;
