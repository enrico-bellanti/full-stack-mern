import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user";

export const signin = async (req, res) => {
    const {email, password} = req.body,

    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User doesn't exist."})
    } catch (error) {
        
    }
};
export const signup = async (req, res) => {};