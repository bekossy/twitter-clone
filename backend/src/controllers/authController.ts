import { Request, Response } from 'express';
import User from '../models/authModel';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from 'validator';

export const login =async (req:Request, res:Response) => {
    const {
        email, 
        password,
    } = req.body;

    try {
        if (!email || !password) {
        throw new Error("All fields must be filled");
        }

        const user = await User.findOne({email});
        if(!user) throw Error("Incorrect Email");

        const match = await bcrypt.compare(password, user.password);

        if(!match) throw Error("Incorrect Password");

        const token = jwt.sign({_id: user._id}, process.env.SECRET!);

        res.status(201).json({email, token, username: user.username, name: user.profileName})

    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export const register =async (req:Request, res:Response) => {
    const { 
        email, 
        profileName,
        password,
        username,
    } = req.body;

    try {
        if (!email || !password || !profileName || !username) {
            throw new Error("All fields must be filled");
        }

        if (!validator.isEmail(email)) throw new Error("Email is not valid")

        if (!validator.isLowercase(username)) throw new Error("Username should be in Lowercase")

        const isEmail = await User.findOne({email});
        if(isEmail) throw new Error("Email already exists");

        const isUsername = await User.findOne({username});
        if(isUsername) throw new Error("Username already exists")
        
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const user = await User.create({email, profileName, password: hash, username});
        const token = jwt.sign({_id: user._id}, process.env.SECRET!);
        res.status(201).json({name: profileName, token, email, username});
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}