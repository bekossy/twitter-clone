import mongoose from "mongoose";
const Schema = mongoose.Schema

const tweetModel = new Schema({
    tweet: String
}, {timestamps: true})

const Tweet = mongoose.model("Tweet", tweetModel)

export default Tweet