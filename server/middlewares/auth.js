import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// user to require signing in before accessing protected route
// the signed jwt token created when logging in is used here
export const requireSignin = (req, res, next) => {
    try {
        //jwt.verify is used to verify the token with the jwt secret,
        //if verified the token user can access the route,
        //else he can't  
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        // console.log("decoded =>", decoded)
        req.user = decoded;
        // console.log(req.user);
        next();
    } catch (err) {
        return res.status(401).json(err);
    };
}

// to check if user is Admin or not
//if user issignedin and is admin he'll access the protected route,
// if user issignedin but not admin he'll get an "unauthorized" error msg
export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if(user.role !== 1) {
            return res.status(401).send("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
    }
}