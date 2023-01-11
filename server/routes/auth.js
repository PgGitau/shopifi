import express from 'express';

const router = express.Router();

//middlewares
import {requireSignin, isAdmin} from '../middlewares/auth.js';

// controllers
// import {users} from '../controllers/auth.js';
import { register, login, secret } from '../controllers/auth.js';

// testing GET route
//  router.get('/users', users);


// testing post route
router.post('/register', register);
router.post('/login', login);

router.get('/auth-check', requireSignin, (req, res) => {
    res.json({ ok: true });
});

//testing protected route
// 1. send token to header(done in postman app in headers section),
// 2. use JWT.verify to verify user token (done in the requireSignin func))
router.get('/secret', requireSignin, isAdmin, secret);

export default router;