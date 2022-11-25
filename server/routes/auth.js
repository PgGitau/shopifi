import express from 'express';

const router = express.Router();

// controllers
// import {users} from '../controllers/auth.js';
import {register, login} from '../controllers/auth.js';

// testing GET route
//  router.get('/users', users);


// testing post route
router.post('/register', register);
router.post('/login', login)

export default router;