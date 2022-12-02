import express from 'express';
import formidable from 'express-formidable'; // to access photos

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

//controllers
import { create, list, read, photo, remove, update } from "../controllers/product.js";

// routes
router.post('/product', requireSignin, isAdmin, formidable(), create);
router.get('/products', list); // list all products
router.get('/product/:slug', read); // get a single product
router.get('/product/photo/:productId', photo); // get product photo
router.delete('/product/:productId', requireSignin, isAdmin, remove); // remove a product 
router.put('/product/:productId', requireSignin, isAdmin, formidable(), update); // update a product 


export default router;