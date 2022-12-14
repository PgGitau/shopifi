import User from "../models/user.js";
import { hashPassword, comparePassword} from '../helpers/auth.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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
        
        // 6. create signed jwt to be used in protected routes
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d' });

        // 7. send response
        res.json({
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                role: user.role,
            },
            token // same as token: token
        });
        
        
    } catch (err) {
        console.log(err)
    }
}

// for login to compare passwords
export const login = async (req, res) => {
    try {
        // 1. destructure from req.body
        const { email, password } = req.body;

        // 2.all fields require validation
        if (!email.trim()) {
            return res.json({error: "Email is required"});
        }
        if (!password || password.length < 6) {
            return res.json({error: "Password must be atleast 6 characters long"});
        }

        // 3. check if email exists
        const user = await User.findOne({ email }); //same as {email: email}
        if (!user) {
            return res.json({error: "Email/User not found"})
        }

        // 4. compare password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({error: "Wrong password!!"})
        }

        // 5. create signed jwt to be used in protected routes
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d' });

        // 6. send response
        res.json({
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                role: user.role,
            },
            token // same as token: token
        });
        
        
    } catch (err) {
        console.log(err)
    }
}

// secret function as a protected route
export const secret = async (req, res) => {
    res.json({ currentUser: req.user })
}