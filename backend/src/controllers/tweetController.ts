import { Request, Response } from "express";
import Tweet from "../models/tweetModel";
import User from "../models/authModel";
import mongoose from "mongoose";
import { CustomRequest } from "../middleware/authTweets";

export const getAllTweets = async (req:Request, res:Response) => {
    try {
        const data = await Tweet.find({}).sort({createdAt: -1})
        res.status(200).json(data)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}

export const addNewTweet =async (req:CustomRequest, res:Response) => {
    const {tweet} = req.body;

    try {
        const user_id = req.user._id;
        const user = await User.findById(user_id);
        const data = await Tweet.create({tweet, user_id, profileName: user?.profileName, username: user?.username})
        res.status(200).json(data)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}

export const deleteTweet =async (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "Invalid ID"})
        const data = await Tweet.findOneAndDelete({_id: id});
        if(!data) return res.status(404).json({error: "No document found"})
        res.status(200).json(data)
    } catch (error:any) {
        res.status(404).json({error:error.message})
    }
}