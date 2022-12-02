import express from 'express';

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

//controllers
import { create } from "../controllers/product.js";

// routes
router.post('/product', requireSignin, isAdmin, create);

export default router;