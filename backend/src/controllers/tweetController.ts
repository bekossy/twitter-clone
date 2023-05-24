import { Request, Response } from "express";
import Tweet from "../models/tweetModel";
import mongoose from "mongoose";

export const getAllTweets = async (req:Request, res:Response) => {
    try {
        const data = await Tweet.find({}).sort({createdAt: -1})
        res.status(200).json(data)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}

export const addNewTweet =async (req:Request, res:Response) => {
    const {tweet} = req.body;

    try {
        const data = await Tweet.create({tweet})
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

export const editTweet =async (req:Request, res:Response) => {
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "Invalid ID"});
        const updatedData = await Tweet.findOneAndUpdate({_id: id}, {...req.body});
        if(!updatedData) return res.status(404).json({error: "No document found"});
        res.status(200).json(updatedData)
    } catch (error:any) {
        res.status(404).json({error:error.message})
    }
}