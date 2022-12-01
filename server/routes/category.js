import express from 'express';

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

//controllers
import { create, update, remove, list, read } from "../controllers/category.js";

// testing post route
router.post('/category', requireSignin, isAdmin, create);
router.put('/category/:categoryId', requireSignin, isAdmin, update); // to update category; we'll use catId to get specific cat to update
router.delete('/category/:categoryId', requireSignin, isAdmin, remove); //to delete category; "    "    "
router.get('/categories', list); // to list all categories; no middlewares, publicly available
router.get('/category/:slug', read); //to list a single category

export default router;