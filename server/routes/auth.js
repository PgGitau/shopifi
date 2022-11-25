import express from 'express';

const router = express.Router();

// controllers
// import {users} from '../controllers/auth.js';
import {register} from '../controllers/auth.js';

// testing GET route
//  router.get('/users', users);


// testing post route
router.post('/register', register);

export default router;