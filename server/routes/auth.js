import express from 'express';

const router = express.Router();

//middlewares
import {requireSignin} from '../middlewares/auth.js';

// controllers
// import {users} from '../controllers/auth.js';
import {register, login} from '../controllers/auth.js';

// testing GET route
//  router.get('/users', users);


// testing post route
router.post('/register', register);
router.post('/login', login)

//testing protected route (1. send token to header(done in postman headers section), 2.)
router.get('/secret', requireSignin, (req, res) => {
    res.json({message: "You have access to this secret route"})
})

export default router;