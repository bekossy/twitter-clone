import jwt from "jsonwebtoken";
import User from "../models/authModel"
import {Request, Response, NextFunction} from "express";

export interface CustomRequest  extends Request{
    user?: any
}

export const authTweets =async (req:CustomRequest , res:Response, next:NextFunction) => {
    const {authorization} = req.headers;

    if(!authorization) return res.status(401).json({error: "Authorization token required"});

    const token = authorization.split(" ")[1]

    try {
        const {_id}:any = jwt.verify(token, process.env.SECRET!);
        req.user = await User.findOne({_id}).select("_id");
        next();
    } catch (error:any) {
        res.status(401).json({error: "Request is not authorized"});
    }
}