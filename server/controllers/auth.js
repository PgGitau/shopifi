import User from "../models/user.js";
import { hashPassword, comparePassword} from '../helpers/auth.js';

export const register = async (req, res) => {
    try {
        // 1. destructure from req.body
        const { name, email, password, address } = req.body;

        // 2.all fields require validation
        if (!name.trim()) {
            return res.json({error: "Name is required"});
        }
        if (!email) {
            return res.json({error: "Email is required"});
        }
        if (!password || password.length < 6) {
            return res.json({error: "Password must be atleast 6 characters long"});
        }
        if (!address.trim()) {
            return res.json({error: "Address is required"});
        }

        // 3. check if email is taken
        const existingUser = await User.findOne({ email }); //same as {email: email}
        if (existingUser) {
            return res.json({error: "Email is taken"})
        }

        // 4. hash password
        const hashedPassword = await hashPassword(password);

        // 5. register user
        const user = await new User({
            name,
            email,
            password: hashedPassword,
            address
        });
        user.save();
        
        // 6. send response
        res.json(user);
        
        
    } catch (err) {
        console.log(err)
    }
}
