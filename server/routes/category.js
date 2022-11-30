import express from 'express';

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

//controllers
import { create } from "../controllers/category.js";

// testing post route
router.post('/category', requireSignin, isAdmin, create);

export default router;