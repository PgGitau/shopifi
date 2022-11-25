import jwt from 'jsonwebtoken';

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