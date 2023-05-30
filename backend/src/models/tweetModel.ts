import mongoose from "mongoose";
const Schema = mongoose.Schema

const tweetSchema = new Schema({
    tweet: String,
    user_id: {type: String, required: true},
    profileName: {type:String, required: true},
    username: {type: String, required: true},
}, {timestamps: true})

const Tweet = mongoose.model("Tweet", tweetSchema)

export default Tweet