import express from 'express';
import formidable from 'express-formidable'; // to access photos

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

//controllers
import { create } from "../controllers/product.js";

// routes
router.post('/product', requireSignin, isAdmin, formidable(), create);

export default router;